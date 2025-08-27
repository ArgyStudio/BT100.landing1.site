// ejemplos.js

document.addEventListener('DOMContentLoaded', () => {
const ejemplos = [
  'EJEMPLO: Cargás $17.000, Jugás con $102.000',
  'EJEMPLO: Cargás $12.000, Jugás con $72.000',
  'EJEMPLO: Cargás $24.000, Jugás con $144.000',
  'EJEMPLO: Cargás $10.000, Jugás con $60.000',
  'EJEMPLO: Cargás $21.000, Jugás con $126.000',
  'EJEMPLO: Cargás $15.000, Jugás con $90.000',
  'EJEMPLO: Cargás $20.000, Jugás con $120.000',
  'EJEMPLO: Cargás $13.000, Jugás con $78.000',
  'EJEMPLO: Cargás $25.000, Jugás con $150.000',
  'EJEMPLO: Cargás $11.000, Jugás con $66.000',
  'EJEMPLO: Cargás $19.000, Jugás con $114.000',
  'EJEMPLO: Cargás $14.000, Jugás con $84.000',
  'EJEMPLO: Cargás $22.000, Jugás con $132.000',
  'EJEMPLO: Cargás $18.000, Jugás con $108.000',
  'EJEMPLO: Cargás $16.000, Jugás con $96.000',
  'EJEMPLO: Cargás $23.000, Jugás con $138.000'
];






  const textoEjemplo = document.getElementById('example-text');
  let idx = 0;
  const intervaloMs = 4500; 

  function nextEjemplo() {
    textoEjemplo.textContent = ejemplos[idx];
    idx = (idx + 1) % ejemplos.length;
  }

  nextEjemplo();
  setInterval(nextEjemplo, intervaloMs);
});
