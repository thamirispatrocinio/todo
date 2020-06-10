export class Todo{//para tornar a classe publica

    //Metodo construtor é chamado assim que é estanciada a classe, o metodo possui duas propriedades
    constructor(
        public title: string,
        public done: boolean
    )  { }

    //public batata: string -> depois quando for estanciar a classe não tem opção de consulta, como no construtor
}