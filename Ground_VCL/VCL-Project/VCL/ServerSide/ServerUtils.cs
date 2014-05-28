using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.OleDb;
using System.Data.SqlClient;
using System.IO;
using System.Linq;
using System.Text;
using System.Web;

namespace VCLServer
{
    public class ServerUtils
    {
        private static String DataReader2JSON(OleDbDataReader reader)
        {
            DataTable schemaTable;
            schemaTable = reader.GetSchemaTable();


            int fields = reader.FieldCount;

            StringBuilder sb = new StringBuilder();
            StringWriter sw = new StringWriter(sb);
            JsonWriter jsonWriter = new JsonTextWriter(sw);
            jsonWriter.WriteStartObject();

            jsonWriter.WritePropertyName("META");
            jsonWriter.WriteStartArray();
            int i = 0;
            Boolean[] isDate = new Boolean[fields];
            foreach (DataRow field in schemaTable.Rows)
            {
                jsonWriter.WriteStartObject();
                jsonWriter.WritePropertyName("NAME");
                jsonWriter.WriteValue(field["ColumnName"].ToString().ToUpper());
                jsonWriter.WritePropertyName("SIZE");
                jsonWriter.WriteValue(field["ColumnSize"].ToString());

                System.Type dt = (System.Type)field["DataType"];
                jsonWriter.WritePropertyName("TYPE");
                switch (Type.GetTypeCode(dt))
                {
                    case TypeCode.Int16:
                    case TypeCode.Int32:
                    case TypeCode.Int64:
                    case TypeCode.Decimal:
                    case TypeCode.Double:
                    case TypeCode.Single:
                    case TypeCode.UInt16:
                    case TypeCode.UInt32:
                    case TypeCode.UInt64:
                    case TypeCode.Byte:
                        jsonWriter.WriteValue("number"); break;
                    case TypeCode.String:
                    case TypeCode.Char:
                        jsonWriter.WriteValue("string"); break;
                    case TypeCode.DateTime:
                        {
                            jsonWriter.WriteValue("date");
                            isDate[i] = true;
                            break;
                        }
                    case TypeCode.Boolean:
                        jsonWriter.WriteValue("bool"); break;
                    default: jsonWriter.WriteValue(dt.Name); break;
                }
                i++;
                jsonWriter.WriteEndObject();
            }
            jsonWriter.WriteEndArray();

            jsonWriter.WritePropertyName("DATA");
            jsonWriter.WriteStartArray();
            DateTime d1 = new DateTime(1970, 1, 1);
            while (reader.Read())
            {
                jsonWriter.WriteStartObject();
                for (i = 0; i < fields; i++)
                {
                    jsonWriter.WritePropertyName(reader.GetName(i).ToUpper());
                    if (reader[i] == null || reader[i] is DBNull) jsonWriter.WriteNull();
                    else if (isDate[i])
                    {
                        DateTime d2 = ((DateTime)(reader[i])).ToUniversalTime();
                        jsonWriter.WriteValue(new TimeSpan(d2.Ticks - d1.Ticks).TotalMilliseconds);
                    }
                    else jsonWriter.WriteValue(reader[i]);
                }

                jsonWriter.WriteEndObject();
            }
            jsonWriter.WriteEndArray();
            jsonWriter.WriteEndObject();
            jsonWriter.Close();

            return sw.ToString();
        }

        public static Boolean raiseError(HttpResponse response, String message,int statusCode = 500)
        {
            response.StatusCode = statusCode;
            response.Write(message);
            response.End();

            return false;
        }

        public static String SQL2JSON(String DatabaseName, String SQL, String SQLParams)
        {
            JObject jParams = JObject.Parse(SQLParams);
            return SQL2JSON(DatabaseName, SQL, jParams);
        }


        public static String SQLEXEC(String DatabaseName, String SQL, JObject SQLParams)
        {
            System.Configuration.ConnectionStringSettings congConnection;
            congConnection = System.Configuration.ConfigurationManager.ConnectionStrings[DatabaseName];

            OleDbConnection con = new OleDbConnection(congConnection.ConnectionString);;
            try
            {
                OleDbCommand command = new OleDbCommand(SQL, con);

                foreach (var item in SQLParams)
                {
                    if (item.Value != null && item.Value.ToString().Length > 10 &&
                        item.Value.ToString().Substring(0, 4).Equals("!~@!"))
                    {
                        DateTime time = DateTime.Parse(item.Value.ToString().Substring(4, item.Value.ToString().Length - 4));
                        time = time.AddTicks(-(time.Ticks % TimeSpan.TicksPerSecond));
                        command.Parameters.AddWithValue("?", time);
                    }
                    else
                    {
                        var value = item.Value.ToObject<Object>();
                        command.Parameters.AddWithValue("?", value);
                    }
                }
                con.Open();
                command.ExecuteNonQuery();
            }
            finally
            {
                con.Close();        
            }
           
            JObject pageObj = new JObject();
            pageObj["STATUS"] = "OK";
            return pageObj.ToString();
        }

