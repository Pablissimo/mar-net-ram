
class registro
{
  chave: string;
  dado: string;
}

 class QualiomDB
 {
   
   private contador: number = 0;
   private db: registro[] = [];
   
   constructor(public nome_banco: string)
   {
   }

   gerarchave()
   {
	   this.contador++;
	   return this.nome_banco + this.contador.toString;
   } 
   
     adicionar(dado: string) {
        
        var reg: registro = new registro();
        reg.chave = this.gerarchave();
        reg.dado = dado;
        this.db.push(reg);
    }
 } 