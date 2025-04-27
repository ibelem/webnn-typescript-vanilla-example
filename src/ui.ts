import { checkWebNNSupport } from './webnn';

export function initializeUI(): void {
  const webnnButton = document.querySelector<HTMLButtonElement>('#webnn')!;
  const statusElement = document.querySelector<HTMLDivElement>('#status')!;

  async function showWebNNSupport(): Promise<void> {
    const isSupported = await checkWebNNSupport();
    statusElement.textContent = `WebNN is ${isSupported ? 'supported' : 'not supported'}`;
  }

  webnnButton.addEventListener('click', showWebNNSupport);
}
