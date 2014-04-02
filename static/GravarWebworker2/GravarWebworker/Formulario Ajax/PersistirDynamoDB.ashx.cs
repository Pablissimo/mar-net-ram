using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Amazon.DynamoDBv2;
using Amazon.DynamoDBv2.DocumentModel;
using Amazon.Runtime;

namespace GravarWebworker
{
    public class rec : IHttpHandler
    {

        private static AmazonDynamoDBClient cliente;
        private static string arrayDados = "dado";

        public void ProcessRequest(HttpContext context)
        {
            var config = new AmazonDynamoDBConfig();
            config.ServiceURL = "http://dynamodb.us-east-1.amazonaws.com";
            var clienteDB = new AmazonDynamoDBClient( config);

            Table dados = Table.LoadTable(clienteDB, arrayDados);
            var dado = new Document();
            dado["chave"] = context.Request.Params["chave"];
            dado["dado"] = context.Request.Params["dado"];
            dados.PutItem(dado);         
        }

        public bool IsReusable
        {
            get
            {
                return false;
            }
        }
    }
}
