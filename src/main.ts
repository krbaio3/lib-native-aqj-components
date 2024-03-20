import './style.css'
import viteLogo from '/vite.svg'
import './components/button/button.component'; // Asume que este archivo define un custom element




document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    
    <h1>Vite Components</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    
  </div>
`


