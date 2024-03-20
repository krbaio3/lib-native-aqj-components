import './group.component.scss';

class MyButtonGroup extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
      <div class="button-group">
        <!-- Botones o elementos del grupo aquí -->
      </div>
    `;
    }
}
customElements.define('my-button-group', MyButtonGroup);
