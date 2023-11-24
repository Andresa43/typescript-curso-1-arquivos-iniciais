//guarda uma lista de negociações 

import { Negociacao } from "./negociacao.js";

export class Negociacoes {
    private negociacoes: Array<Negociacao> = [];

    //outra forma de declarar a minha propriedade
    // private negociacoes: Negociacao[] = []

    adiciona(negociacao: Negociacao){
        this.negociacoes.push(negociacao)
    }

    //o readonly não permite alterar o array, somente leitura
    lista(): ReadonlyArray<Negociacao>{
        //uso de exped operaton para evitar alteração desse array
        //pegar cada item dessa lista e colocar individualmente dentro
        //dessa nova lista
        // return [...this.negociacoes]

        return this.negociacoes
    }
}

const negociacoes = new Negociacoes();

// negociacoes.lista().forEach( n => {
//     console.log(n)
// })