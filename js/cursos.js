var cursos = [
  {
    id: 1,
    asignatura: "Lenguaje",
    imagen: "https://place-hold.it/200x100",
    href:"lenguaje.html"
  },
  {
    id: 2,
    asignatura: "Matematica",
    imagen: "https://place-hold.it/200x100",
    href:"matematica.html",
  },
  {
    id: 3,
    asignatura: "Geografía y CS",
    imagen: "https://place-hold.it/200x100",
    href:"Ciencias.html",
  },
  {
    id: 4,
    asignatura: "Historia",
    imagen: "https://place-hold.it/200x100",
    href:"historia.html",
  },
  {
    id: 5,
    asignatura: "Lenguas extranjeras",
    imagen: "https://place-hold.it/200x100",
    href:"ingles.html"
  },
  {
    id: 6,
    asignatura: "Tecnología",
    imagen: "https://place-hold.it/200x100",
    href:"tecnologia.html",
  },
  {
    id: 7,
    asignatura: "Arte",
    imagen: "https://place-hold.it/200x100",
    href:"arte.html",
  },
  {
    id: 8,
    asignatura: "Educación Física",
    imagen: "https://place-hold.it/200x100",
    href:"educacionF.html",
  },
  {
    id: 9,
    asignatura: "Física",
    imagen: "https://place-hold.it/200x100",
    href:"fisica.html",
  },
  {
    id: 10,
    asignatura: "Quimica",
    imagen: "https://place-hold.it/200x100",
    href:"quimica.html",
  },
  {
    id: 11,
    asignatura: "Biologia",
    imagen: "https://place-hold.it/200x100",
    href:"biologia.html"
  },
];

(function insertarMaterias() {
  var contenido = document.getElementById("contenido");
  for (const i in cursos) {
    contenido.innerHTML += `
    <div class="tarjeta">
        <img src="${cursos[i].imagen}" class="imgt">
        <h4 class="text-center mt-2">${cursos[i].asignatura}</h4>
        <a href="${cursos[i].href}" class="btn btn-primary btn-block mt-2">Ir al curso</a>
    </div>
     `;
  }
})();

var btnS= document.getElementById('cerrarSession');

btnS.addEventListener('click',function(){
    setTimeout(function(){
        location.href ="login.html";
    }, 1000);
});
