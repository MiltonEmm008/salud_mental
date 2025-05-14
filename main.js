document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll(".nav-link");
  const sections = document.querySelectorAll(".section");

  // Función para cambiar sección
  const switchSection = (targetSection) => {
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

  // Manejo de navegación
  links.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const targetSection = link.getAttribute("data-section");
      switchSection(targetSection);
    });
  });

  // Mostrar sección home al cargar
  switchSection("home");
});

const listItem = document.querySelectorAll("#landing-header li");
const menuBackDrop = document.querySelector("#menu-backdrop");

listItem.forEach((item) => {
  item.addEventListener("mouseenter", () => {
    const { left, top, width, height } = item.getBoundingClientRect();

    menuBackDrop.style.setProperty("--left", `${left}px`);
    menuBackDrop.style.setProperty("--top", `${top}px`);
    menuBackDrop.style.setProperty("--width", `${width}px`);
    menuBackDrop.style.setProperty("--height", `${height}px`);
    menuBackDrop.style.opacity = "1";
    menuBackDrop.style.visibility = "visible";
    menuBackDrop.classList.add("bg-blue-300");
  });

  item.addEventListener("mouseleave", () => {
    menuBackDrop.style.opacity = "0";
    menuBackDrop.style.visibility = "hidden";
    menuBackDrop.classList.remove("bg-blue-300");
  });
});
