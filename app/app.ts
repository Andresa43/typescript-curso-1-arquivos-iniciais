/*import { Negociacao } from "./models/negociacao.js";

const negociacao = new Negociacao(new Date(), 10, 100);
console.log(negociacao.data);
console.log(negociacao); */

import { NegocicaoController } from "./controllers/negociacao-controller.js";

const controller = new NegocicaoController();

const form = document.querySelector(".form");
if(form){
    form.addEventListener("submit", event => {
        event.preventDefault()
        controller.adiciona()
    })
}else{
    throw Error("Não foi possível finalizar a aplicação. Veirifique se o form existe.")
}


