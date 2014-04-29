#!/bin/env node

var fs = require("fs");
var host = process.env.OPENSHIFT_NODEJS_IP || "127.0.0.1";
var port = process.env.OPENSHIFT_NODEJS_PORT || 8080;
var express = require("express");
var mongodb = require('mongodb');

var ClasseAplicacao=function()
{
    var self=this;
  
    self.ConfiguraExpress=function()
    {
  
        self.appex = express();

        self.appex.use(self.appex.router); //use both root and other routes below
        self.appex.use(express.static(__dirname + "/public")); //use static files in ROOT/public folder

        self.appex.get("/", function(request, response){ //root dir
            response.send("Hello-Sao Azul!!");
        });

        self.appex.get("/erro", function(request, response){ //root dir
            response.send(erro);
        });

        self.appex.get("/gravar", function(request, response){ // grava item no servidor

            var chave=request.param('chave');
            var dado=request.param('dado');
	
            self.db_sao_azul.insert(
              {"_id": chave, "dado": dado},
              function(result)
              {  
                  response.send("gravado: "+chave+" "+dado+ " result="+result);
              });	
        });
    };
  
    self.conecta_banco_dados=function(callback)
    {
  
        // https://github.com/openshift-quickstart/openshift-mongo-node-express-example/blob/master/server.js  
 
        var dbServer = new mongodb.Server(process.env.OPENSHIFT_MONGODB_DB_HOST || "127.0.0.1",parseInt(process.env.OPENSHIFT_MONGODB_DB_PORT || 27017));
        self.db = new mongodb.Db('saoazul', dbServer, {safe:false, auto_reconnect: true});
        var dbUser = process.env.OPENSHIFT_MONGODB_DB_USERNAME || 'qualiom';
        var dbPass = process.env.OPENSHIFT_MONGODB_DB_PASSWORD || 'qualiom';

        //var dbServer = new mongodb.Server("127.0.0.1",27017);
        //self.db = new mongodb.Db('saoazul', dbServer, {safe:false, auto_reconnect: true});
        //var dbUser = 'qualiom';
        //var dbPass = 'qualiom';

        self.db.open(function(err, db_open){
            if(err){
                erro=err;
                callback();
            };
            self.db.authenticate(dbUser, dbPass, {authdb: "admin"}, function(err, res){
                if(err){ erro=err; };
                self.db_sao_azul = self.db.collection('saoazul');
                callback();		
            });
        });
    };
  
    self.inicia_servidor=function()
    {
        self.ConfiguraExpress();
        self.appex.listen(port, host);
    }
};

var app=new ClasseAplicacao();
app.conecta_banco_dados(app.inicia_servidor);


