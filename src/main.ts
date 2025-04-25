import './style.css';
import { initializeUI } from './ui';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <h1>WebNN Vanilla TypeScript Example</h1>
    <div class="card">
      <button id="webnn" type="button">Check WebNN</button>
    </div>
    <div id="status" class=""></div>
  </div>
`;

initializeUI();
