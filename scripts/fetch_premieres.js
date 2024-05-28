let pagina = 1;
const btnAnterior = document.getElementById('btnAnterior');
const btnSiguiente = document.getElementById('btnSiguiente');

btnSiguiente.addEventListener('click', () => {
	if(pagina < 1000){
		pagina += 1;
		cargarPeliculas();
	}
});

btnAnterior.addEventListener('click', () => {
	if(pagina > 1){
		pagina -= 1;
		cargarPeliculas();
	}
});

//URL base para las imágenes de TMDb Define la URL base para las imágenes con el tamaño w500.Se cambiar el tamaño según tus necesidades (por ejemplo, w200, w300, etc.).
const imageBaseUrl = 'https://image.tmdb.org/t/p/w500';
 

const cargarPeliculas = async() => {
	try {
		const respuesta = await fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=f1805f491aa4514e0e303209f10d218f&page=${pagina}`);
	
		console.log(respuesta);

		// Si la respuesta es correcta
		if(respuesta.status === 200){
			const datos = await respuesta.json();
			const arrayPeliculas = datos.results;
			console.log(datos);
            console.log(arrayPeliculas);

            const contenedorPremiere = document.getElementById('contenedor_premiere');
			contenedorPremiere.innerHTML = '';//Limpiar el contenedor antes de agregar nuevas películas para que no se acumulen en la paginación

			arrayPeliculas.forEach(pelicula => {

                const card_trend = document.createElement('div');
                card_trend.classList.add('card-trend');

               // Crear y añadir la imagen
                

                const img_card = document.createElement('img');
                img_card.src = imageBaseUrl + pelicula.poster_path;
                img_card.alt = pelicula.title;
                card_trend.appendChild(img_card);

				// Crear y añadir el título usando <h3>
                const card_title = document.createElement('h3');
                card_title.textContent = pelicula.title;
                card_trend.appendChild(card_title);


                //Crear y añadir el año utilizando <p>
                const fechaLanzamiento = pelicula.release_date;//La api me da la fecha lanzamiento en formato YYYY-MM-DD
                const releaseYear = fechaLanzamiento.split('-')[0];//split('-'): Este método divide la cadena fecha en partes basadas en el delimitador -, creando un array con las partes resultantes. En este caso, el array resultante contendrá tres elementos: '2024', '03' y '22'    [0]: Selecciona el primer elemento del array resultante, que es el año '2024'


                const card_año = document.createElement('p');
                card_año.textContent = "AÑO:" + releaseYear;
                card_trend.appendChild(card_año);



                // Añadir la tarjeta completa al contenedor de tarjetas
                contenedorPremiere.appendChild(card_trend);
			});

			

		} else if(respuesta.status === 401){
			console.log('La request no ha sido ejecutada porque carece de credenciales válidas de autenticación para el recurso solicitado');
		} else if(respuesta.status === 404){
			console.log('La película que buscas no existe');
		} else {
			console.log('Lo sentimos hubo un error en el servidor');
		}

	} catch(error){
		console.log(error);
	}

}

cargarPeliculas();