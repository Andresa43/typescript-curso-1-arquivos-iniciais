export class Negociacao {
    //declarando as propriedades da minha classe
    private _data: Date;
    private _quantidade: number;
    private _valor: number;

    //recebendo os parametros
    constructor (data: Date, quantidade: number, valor: number){
        //atribuindo os parametros para cada propriedade
        this._data = data;
        this._quantidade = quantidade;
        this._valor = valor;
    }

    //outra maneira de criar um construtor que deixa 
    //as propriedades declaradas por debaixo do pano:
    // constructor(
    //     private _data: Date,
    //     private _quantidade: number,
    //     private _valor: number,
    // ){}

    get data(): Date{
        //utilizando programação defensiva
        const data = new Date(this._data.getTime())
        return data
    }

    get quantidade(): Number{
        return this._quantidade
    }

    get valor(): Number{
        return this._valor
    }

    get volume(): Number{
         return this._quantidade * this._valor
    }

    public static criaDe(dataString: string, quantidadeString: string, valorString: string): Negociacao{
        const exp = /-/g;
        const date = new Date (dataString.replace(exp, ","));
        const quantidade = parseInt(quantidadeString);
        const valor = parseFloat(valorString);
        return new Negociacao(date, quantidade, valor)
    }
}




