import { View } from './view.js';
export class MensagemView extends View {
    template(model) {
        return `
            <p class="alert alert-info">${model}</p>
        `;
    }
    timerMessage() {
        setTimeout(() => {
            this.element.innerHTML = "";
        }, 3000);
    }
}
