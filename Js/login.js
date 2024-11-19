const usuarios = [
    { correo: "nic@gmail.com", contrasena: "123", nombre: "Nicole", apellido: "Castellanos" },

];

document.getElementById("formLogin").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const correo = document.getElementById("correoLogin").value;
    const contrasena = document.getElementById("contrasenaLogin").value;

    console.log("Correo ingresado:", correo);
    console.log("Contrasena ingresada:", contrasena);

    const usuarioRegistrado = JSON.parse(localStorage.getItem("UsuarioRegistrado"));

    if (usuarioRegistrado && usuarioRegistrado.correo === correo && usuarioRegistrado.contrasena === contrasena) {
        
        
        localStorage.setItem("username", usuarioRegistrado.nombre);
        localStorage.setItem("apellido", usuarioRegistrado.apellido);
        window.location.href = "index.html";
    } else {
        window.location.href = "signup.html";
    }
});