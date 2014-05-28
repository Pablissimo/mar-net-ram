using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Newtonsoft.Json.Linq;
using System.Web.SessionState;

namespace VCLServer
{
    public class LOGIN : VCLPlugin, iVCLPlugin
    {
        override public Boolean execute(HttpRequest request, HttpResponse response, HttpSessionState session, JObject jParam)
        {
            var result = new JObject();
            String user = jParam["USER"] == null ? "" : jsonString(jParam, "USER");
            String pass = jParam["PASS"] == null ? "" : jsonString(jParam,"PASS");
            String email = jParam["EMAIL"] == null ? "" : jsonString(jParam,"EMAIL");

            JArray userList = new JArray();
            JObject userObject = new JObject();
            response.ContentType = "application/json";

            string userStr = System.IO.File.ReadAllText(@request.MapPath("Config\\users.json"));
            if (userStr == "")
            {
                //create generic admin user
                userObject["USER"] = "Admin";
                userObject["PASSWORD"] = "12345";
                userList.Add(userObject);
                System.IO.File.WriteAllText(@request.MapPath("Config\\users.json"), userList.ToString());
                userStr = userList.ToString();
            }

            result["STATUS"] = "FAIL";
            userList = JArray.Parse(userStr);
            foreach (JObject item in userList.Children())
            {
                if (((String)item["USER"]).ToUpper() == user.ToUpper() && (String)item["PASSWORD"] == pass)
                {
                    result["STATUS"] = "OK";
                    session["USER"] = result["USER"] = item["USER"] == null ? "" : (String)item["USER"];
                    session["ROLE"] = result["ROLE"] = item["ROLE"] == null ? "" : (String)item["ROLE"];
                    session["EMAIL"] = result["EMAIL"] = item["EMAIL"] == null ? "" : (String)item["EMAIL"]; 
                    
                    break;
                }
            }

            response.Write(result);
            return true;
        }
    }
}