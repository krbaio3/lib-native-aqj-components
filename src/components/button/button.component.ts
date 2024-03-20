import './button.component.scss';

class MyButton extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = `<button>${this.getAttribute('label')}</button>`;
    }
}
customElements.define('my-button', MyButton);
