exports.ClienteDB = function (banco)
{
    var self = this;
    self.db = new Array();
    self.nome_banco = banco;

    self.contador = 0;

    self.gerarchave = function (dado)
    {
        self.contador++;
        return self.nome_banco + self.contador;
    }

    self.add = function (dado)
    {
        var chave = self.gerarchave();
        self.db.push({ chave: chave, dado: dado });
    };


    self.delete = function (e)
    {
        delete self.db[e];
    }

    self.update = function (c, d)
    {


    }
}

self.listadados = function (e)
{
    for (i = 0; i <= e; i++) {
        console.log(self.db[i]);
    }
}

self.sync = function () {

}
