var cursos = [
  {
    id: 1,
    asignatura: "Lenguaje",
    imagen: "https://1.bp.blogspot.com/-0MNfPbaL4yw/ViEM6cVhmlI/AAAAAAAAACE/f_8aRDsqTqw/s1600/presentacionEDITADA.jpg",
    href:"lenguaje.html"
  },
  {
    id: 2,
    asignatura: "Matematica",
    imagen: "https://4.bp.blogspot.com/-ZIXB-sB1oGQ/WyhWHEXS_dI/AAAAAAAAWEQ/YFaaAFmYy18VfroS59Ha0B4IUJL232xiACLcBGAs/s1600/mejores%2Bcanales%2Byoutube%2Bmatematicas.jpg",
    href:"matematica.html",
  },
  {
    id: 3,
    asignatura: "Geografía y CS",
    imagen: "https://historiauniversalula.files.wordpress.com/2014/05/dip.jpg",
    href:"Ciencias.html",
  },
  {
    id: 4,
    asignatura: "Ciencias Naturales",
    imagen: "https://conocelahistoria.com/wp-content/uploads/2018/09/ciencias-naturales.jpg",
    href:"historia.html",
  },
  {
    id: 5,
    asignatura: "Inglés",
    imagen: "https://images.vexels.com/media/users/3/169938/preview2/f02b599d55c05825554ded12f0e84af0-ilustracion-de-asignatura-de-ingles.jpg",
    href:"ingles.html"
  },
  {
    id: 6,
    asignatura: "Educación Tecnologica",
    imagen: "https://static.vecteezy.com/system/resources/previews/000/517/491/non_2x/isometric-artwork-concept-of-technology-education-vector.jpg",
    href:"tecnologia.html",
  },
  {
    id: 7,
    asignatura: "Educación Artistica",
    imagen: "https://populartop.files.wordpress.com/2016/08/766699.jpg?w=584",
    href:"arte.html",
  },
  {
    id: 8,
    asignatura: "Educación Física",
    imagen: "https://i0.wp.com/www.cronicadigital.cl/imagenes/noticias/2016/10/educacion-fisica.jpg?fit=500%2C209&ssl=1",
    href:"educacionF.html",
  },
  {
    id: 9,
    asignatura: "Física",
    imagen: "https://3.bp.blogspot.com/-KRLpMyO7li4/VgLSicTRxkI/AAAAAAAADfU/C8DYG_PD7Y8/s1600/Las-4-fuerzas-fundamentales-de-la-fisica-actual.jpg",
    href:"fisica.html",
  },
  {
    id: 10,
    asignatura: "Química",
    imagen: "https://www.educaciongratuita.es/imagenes/contenido/educacion-secundaria-obligatoria/asignaturas/fisica-y-quimica/contenidos-fisica-y-quimica-2-eso.jpg",
    href:"quimica.html",
  },
  {
    id: 11,
    asignatura: "Biología",
    imagen: "https://s3.amazonaws.com/s3.timetoast.com/public/uploads/photos/6257300/BIOLOGIA.jpg?1422972028",
    href:"biologia.html"
  },
  {
    id: 12,
    asignatura: "Religión",
    imagen: "https://www.lavanguardia.com/r/GODO/LV/p5/WebSite/2018/07/11/Recortada/img_lferro_20180711-122218_imagenes_lv_terceros_istock-842379598-kVMD-U45832841195wF-992x558@LaVanguardia-Web.jpg",
    href:"biologia.html"
  },
  {
    id: 13,
    asignatura: "Filosofía",
    imagen: "https://2.bp.blogspot.com/-dgqEWeA8pm4/UqQ8XzzM9SI/AAAAAAAAPRQ/hMKgbs78pFI/s1600/puede-la-mente-humana-quedarse-sin-memoria.jpg",
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
