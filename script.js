document.addEventListener("DOMContentLoaded", () => {
    const botones = document.querySelectorAll(".btn-whatsapp");

    botones.forEach(boton => {
        boton.addEventListener("click", (e) => {
            e.preventDefault();

            const producto = boton.getAttribute("data-producto");
            const mensaje = `Hola, estoy interesado en: ${producto}`;
            const telefono = "50256244041";

            const url = `https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`;
            window.open(url, "_blank");
        });
    });
});
