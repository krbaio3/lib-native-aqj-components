import './table.component.scss';
class MyTable extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
      <table>
        <thead>
          <tr>
            <!-- Columnas de encabezado aquí -->
          </tr>
        </thead>
        <tbody>
          <!-- Filas y celdas aquí -->
        </tbody>
      </table>
    `;
    }
}
customElements.define('my-table', MyTable);
