let listaPeliculas = JSON.parse(localStorage.getItem('listaPeliculasKey')) || [];

// dibujar columnas
// map es para renderizar algo nuevo
listaPeliculas.map((pelicula)=>{crearColumna(pelicula)})

function crearColumna(pelicula){
    let grilla = document.querySelector('#grillaSeries')
    grilla.innerHTML += `
    <aside class="col-12 col-md-4 col-lg-3 mb-3">
          <div class="card" >
            <img src="${pelicula.imagen}" class="card-img-top" alt="${pelicula.titulo}">
            <div class="card-body">
              <h5 class="card-title">${pelicula.titulo}</h5>
              <button class="btn btn-primary" onclick="detallePelicula('${pelicula.codigo}')">ver detalle</button>
            </div>
          </div>
        </aside>`

}

function detallePelicula(codigo){
    console.log(codigo)
    console.log(window.location.origin+'/pages/detalle.html?codigo='+codigo) //origi nes el dominio donde esta
    window.location.href= window.location.origin+'/pages/detalle.html?codigo='+codigo; // redreccionar a url valido
}