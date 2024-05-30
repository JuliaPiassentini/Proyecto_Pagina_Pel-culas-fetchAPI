//En este archivo se maneja la obtención y visualización de las películas basadas en el id del género almacenado en localStorage


const apiKey = 'f1805f491aa4514e0e303209f10d218f';

document.addEventListener('DOMContentLoaded', () => {
    const genreId = localStorage.getItem('selectedGenreId');
    const genreName = localStorage.getItem('nombreGeneroSelet'); // Obtener el nombre del género seleccionado

    if (genreId && genreName) { // Verificar si se proporcionó el ID de género y el nombre del género
        fetchMoviesByGenre(genreId, genreName); // Pasar el nombre del género a la función fetchMoviesByGenre
    } else {
        console.error('No se proporcionó ID de género o nombre de género');
    }
});

async function fetchMoviesByGenre(genreId, genreName) { // Pasar el nombre del género como parámetro
    const moviesApiUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=${genreId}&language=es-ES`;
    try {
        const response = await fetch(moviesApiUrl);
        const data = await response.json();

        // Obtener el elemento del título del género
        const generoTitulo = document.getElementById('genero-titulo');
        generoTitulo.innerText = `Películas del género ${genreName}`; // Establecer el texto del título dinámico

        displayMovies(data.results);
    } catch (error) {
        console.error('Error al obtener las películas:', error);
    }
}

function displayMovies(movies) {
    const moviesContainer = document.getElementById('movies-genero-contenedor');
    moviesContainer.innerHTML = ''; // Limpiar contenedor antes de mostrar nuevas películas
    movies.forEach(movie => {
        const movieElement = document.createElement('div');
        movieElement.className = 'movie';
        
        const titleElement = document.createElement('div');
        titleElement.className = 'movie-title';
        titleElement.textContent = movie.title;

        const imageElement = document.createElement('img');
        imageElement.src = `https://image.tmdb.org/t/p/w500${movie.poster_path}`; // URL de la imagen de la película

        const overviewElement = document.createElement('div');
        overviewElement.textContent = movie.overview;
        overviewElement.className ='movie-overview';

        movieElement.appendChild(titleElement);
        movieElement.appendChild(imageElement); // Agregar imagen al elemento de la película
        movieElement.appendChild(overviewElement);
                
        moviesContainer.appendChild(movieElement);
    });
}
