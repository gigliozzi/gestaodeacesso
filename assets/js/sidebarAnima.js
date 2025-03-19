// Menu hamburger animation
// Author: William Gigliozzi
const toggleButton = document.getElementById("toggleSidebar");
const sidebar = document.getElementById("sidebar");
const content = document.getElementById("content");

toggleButton.addEventListener("click", function () {
  sidebar.classList.toggle("collapsed");
  content.classList.toggle("collapsed");
});

// @@@@@ Controla o agrupamento dos links da sibebar @@@@@

document.addEventListener("DOMContentLoaded", function () {
  const dropdownButtons = document.querySelectorAll(".dropdown-btn");

  dropdownButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const submenu = this.nextElementSibling;

      // Fecha todos os outros menus antes de abrir um novo
      document.querySelectorAll(".submenu").forEach((menu) => {
        if (menu !== submenu) {
          menu.classList.remove("show");
        }
      });

      // Alterna a visibilidade do submenu clicado
      submenu.classList.toggle("show");
    });
  });
});
