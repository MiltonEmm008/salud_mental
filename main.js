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
