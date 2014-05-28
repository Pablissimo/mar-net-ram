using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Web;
using System.Web.SessionState;

namespace VCLServer
{
    public class VCLPlugin : iVCLPlugin
    {
        public string jsonString(JObject jsonObject,String property) {
            return jsonObject[property].ToString();
        }
        public bool jsonBool(JObject jsonObject, String property)
        {
            return Convert.ToBoolean(jsonObject[property]);
        }

        public JObject jsonJObject(JObject jsonObject, String property)
        {
            return (JObject)jsonObject[property];
        }
        public JArray jsonJArray(JObject jsonObject, String property)
        {
            return (JArray)jsonObject[property];
        }


        public virtual  Boolean execute(HttpRequest request, HttpResponse response, HttpSessionState session, JObject jParam)
        {
            throw new Exception("execute method was not overridden");
        }
    }

    interface iVCLPlugin
    {
        Boolean execute(HttpRequest request, HttpResponse response, HttpSessionState session, JObject jParam);
    }
}
