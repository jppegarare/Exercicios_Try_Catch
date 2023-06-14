class MeuErro extends Error
{
  constructor(message)
  {
    super(message)
    this.name = "Erro de Preenchimento"
  }
}

class NerdIF
  {
  constructor(estudante, cosplay, nota_cosplay) {
    this.estudante = estudante;
    this.cosplay = cosplay;
    this.nota_cosplay = nota_cosplay;
  }

  retornarAtributos() 
  {
    try
    {
      return this.atributos();
    }
    catch(erro)
    {
        console.log(erro.stack) 
    }
  }

  atributos() 
  {
    if (this.estudante != "" && this.cosplay !="" && this.nota_cosplay !="")
    {
        return this.estudante + " " + this.cosplay + " " + this.nota_cosplay
    }
    else
    {
        throw new MeuErro("Adicione o nome do estudante, o cosplay e a nota do cosplay para continuar ")
    }
  }
}

const aluno = new NerdIF("João", "Homem-Aranha", 9.5);
const atributos = aluno.retornarAtributos();
console.log(atributos)


