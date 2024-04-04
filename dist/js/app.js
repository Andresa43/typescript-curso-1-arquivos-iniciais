import { NegocicaoController } from "./controllers/negociacao-controller.js";
const controller = new NegocicaoController();
const form = document.querySelector(".form");
if (form) {
    form.addEventListener("submit", event => {
        event.preventDefault();
        controller.adiciona();
    });
}
else {
    throw Error("Não foi possível finalizar a aplicação. Veirifique se o form existe.");
}
