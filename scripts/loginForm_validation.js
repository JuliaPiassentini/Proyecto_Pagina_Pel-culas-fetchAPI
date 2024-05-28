/*========VALIDANDO DATOS DEL FORMULARIO DE INICIO SESION=== */

//Datos harcodeados para poder ingresar sesión
var miUsuario = "Cinefil@2024";
var contrasenaHarcodeada = "LaReinaBatata!2024";



document.getElementById("formulario").addEventListener("submit", (event) => {
    event.preventDefault();
  
    let nameIngresado = document.getElementById("username");
    let error_name = document.getElementById("nameError");
  
    if (nameIngresado.value.trim() === "") {
      //trim quita espacios laterales del input
      error_name.textContent = "Por favor, ingresa tu nombre de usuario";
      error_name.classList.add("error-message");
    } else if(nameIngresado.value != miUsuario  ){
      error_name.textContent = "Nombre de usuario inexistente";
      error_name.classList.add("error-message");
    }else{
      error_name.textContent = "";
      error_name.classList.remove("error-message");
    }
  
      
    
    let contrasenaEnter = document.getElementById("password");
    let contrasenaError = document.getElementById("passwordError");
    let contrasenaPatron =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&#.$($)$-$_])[A-Za-z\d$@$!%*?&#.$($)$-$_]{8,100}$/;
  
    if (contrasenaEnter.value == ""){
      contrasenaError.textContent =
        "Debes completar con tu contraseña para poder ingresar";
      contrasenaError.classList.add("error-message");
    }else if (contrasenaEnter.value != contrasenaHarcodeada) {
      contrasenaError.textContent =
        "Contraseña incorrecta";
      contrasenaError.classList.add("error-message");} 
      else{
      contrasenaError.textContent = "";
      contrasenaError.classList.remove("error-message");
    }
  
    if (
      !error_name.textContent &&
      !contrasenaError.textContent
    ) {
      alert(`BIENVENIDO ${miUsuario} A NUESTRA COMUNIDAD DE EDITORES!!`);
      window.location.href = '../pages/admin.html'//Esta línea de código indica a JavaScript que redirija el navegador a lapágina deadministrador
      document.getElementById("formulario").reset(); //Para que se limpien los campos una vez enviado
    }
  });