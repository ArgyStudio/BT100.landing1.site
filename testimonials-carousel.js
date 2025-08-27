// testimonials-carousel.js

// Testimonios dinámicos y auto-scroll vertical
(function(){
const data = [
  { name: "Noelia Salas",      city: "Berazategui",        time: "6:15 pm",  text: `Vi un video en Facebook, metí $2.000 y al toque me acreditaron $12.000. Todavía no lo creo, fue todo muy rápido.` },
  { name: "Florencia Torres",  city: "San Isidro",         time: "4:40 pm",  text: `Lo vi en Instagram, pensé que era trampa, igual probé con poco y me dieron 6 veces lo que puse. Retiré sin drama.` },
  { name: "Santiago Cáceres",  city: "La Matanza",         time: "8:00 am",  text: `Subí $7.000 porque en el video mostraban la promo y terminé jugando con $42.000. Fue raro pero real.` },
  { name: "Federico Martínez", city: "Morón",              time: "7:55 pm",  text: `No soy de creer en esas cosas, fui escéptico, pero me hicieron x6. Lo comprobé yo mismo.` },
  { name: "Gonzalo Romero",    city: "Escobar",            time: "5:35 pm",  text: `Entré medio desconfiado; cargué $6.000 y me los multiplicaron. Atención rápida y sin vueltas.` },
  { name: "Camila López",      city: "Tigre",              time: "6:10 pm",  text: `Un video me llamó la atención, cargué y me aparecieron $36.000 en la cuenta. Me sorprendió lo legítimo que fue.` },
  { name: "Diego Fernández",   city: "Pilar",              time: "11:05 am", text: `Al principio dudaba, pero probé y me dieron 6×. Hice el retiro y todo OK.` },
  { name: "Micaela Aguirre",   city: "Lomas de Zamora",    time: "6:45 pm",  text: `Vi el video en Facebook, puse $6.000 y terminé con $36.000. No hay letra chica, al menos en mi caso.` },
  { name: "Alejandro Pérez",   city: "La Plata",           time: "10:12 am", text: `Puse $5.000 porque era poca plata y me acreditaron $30.000. Fue rápido y sin vueltas.` },
  { name: "Ramiro Toledo",     city: "San Miguel",         time: "2:05 pm",  text: `Vi historias y me tentó. De $4.500 a $27.000 en un instante. Soporte atento cuando pregunté.` },
  { name: "Lucía Álvarez",     city: "Malvinas Argentinas",time: "10:50 am", text: `Al principio no quería, pero me terminaron acreditando 6 veces lo que cargué. Fue todo correcto.` },
  { name: "Ignacio Varela",    city: "Lomas de Zamora",    time: "9:15 pm",  text: `Lo vi en Facebook y arriesgué $8.000; me aparecieron $48.000. Me sorprendió lo fácil que fue.` },
  { name: "Julieta Núñez",     city: "Florencio Varela",   time: "1:20 pm",  text: `Publicidad decía x6 y no lo creía. Probé con $5.000 y terminé con $30.000. Soporte respondió rápido.` },
  { name: "Valentina Suárez",  city: "Bahía Blanca",       time: "8:20 am",  text: `Entré por un video, cargué poco y me multiplicaron por seis. Retiré sin complicaciones.` },
  { name: "Tomás Gaitán",      city: "Campana",            time: "3:30 pm",  text: `Vi historias de IG y me animé: me acreditaron 6× mi depósito. Todo fluyó.` },
  { name: "Camilo Bravo",      city: "Lanús",              time: "11:55 am", text: `No creía hasta que lo vi en mi cuenta: de $3.000 a $18.000. Muy conforme con la atención.` },
  { name: "Lucas Rodríguez",   city: "Quilmes",            time: "2:30 pm",  text: `Video en Facebook, cargué $10.000 y jugué con $60.000. Retiro aprobado luego.` },
  { name: "Carolina Juárez",   city: "San Fernando",       time: "7:59 am",  text: `Anuncio prometía x6 y fue tal cual. Hice la prueba y todo salió bien.` },
  { name: "Bianca Zambrano",   city: "Moreno",             time: "9:40 am",  text: `Tenía dudas, pero puse $2.500 y me aparecieron $15.000. Todo sin traba.` },
  { name: "Martina Paredes",   city: "Avellaneda",         time: "3:50 pm",  text: `Lo vi en Facebook, probé con poco y me dieron 500% extra. Atención cordial y proceso simple.` }
];



  const container = document.getElementById('testimonialsCarousel');
  let idx = 0, timer;

  // Crear y anexar elementos al contenedor
  data.forEach((item, i) => {
    const div = document.createElement('div');
    div.className = 'testimonial-item';
   div.innerHTML = `
  <p class="header">
    <img
      src="images/usuario.png"
      alt="Usuario"
      class="icon icon-user"
    />
    ${item.name.trim()}
    <span class="time">${item.time}</span>
  </p>
  <p class="message">
    ${item.text}
  </p>
  <p class="meta">
    <img
      src="images/pin.png"
      alt="Ubicación"
      class="icon icon-pin"
    />
    ${item.city.trim()}
  </p>
`;

    container.appendChild(div);
  });

  const items = container.querySelectorAll('.testimonial-item');

  function show(index) {
    items.forEach((el, i) => {
      el.classList.toggle('active', i === index);
    });
  }

  function next() {
    idx = (idx + 1) % items.length;
    show(idx);
  }

  // Mostrar el primero y lanzar auto-scroll
  show(0);
  timer = setInterval(next, 6500);

  // Pausar al hacer hover o touch
  container.addEventListener('mouseenter', () => clearInterval(timer));
  container.addEventListener('mouseleave', () => timer = setInterval(next, 4000));
  container.addEventListener('touchstart', () => clearInterval(timer));
  container.addEventListener('touchend', () => timer = setInterval(next, 4000));
})();


document.querySelectorAll('.carousel-item img').forEach(img => {
  img.addEventListener('load', () => {
    const skeleton = img.parentElement.querySelector('.skeleton');
    if (skeleton) skeleton.remove();
  });
});