using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.RegularExpressions;
using System.Web;
using System.Web.SessionState;

namespace VCLServer
{
    public class REMOTEQUERY : VCLPlugin, iVCLPlugin
    {
        override public Boolean execute(HttpRequest request, HttpResponse response, HttpSessionState session, JObject jParam)
        {
            try
            {
                string queryStr = System.IO.File.ReadAllText(@request.MapPath("Config\\queries.json"));
                JArray queryList = new JArray();
                queryList = JArray.Parse(queryStr);
                foreach (JObject item in queryList.Children())
                {
                    if (((String)item["ID"]).ToUpper() == jsonString(jParam, "__QUERYID__").ToUpper())
                    {
                        string db = (string)item["DB"];
                        bool exec = jsonBool(jParam, "__EXECUTE__");
                        if (exec) response.Write(ServerUtils.SQLEXEC(db, item["SQL"].ToString(), jsonJObject(jParam, "__SQLPARAM__")));
                        else response.Write(Regex.Replace(ServerUtils.SQL2JSON(db, item["SQL"].ToString(), jsonString(jParam, "__SQLPARAM__")), "(\"(?:[^\"\\\\]|\\\\.)*\")|\\s+", "$1"));
                        return true;
                    }
                }
                String msg = "Query '" + (jsonString(jParam, "__QUERYID__").ToUpper() + "' was not found!");
                throw new Exception(msg);
            }
            catch (Exception e)
            {
                return ServerUtils.raiseError(response, e.Message);
            }
        }
    }
}