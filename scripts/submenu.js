let desplegar = document.getElementById('submenu-nav');


desplegar.addEventListener('mouseover',()=>{
    let submenu = document.getElementById('toggle-submenu');
  
    let submenu_peliculas = document.getElementById('submenu-peliculas');
    if (submenu.style.visibility === "hidden" || submenu.style.visibility === "" ){
        submenu.style.visibility = "visible";
        submenu_peliculas.style.backgroundColor ="#080f28";
        
    }
});


let submenu_peliculas = document.getElementById('submenu-peliculas');
submenu_peliculas.addEventListener('mouseleave',()=>{
    let submenu = document.getElementById('toggle-submenu');
    submenu.style.visibility ="hidden";
    submenu_peliculas.style.backgroundColor ="transparent";
});

//*///// */
let desplegar2 = document.getElementById('submenu-nav2');
desplegar2.addEventListener('mouseover',()=>{
    let submenu2 = document.getElementById('toggle-submenu2');
    let submenu_peliculas2 = document.getElementById('submenu-peliculas2');
    if (submenu2.style.visibility === "hidden" || submenu2.style.visibility === ""){
        submenu2.style.visibility = "visible";
        submenu_peliculas2.style.backgroundColor ="#080f28";
    }
});


let submenu_peliculas2 = document.getElementById('submenu-peliculas2');
submenu_peliculas2.addEventListener('mouseleave',()=>{
    let submenu2 = document.getElementById('toggle-submenu2');
    submenu2.style.visibility ="hidden";
    submenu_peliculas2.style.backgroundColor ="transparent";
});