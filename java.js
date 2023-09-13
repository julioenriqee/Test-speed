// Tu código JavaScript aquí
const testButton = document.getElementById('test-button');
const resultContainer = document.getElementById('result-container');

testButton.addEventListener('click', () => {
  resultContainer.textContent = 'Prueba en progreso...';

  // Simulando una prueba de velocidad
  setTimeout(() => {
    const uploadSpeed = Math.random() * 10;
    const downloadSpeed = Math.random() * 100;

    resultContainer.textContent = `Velocidad de carga: ${uploadSpeed.toFixed(2)} Mbps, Velocidad de descarga: ${downloadSpeed.toFixed(2)} Mbps`;
  }, 2000);
});
