// Reemplaza 'TU_CLAVE_API' con tu clave API de TMDB
const apiKey = 'f1805f491aa4514e0e303209f10d218f';
const genresApiUrl = `https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}&language=es-ES`;

async function fetchGenres() {
    try {
        const response = await fetch(genresApiUrl);
        const data = await response.json();
        console.log(data);
        console.log(data.genres)//Array de objetos,cada objeto es un genero con propiedades id y name
        displayGenres(data.genres);//Se llama lafuncion de mostrar generos
    } catch (error) {
        console.error('Error al obtener los géneros:', error);
    }
}







function displayGenres(genres) {//Muestra los géneros en una lista y añade un evento de clic a cada género para llamar a fetchMoviesByGenre con el ID del género
    const genresList = document.getElementById('toggle-submenu2');
    genres.forEach(genre => {
        const listItem = document.createElement('li');
        listItem.textContent = genre.name;
    // Añadir evento de clic que guarda el ID del género en localStorage y redirige a una nueva página
    listItem.addEventListener('click', () => {
        localStorage.setItem('selectedGenreId', genre.id);//Guardamos id en almacenamiento local para no tener que construir URLS y pasarla por parametros
        localStorage.setItem('nombreGeneroSelet',genre.name);//Guardo Nombre del genero seleccionado para utilizrlo en otro archivo js
        window.open('./pages/generos.html', '_blank');
    });
    genresList.appendChild(listItem);
    });
}






/*async function fetchMoviesByGenre(genreId) {

//// ----Construir la URL de la API usando el ID del género---/////

    const moviesApiUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=${genreId}&language=es-ES`;//Parametro de consulta ` with_genres` de la api se usa para filtrar películas por uno o más géneros.Dentro de la sección "Discover" de la API hay detalles sobre los parámetros de consulta disponibles
    try {
        const response = await fetch(moviesApiUrl);
        const data2 = await response.json();
        console.log(data2);
       // window.location.href ='../pages/generos.html';
        displayMovies(data2.results);
    } catch (error) {
        console.error('Error al obtener las películas:', error);
    }
}

function displayMovies(movies) {
    const generoTitulo = document.getElementById('genero-titulo');
    generoTitulo.innerText =`Películas de ${genre.name}`;
    const moviesContainer = document.getElementById('movies-genero');
    moviesContainer.innerHTML = ''; // Limpiar contenedor antes de mostrar nuevas películas
    movies.forEach(movie => {
        const movieElement = document.createElement('div');
        movieElement.className = 'movie';
        
        const titleElement = document.createElement('div');
        titleElement.className = 'movie-title';
        titleElement.textContent = movie.title;

        const overviewElement = document.createElement('div');
        overviewElement.textContent = movie.overview;

        movieElement.appendChild(titleElement);
        movieElement.appendChild(overviewElement);
        moviesContainer.appendChild(movieElement);
    });
}

/*function consultarGeneros(){
    let desplegar2 = document.getElementById('submenu-nav2');
    desplegar2.addEventListener('click',fetchGenres);
}*/


document.addEventListener('DOMContentLoaded', fetchGenres);

