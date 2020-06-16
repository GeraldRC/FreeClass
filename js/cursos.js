var cursos = [
  {
    id: 1,
    asignatura: "Lenguaje",
    imagen: "https://place-hold.it/200x100",
  },
  {
    id: 2,
    asignatura: "Matematica",
    imagen: "https://place-hold.it/200x100",
  },
  {
    id: 3,
    asignatura: "Geografía y CS",
    imagen: "https://place-hold.it/200x100",
  },
  {
    id: 4,
    asignatura: "Historia",
    imagen: "https://place-hold.it/200x100",
  },
  {
    id: 5,
    asignatura: "Lenguas extranjeras",
    imagen: "https://place-hold.it/200x100",
  },
  {
    id: 6,
    asignatura: "Tecnología",
    imagen: "https://place-hold.it/200x100",
  },
  {
    id: 7,
    asignatura: "Arte",
    imagen: "https://place-hold.it/200x100",
  },
  {
    id: 8,
    asignatura: "Educación Física",
    imagen: "https://place-hold.it/200x100",
  },
  {
    id: 9,
    asignatura: "Física",
    imagen: "https://place-hold.it/200x100",
  },
  {
    id: 10,
    asignatura: "Quimica",
    imagen: "https://place-hold.it/200x100",
  },
  {
    id: 11,
    asignatura: "Biologia",
    imagen: "https://place-hold.it/200x100",
  },
];

(function insertarMaterias() {
  var contenido = document.getElementById("contenido");
  for (const i in cursos) {
    contenido.innerHTML += `
    <div class="tarjeta">
        <img src="${cursos[i].imagen}" class="imgt">
        <h4 class="text-center mt-2">${cursos[i].asignatura}</h4>
        <a href="" class="btn btn-primary btn-block mt-2">Ir al curso</a>
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
