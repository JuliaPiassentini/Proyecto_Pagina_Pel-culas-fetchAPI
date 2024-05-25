

/*======Menú Hamburguesa-Nav bar=====*/
const buttom = document.querySelector('.icon-menu')
const menuItems = document.querySelector('.responsive-menu')
const buttomX=document.querySelector('.icon-menu-x')

buttom.addEventListener('click',(event)=>{
    event.preventDefault();//se recargaba el navegador visualizando el menu muy poco tiempo,desaparecía,esto lo evita
    menuItems.classList.add('active');//No utilizo .toggle porque me recarga el navegador tras cada cambio de icono menu
    buttomX.classList.add('animadoX');
    buttom.classList.add('animado')})



 buttomX.addEventListener('click',(event)=>{
    event.preventDefault();
    menuItems.classList.remove('active');
    buttomX.classList.remove('animadoX');
    buttom.classList.remove('animado')})


    /* ======EFECTO MÁQUINA DE ESCRIBIR en index.html  sección class="portadas-estrenos"====*/ 
const titleEffect = document.getElementById('typewriter');

const typeWriter = new Typewriter (titleEffect, {
   loop: true,
   delay: 80
});
/*Métodos que se pueden aplicar a la instancia de objeto anteriormente creada*/
typeWriter
.typeString('Próximos estrenos')
 .pauseFor(600)
 .start();