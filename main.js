// ESPERAR A QUE EL DOM ESTE CARGADO

document.addEventListener("DOMContentLoaded", () => {
  // SELECCIONAR TODOS LOS ENLACES DE NAVEGACION Y SECCIONES
  const links = document.querySelectorAll(".nav-link");
  const sections = document.querySelectorAll(".section");

  // FUNCION PARA CAMBIAR ENTRE SECCIONES
  const cambiarSeccion = (targetSection) => {
    sections.forEach((section) => {
      if (section.id === targetSection) {
        section.classList.add("active");
        section.classList.remove("hidden");
      } else {
        section.classList.add("hidden");
        section.classList.remove("active");
      }
    });

    links.forEach((link) => {
      if (link.getAttribute("data-section") === targetSection) {
        link.classList.add("text-white");
      } else {
        link.classList.remove("text-white");
      }
    });
  };

  // AGREGAR EVENTOS DE CLICK A LOS ENLACES DE NAVEGACION
  links.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const targetSection = link.getAttribute("data-section");
      cambiarSeccion(targetSection);
    });
  });

  // MOSTRAR LA SECCION HOME AL CARGAR LA PAGINA
  cambiarSeccion("inicio");
});

// SELECCIONAR TODOS LOS ELEMENTOS DE LISTA EN EL ENCABEZADO Y EL BACKDROP DEL MENU
const listItem = document.querySelectorAll("#landing-header li");
const menuBackDrop = document.querySelector("#menu-backdrop");

// AGREGAR EVENTOS PARA MOSTRAR EL BACKDROP AL PASAR EL MOUSE SOBRE LOS ELEMENTOS
listItem.forEach((item) => {
  item.addEventListener("mouseenter", () => {
    const { left, top, width, height } = item.getBoundingClientRect();

    // ACTUALIZAR LAS PROPIEDADES CSS DEL BACKDROP
    menuBackDrop.style.setProperty("--left", `${left}px`);
    menuBackDrop.style.setProperty("--top", `${top}px`);
    menuBackDrop.style.setProperty("--width", `${width}px`);
    menuBackDrop.style.setProperty("--height", `${height}px`);
    menuBackDrop.style.opacity = "1";
    //menuBackDrop.style.visibility = "visible";
    menuBackDrop.classList.add("bg-blue-300");
  });

  // OCULTAR EL BACKDROP AL SALIR DEL ELEMENTO
  item.addEventListener("mouseleave", () => {
    menuBackDrop.style.opacity = "0";
    //menuBackDrop.style.visibility = "hidden";
    menuBackDrop.classList.remove("bg-blue-300");
  });
});

const articulosVideo = document.querySelectorAll("article.convideo");

let contadorHover;

articulosVideo.forEach((articulo) => {
  const videoDentro = articulo.querySelector("[data-video]");

  articulo.addEventListener("mouseenter", () => {
    contadorHover = setTimeout(() => {
      videoDentro.classList.remove(
        "max-h-0",
        "opacity-0",
        "pointer-events-none"
      );
      videoDentro.classList.add(
        "max-h-[300px]",
        "opacity-100",
        "pointer-events-auto"
      );
    }, 750);
  });

  articulo.addEventListener("mouseleave", () => {
    clearTimeout(contadorHover);
    videoDentro.classList.remove(
      "max-h-[300px]",
      "opacity-100",
      "pointer-events-auto"
    );
    videoDentro.classList.add("max-h-0", "opacity-0", "pointer-events-none");
  });
});
