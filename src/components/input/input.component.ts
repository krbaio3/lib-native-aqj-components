import './input.component.scss';

class MyInput extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.innerHTML = `<label for="${this.getAttribute('for')}"" ><slot></slot></<label> `;
    }

    connectedCallback() {
        console.log('Custom square element added to page.');
    }
    disconnectedCallback() {
        console.log('Custom square element removed from page.');
    }
    adoptedCallback() {
        console.log('Custom square element moved to new page.');
    }
    attributeChangedCallback(name, oldValue, newValue) {
        console.log('Custom square element attributes changed.');
    }
}
customElements.define('my-input', MyInput);
