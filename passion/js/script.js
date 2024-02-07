// Ahout de la class active sur item ouvert
document.addEventListener('DOMContentLoaded', function() {
  var currentPage = window.location.pathname; // Obtient le chemin d'accès de la page actuelle

  var menuItems = document.querySelectorAll('.menu__a'); // Sélectionnez tous les éléments avec la classe 'menu-a'

  menuItems.forEach(function(item) {
      if (item.getAttribute('href') === "#") {
          item.classList.add('active'); // Ajoutez la classe 'active' si l'attribut href correspond à la page actuelle
          item.style.color = "#000000"; // Ajoutez la couleur 
      }
  });
});

// menu burger
var sidenav = document.getElementById("mySidenav");
var openBtn = document.getElementById("openBtn");
var closeBtn = document.getElementById("closeBtn");

openBtn.onclick = openNav;
closeBtn.onclick = closeNav;

function openNav() {
sidenav.classList.add("active");
}

function closeNav() {
sidenav.classList.remove("active");
}


