export class Negociacao {
    //recebendo os parametros
    constructor(data, quantidade, valor) {
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
    get data() {
        //utilizando programação defensiva
        const data = new Date(this._data.getTime());
        return data;
    }
    get quantidade() {
        return this._quantidade;
    }
    get valor() {
        return this._valor;
    }
    get volume() {
        return this._quantidade * this._valor;
    }
    static criaDe(dataString, quantidadeString, valorString) {
        const exp = /-/g;
        const date = new Date(dataString.replace(exp, ","));
        const quantidade = parseInt(quantidadeString);
        const valor = parseFloat(valorString);
        return new Negociacao(date, quantidade, valor);
    }
}
