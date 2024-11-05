const $submit = document.getElementById("submit"),
      $password = document.getElementById("password"),
      $username = document.getElementById("username"),
      $apellido = document.getElementById("Apellido"),
      $correo = document.getElementById("Correo electronico"),
      $visible = document.getElementById("visible");

document.addEventListener("change", (e)=>{
    if (e.target === $visible){
        if($visible.checked === false) $password.type = "password";
        else $password.type = "text";

    }
});

document.addEventListener("click", (e) => {
    if (e.target === $submit) {
        e.preventDefault(); // Evitar el envío del formulario

        if ($password.value !== "" && $username.value !== "" && $correo.value !== "") {
            
            localStorage.setItem("username", $username.value);
            localStorage.setItem("apellido", $apellido.value);
            localStorage.setItem("correo", $correo.value);
            localStorage.setItem("password", $password.value);

            window.location.href = "login.html";
        }
    }
});





