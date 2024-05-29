
    let pagina = 1;
    const btnAnterior = document.getElementById('btnAnterior');
    const btnSiguiente = document.getElementById('btnSiguiente');
    const contenedorSearch = document.getElementById('contenedor_search');

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

    const imageBaseUrl = 'https://image.tmdb.org/t/p/w500';

    const cargarPeliculas = async() => {
        try {
            const valorDeBusqueda = localStorage.getItem('valorDeBusqueda');
            if (!valorDeBusqueda) return;// comprueba si el valor de búsqueda obtenido del almacenamiento local (localStorage) es null, undefined, una cadena vacía ('') o false.no hay ningún valor de búsqueda almacenado, por lo que no tiene sentido continuar con el proceso de búsqueda. En ese caso, el script sale temprano de la función utilizando return, evitando así que se realice la solicitud a la API y se carguen los resultados de búsqueda en la página.

            const respuesta = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=f1805f491aa4514e0e303209f10d218f&page=${pagina}&query=${encodeURIComponent(valorDeBusqueda)}`);
        
            console.log(respuesta);

            if(respuesta.status === 200){
                const datos = await respuesta.json();
                const arrayPeliculas = datos.results;
                console.log(datos);
                console.log(arrayPeliculas);

                contenedorSearch.innerHTML = '';

                arrayPeliculas.forEach(pelicula => {
                    const card_trend = document.createElement('div');
                    card_trend.classList.add('card-trend');

                    const img_card = document.createElement('img');
                    img_card.src = imageBaseUrl + pelicula.poster_path;
                    img_card.alt = pelicula.title;
                    card_trend.appendChild(img_card);

                    const card_title = document.createElement('h3');
                    card_title.textContent = pelicula.title;
                    card_trend.appendChild(card_title);

                    const fechaLanzamiento = pelicula.release_date;
                    const releaseYear = fechaLanzamiento.split('-')[0];

                    const card_año = document.createElement('p');
                    card_año.textContent = "AÑO:" + releaseYear;
                    card_trend.appendChild(card_año);

                    contenedorSearch.appendChild(card_trend);
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

