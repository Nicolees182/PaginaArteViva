document.getElementById("formRegistro").addEventListener("submit", function (event) {
    event.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const apellido = document.getElementById("apellido").value;
    const correo = document.getElementById("correo").value;
    const contrasena = document.getElementById("contrasena").value;
    const genero = document.getElementById("genero").value;

    const usuario ={
        nombre: nombre,
        apellido: apellido,
        correo: correo,
        contrasena: contrasena,
        genero: genero,
    };

    localStorage.setItem("UsuarioRegistrado", JSON.stringify(usuario))
    window.location.href = "login.html"; 
});




