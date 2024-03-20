import './combo.component.scss'

class MyCombo extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
      <input type="text" placeholder="Escribe o selecciona una opción" list="combo-options"/>
      <datalist id="combo-options">
        <!-- Opciones para el datalist aquí -->
      </datalist>
    `;
    }
}
customElements.define('my-combo', MyCombo);
