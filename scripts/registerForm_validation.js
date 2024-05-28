/*========VALIDANDO DATOS DEL FORMULARIO DE REGISTRO=== */

document.getElementById("registroForm").addEventListener("submit", (event) => {
    event.preventDefault();
  
    let nameIngresado = document.getElementById("nombre");
    let error_name = document.getElementById("nameError");
  
    if (nameIngresado.value.trim() === "") {
      //trim quita espacios laterales del input
      error_name.textContent = "Por favor, ingresa tu nombre";
      error_name.classList.add("error-message");
    } else {
      error_name.textContent = "";
      error_name.classList.remove("error-message");
    }
  
    let surnameIngresado = document.getElementById("apellido");
    let error_surname = document.getElementById("surnameError");



    if (surnameIngresado.value.trim() === "") {
      //trim quita espacios laterales del input
      error_surname.textContent = "Por favor, ingresa tu apellido";
      error_surname.classList.add("error-message");
    } else {
      error_surname.textContent = "";
      error_surname.classList.remove("error-message");
    }





    let emailIngresado = document.getElementById("email");
    let emailError = document.getElementById("emailError");
    let formatoEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Expresión regular de un formato de email
  
    if (!formatoEmail.test(emailIngresado.value)) {
      emailError.textContent = "Por favor, ingresá un email válido";
      emailError.classList.add("error-message");
    } else {
      emailError.textContent = "";
      emailError.classList.remove("error-message");
    }
    let contrasenaEnter = document.getElementById("contrasena");
    let contrasenaError = document.getElementById("passwordError");
    let contrasenaPatron =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&#.$($)$-$_])[A-Za-z\d$@$!%*?&#.$($)$-$_]{8,100}$/;//Expresión regular del tipo de contraseña que incluya mayusculas,minusculas,numeros,caracteresespeciales y almenos8 digitos
  
    if (!contrasenaPatron.test(contrasenaEnter.value)) {
      contrasenaError.textContent =
        "La contraseña debe tener al menos 8 caracteres, números, mayúsculas,minúsculas y caracteres especiales";
      contrasenaError.classList.add("error-message");
    } else {
      contrasenaError.textContent = "";
      contrasenaError.classList.remove("error-message");
    }
  
    if (
      !error_name.textContent &&
      !error_surname.textContent &&
      !emailError.textContent &&
      !contrasenaError.textContent
    ) {
      alert("REGISTRO EXITOSO!BIENVENIDO A NUESTRA COMUNIDAD POCHOCLERA!");
      window.location.href = '../pages/admin.html';
      document.getElementById("formulario").reset(); //Para que se limpien los campos una vez enviado
    }
  });