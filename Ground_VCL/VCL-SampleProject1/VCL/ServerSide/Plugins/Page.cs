using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Web;
using System.Web.SessionState;

namespace VCLServer
{
    public class PAGE 
    {
        public Boolean execute(HttpResponse response, HttpRequest request,HttpSessionState session)
        {
            //check if this is page class
            response.ContentType = "application/x-javascript";
            String fileName = request.MapPath(request.FilePath);
            if (File.Exists(Path.ChangeExtension(fileName, ".html")) || File.Exists(Path.ChangeExtension(fileName, ".htm"))) {
                //this is page
                JObject page = addPage(request);
                if (page["ROLE"]!=null && page["ROLE"].ToString() != "") 
                {//check for scurity
                    string[] values = page["ROLE"].ToString().Split(',');
                    if (values.Length > 0)
                    {
                        if (session["ROLE"] != null)
                        {
                            var results = Array.FindAll(values, s => s.Equals(session["ROLE"].ToString()));
                        }
                    }
                }
            }
            using (Stream stream = File.OpenRead(fileName))
            {
                stream.CopyTo(response.OutputStream);
            }
            return true;
        }

        private JObject addPage(HttpRequest request)
        {
            String pageName = request.FilePath;
            if (pageName.Substring(0, 1).Equals("/")) pageName = pageName.Substring(1);
            JArray pageList = new JArray();
            string pagesStr = System.IO.File.ReadAllText(@request.MapPath("\\Config\\pages.json"));
            if (pagesStr != "")
            {
                pageList = JArray.Parse(pagesStr);
                foreach (JObject item in pageList.Children())
                {
                    if (((String)item["PAGENAME"]).ToUpper() == pageName.ToUpper()) return item;
                }
            }
            JObject pageObj = new JObject();
            pageObj["PAGENAME"] = pageName;
            pageObj["ROLE"] = "";
            pageObj["USERS"] = "";
            pageList.Add(pageObj);
            System.IO.File.WriteAllText(@request.MapPath("\\Config\\pages.json"), pageList.ToString());
            return pageObj;
        }

    }

}