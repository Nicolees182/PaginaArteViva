<script>
    document.addEventListener("DOMContentLoaded", () =&gt; {
        const username = localStorage.getItem("username");
        const apellido = localStorage.getItem("apellido");
        const userMenu = document.getElementById("user-menu");

        if (username) {
            // Mostrar el nombre del usuario y el enlace para cerrar sesión
            userMenu.innerHTML = `
                <span class="nav__links">Hola, ${username} ${apellido}</span>
                <a href="#" id="logout" class="nav__links">Cerrar sesión</a>
            `;

            // Manejar el evento de clic en el enlace de cerrar sesión
            document.getElementById("logout").addEventListener("click", (e) => {
                e.preventDefault(); // Evitar el comportamiento por defecto del enlace
                localStorage.removeItem("username");
                localStorage.removeItem("apellido");
                window.location.reload(); // Recargar la página para actualizar el menú
            });
        }
    });
</script>