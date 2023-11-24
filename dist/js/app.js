/*import { Negociacao } from "./models/negociacao.js";

const negociacao = new Negociacao(new Date(), 10, 100);
console.log(negociacao.data);
console.log(negociacao); */
import { NegocicaoController } from "./controllers/negociacao-controller.js";
const controller = new NegocicaoController();
const form = document.querySelector(".form");
form.addEventListener("submit", event => {
    event.preventDefault();
    controller.adiciona();
});
