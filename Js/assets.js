//Barra de navegacion
var navegador = document.getElementById("barNav");
navegador.innerHTML = `<div class="navBar">
   <a href="https://github.com/UlisesLA" target="_blank">Repositorios</a>
   <a href="#">Programacion Web</a>
   <a href="../index.html">ULISES</a>
   <a href="../Desarrollo3d.html">Desarrollo 3D</a>
   <a href="../IA.html">Inteligencia Artifial</a>   
</div>`;

//Barra de Redes sociales
var redes = document.getElementById("redesSociales");
redes.innerHTML = `
<div class="contacto">
   <div class="icon">
      <a href="https://www.instagram.com/drazvon/" target="_blank">
         <svg height="80" width="80">
            <circle cx="40" cy="40"r="35" stroke="white" stroke-width="4" fill="none"></circle>
         </svg>
      <i class="bx bxl-instagram"></i>
      </a>
   </div>


   <div class="icon">
      <a href="https://www.youtube.com/channel/UCI3zz5WholXzO6lqQgcLdTA" target="_blank">
         <svg height="80" width="80">
            <circle cx="40" cy="40"r="35" stroke="white" stroke-width="4" fill="none"></circle>
         </svg>
         <i class="bx bxl-youtube"></i>
      </a>
   </div>

   <div class="icon">
      <a href="https://www.twitch.tv/drazvon" target="_blank">
         <svg height="80" width="80">
            <circle cx="40" cy="40"r="35" stroke="white" stroke-width="4" fill="none"></circle>
         </svg>
         <i class="bx bxl-twitch"></i>
      </a>
   </div>

   <div class="icon">
      <a href="https://github.com/UlisesLA" target="_blank">
         <svg height="80" width="80">
            <circle cx="40" cy="40"r="35" stroke="white" stroke-width="4" fill="none"></circle>
         </svg>
         <i class="bx bxl-github"></i>
      </a>
   </div>


   <div class="icon">
      <a href="https://twitter.com/drazfon" target="_blank">
         <svg height="80" width="80">
            <circle cx="40" cy="40"r="35" stroke="white" stroke-width="4" fill="none"></circle>
         </svg>
         <i class="bx bxl-twitter"></i>
      </a>
   </div>
</div>`;

//Pie de Pagina
var pie = document.getElementById("piePagina");
pie.innerHTML = `<p>Todos los derechos reservados Ulises Lopez Amezcua 2022</p>`;
