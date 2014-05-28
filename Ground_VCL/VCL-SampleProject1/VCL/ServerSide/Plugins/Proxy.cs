using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Text;
using System.Text.RegularExpressions;
using System.Web;
using System.Web.SessionState;

namespace VCLServer
{
    public class PROXY : VCLPlugin, iVCLPlugin
    {
        override public Boolean execute(HttpRequest request, HttpResponse response, HttpSessionState session, JObject jParam)
        {
            try
            {
                string url = jsonString(jParam, "URL");

                string address = string.Format(
                        "{0}?P={1}", url,
                        Uri.EscapeDataString(jParam.ToString()));
                WebRequest req = WebRequest.Create(address);

                WebResponse rep = req.GetResponse();
                using (Stream stream = rep.GetResponseStream())
                {
                    StreamReader reader = new StreamReader(stream, Encoding.UTF8);
                    String responseString = reader.ReadToEnd();
                    response.ContentType = rep.ContentType;
                    response.Write(responseString);
                }
            }
            catch (WebException e)
            {
                using (var stream = e.Response.GetResponseStream())
                using (var reader = new StreamReader(stream))
                {
                    return ServerUtils.raiseError(response, reader.ReadToEnd());
                }

            }
            return true;
        }
    }
}