// Reemplaza 'TU_CLAVE_API' con tu clave API de TMDB
const apiKey = 'f1805f491aa4514e0e303209f10d218f';
const genresApiUrl = `https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}&language=es-ES`;

async function fetchGenres() {
    try {
        const response = await fetch(genresApiUrl);
        const data = await response.json();
        console.log(data.genres); // Array de objetos, cada objeto es un género con propiedades id y name
        return data.genres; // Retorna la lista de géneros necesitamos se retornen los géneros correctamente para que puedan ser utilizados en la función loadAndRenderGenres.
    } catch (error) {
        console.error('Error al obtener los géneros:', error);
        return [];
    }
}

function displayGenres(genres, menuId) {
    const genresList = document.getElementById(menuId);
    if (!genresList) {
        console.error(`Elemento con id ${menuId} no encontrado.`);
        return;
    }
    genres.forEach(genre => {
        const listItem = document.createElement('li');
        listItem.textContent = genre.name;
        // Añadir evento de clic que guarda el ID del género en localStorage y redirige a una nueva página
        listItem.addEventListener('click', () => {
            localStorage.setItem('selectedGenreId', genre.id); // Guardamos id en almacenamiento local
            localStorage.setItem('nombreGeneroSelet', genre.name); // Guardo Nombre del género seleccionado
            window.open('./pages/generos.html', '_blank');//Abre una nueva pagina que muestra los resultados de peliculas del genero seleccionado por id que se guardó en ellocal storage
        });
        genresList.appendChild(listItem);
    });
}

async function loadAndRenderGenres(menuIds) {
    const genres = await fetchGenres();
    menuIds.forEach(menuId => {
        displayGenres(genres, menuId);
    });
}

// Llama a la función cuando el DOM esté cargado
document.addEventListener('DOMContentLoaded', () => {
    const menuIds = ['toggle-submenu2', 'toggle-submenu3']; // Lista de IDs de los menús donde quieres mostrar los géneros
    loadAndRenderGenres(menuIds);
});
