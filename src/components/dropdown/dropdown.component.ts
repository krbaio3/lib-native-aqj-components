import './dropdown.component.scss'

class MySelector extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
      <select>
        <option value="">Seleccione una opción</option>
        <!-- Opciones adicionales pueden ser añadidas aquí -->
      </select>
    `;
    }
}
customElements.define('my-selector', MySelector);
