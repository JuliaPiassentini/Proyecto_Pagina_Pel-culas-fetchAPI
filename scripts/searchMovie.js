document.addEventListener('DOMContentLoaded', function() {
    let peliBuscada = document.getElementById('searchInput');

    peliBuscada.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            let valorDeBusqueda = peliBuscada.value.trim();
            console.log('Se buscó:', valorDeBusqueda);
            event.preventDefault();
            localStorage.setItem('valorDeBusqueda', valorDeBusqueda);//se utiliza localStorage.setItem('valorDeBusqueda', valorDeBusqueda); para almacenar el valor de búsqueda en el almacenamiento local del navegador. Esto es útil para pasar este valor a otra página web, como se hace luego con window.location.href = './pages/results.html';, que redirige al usuario a la página de resultados donde se cargará el contenido basado en la búsqueda realizada.
            window.location.href = './pages/results.html';
        }
    });
});
