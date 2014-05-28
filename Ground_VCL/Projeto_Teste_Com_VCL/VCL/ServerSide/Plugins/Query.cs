using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.RegularExpressions;
using System.Web;
using System.Web.SessionState;

namespace VCLServer
{
    public class QUERY : VCLPlugin, iVCLPlugin
    {
        override public Boolean execute(HttpRequest request, HttpResponse response, HttpSessionState session, JObject jParam)
        {
            string sql = "";
            try
            {
                string db = jsonString(jParam,"__DB__");
                sql = jsonString(jParam,"__SQL__");;
                JObject param = jsonJObject(jParam, "__SQLPARAM__"); ;
                bool exec = jsonBool(jParam, "__EXECUTE__");
                if (exec) response.Write(ServerUtils.SQLEXEC(db, sql, param));
                else response.Write(Regex.Replace(ServerUtils.SQL2JSON(db, sql, param), "(\"(?:[^\"\\\\]|\\\\.)*\")|\\s+", "$1"));

            }
            catch (Exception e)
            {
                return ServerUtils.raiseError(response, e.Message+"\non SQL:"+sql);
            }
            return true;
        }
    }
}