        public static String SQL2JSON(String DatabaseName, String SQL, JObject SQLParams)
        {
            System.Configuration.ConnectionStringSettings congConnection;
            congConnection = System.Configuration.ConfigurationManager.ConnectionStrings[DatabaseName];

            OleDbConnection con = new OleDbConnection(congConnection.ConnectionString);
            try
            {
                OleDbDataReader reader;
                OleDbCommand command = new OleDbCommand(SQL, con);

                foreach (var item in SQLParams)
                {
                    if (item.Value != null && item.Value.ToString().Length > 10 &&
                        item.Value.ToString().Substring(0, 4).Equals("!~@!"))
                    {
                        DateTime time = DateTime.Parse(item.Value.ToString().Substring(4, item.Value.ToString().Length - 4));
                        time = time.AddTicks(-(time.Ticks % TimeSpan.TicksPerSecond));
                        command.Parameters.AddWithValue("?", time);
                    }
                    else
                    {
                        var value = item.Value.ToObject<Object>();
                        command.Parameters.AddWithValue("?", value);
                    }
                }
                con.Open();
                reader = command.ExecuteReader();
                String RC = DataReader2JSON(reader);
                reader.Close();
                return RC;
            }
            finally
            {
                con.Close();
            }

        }
        public static String DataTable2JSON(DataTable dtReturnedData)
        {
            StringBuilder sb = new StringBuilder();
            StringWriter sw = new StringWriter(sb);
            JsonWriter jsonWriter = new JsonTextWriter(sw);
            jsonWriter.WriteStartObject();

            jsonWriter.WritePropertyName("META");
            jsonWriter.WriteStartArray();
            Boolean[] isDate = new Boolean[dtReturnedData.Columns.Count];
            for (int i = 0; i < dtReturnedData.Columns.Count; i++)
            {
                jsonWriter.WriteStartObject();
                jsonWriter.WritePropertyName("NAME");
                jsonWriter.WriteValue(dtReturnedData.Columns[i].ColumnName.ToUpper());
                jsonWriter.WritePropertyName("SIZE");
                jsonWriter.WriteValue(dtReturnedData.Columns[i].MaxLength.ToString());
                System.Type dt = dtReturnedData.Columns[i].DataType;
                jsonWriter.WritePropertyName("TYPE");
                switch (Type.GetTypeCode(dt))
                {
                    case TypeCode.Int16:
                    case TypeCode.Int32:
                    case TypeCode.Int64:
                    case TypeCode.Decimal:
                    case TypeCode.Double:
                    case TypeCode.Single:
                    case TypeCode.UInt16:
                    case TypeCode.UInt32:
                    case TypeCode.UInt64:
                    case TypeCode.Byte:
                        jsonWriter.WriteValue("number"); break;
                    case TypeCode.String:
                    case TypeCode.Char:
                        jsonWriter.WriteValue("string"); break;
                    case TypeCode.DateTime:
                        {
                            jsonWriter.WriteValue("date");
                            isDate[i] = true;
                            break;
                        }
                    case TypeCode.Boolean:
                        jsonWriter.WriteValue("bool"); break;
                    default: jsonWriter.WriteValue(dt.Name); break;
                }
                jsonWriter.WriteEndObject();
            }
            jsonWriter.WriteEndArray();

            jsonWriter.WritePropertyName("DATA");
            jsonWriter.WriteStartArray();
            DateTime d1 = new DateTime(1970, 1, 1);
            for (int i = 0; i < dtReturnedData.Rows.Count; i++)
            {
                jsonWriter.WriteStartObject();
                for (int j = 0; j < dtReturnedData.Columns.Count; j++)
                {
                    jsonWriter.WritePropertyName(dtReturnedData.Columns[j].ColumnName.ToUpper());
                    if (dtReturnedData.Rows[i][j] == null || dtReturnedData.Rows[i][j] is DBNull) jsonWriter.WriteNull();
                    else if (isDate[j])
                    {
                        DateTime d2 = ((DateTime)(dtReturnedData.Rows[i][j])).ToUniversalTime();
                        jsonWriter.WriteValue(new TimeSpan(d2.Ticks - d1.Ticks).TotalMilliseconds);
                    }
                    else jsonWriter.WriteValue(dtReturnedData.Rows[i][j]);
                }

                jsonWriter.WriteEndObject();
            }
            jsonWriter.WriteEndArray();
            jsonWriter.WriteEndObject();
            jsonWriter.Close();

            return sw.ToString();
        }

        public static String DataSet2JSON(DataSet dsReturnedData)
        {
            StringBuilder sb = new StringBuilder();
            StringWriter sw = new StringWriter(sb);
            JsonWriter jsonWriter = new JsonTextWriter(sw);
            DataTable dt = null;
            jsonWriter.WriteStartObject();
            jsonWriter.WritePropertyName("TABLES");
            jsonWriter.WriteStartArray();
            for (int i = 0; i < dsReturnedData.Tables.Count; i++)
            {
                dt = dsReturnedData.Tables[i];
                if (dt != null)
                {
                    jsonWriter.WriteStartObject();
                    jsonWriter.WritePropertyName("TABLE_NAME");
                    jsonWriter.WriteValue(dt.TableName);
                    jsonWriter.WritePropertyName("TABLE");
                    jsonWriter.WriteRawValue(DataTable2JSON(dt));
                    jsonWriter.WriteEndObject();
                }
            }
            jsonWriter.WriteEndArray();
            jsonWriter.WriteEndObject();
            jsonWriter.Close();
            return sw.ToString();
        }


    }


}