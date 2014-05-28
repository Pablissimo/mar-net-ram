using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Newtonsoft.Json.Linq;
using System.Web.SessionState;

namespace VCLServer
{
    public class backEnd : IHttpHandler, IRequiresSessionState
    {
        public bool IsReusable
        {
            // Return false in case your Managed Handler cannot be reused for another request.
            // Usually this would be false in case you have some state information preserved per request.
            get { return true; }
        }


        public void ProcessRequest(HttpContext context)
        {
            Func<String, String> param = new Func<String, String>((x) =>
            {
                return context.Request.Params[x];
            });

            if (context.Request.CurrentExecutionFilePathExtension.ToUpper() == ".JS")
            {
                new PAGE().execute(context.Response, context.Request, context.Session);
            }
            else
            {
                if (param("METHOD") == null)
                {
                    JObject rc = new JObject();
                    rc["Results"] = "OK";
                    context.Response.Write(rc);
                    return;
                }

                String method = param("METHOD").ToUpper();
                dynamic jParam = JObject.Parse(HttpUtility.UrlDecode(param("PARAMS")));
                context.Response.ContentType = "application/json";
                iVCLPlugin plugin = null;
                try
                {
                    plugin = (iVCLPlugin)System.Activator.CreateInstance(Type.GetType("VCLServer." + method));
                }
                catch (Exception)
                {
                    ServerUtils.raiseError(context.Response,"Method '"+method+"' was not found on namesapce VCLServer") ;
                    context.ApplicationInstance.CompleteRequest();
                }

                if (plugin != null)
                {
                    plugin.execute(context.Request, context.Response, context.Session, jParam);
                }
            }
        }
    }
}