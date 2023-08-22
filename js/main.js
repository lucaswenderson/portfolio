// Ativar link da pagina
const links = document.querySelectorAll("#menu a");
function ativarLink(link) {
  const url = location.href;
  const href = link.href;
  if (url.includes(href)) {
    console.log(link);
    link.classList.add("active");
  }
}
links.forEach(ativarLink);

// Ativar botão menu hamburger
const btnMenu = document.querySelector("#btn-mobile");
function toggleMenu() {
  const nav = document.querySelector("#nav");
  nav.classList.toggle("active");
}
btnMenu.addEventListener("click", toggleMenu);

// Animação
if (window.SimpleAnime) {
  new SimpleAnime();
}

function fixarMenu(){
  let header = document.querySelector('#header')
  header.classList.toggle('fixar', window.scrollY > 0)
}

window.addEventListener('scroll', fixarMenu)

//evitar recarregamento da pagina
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});

//destacar link do menu
window.addEventListener('scroll', function() {
  let navLinks = document.querySelectorAll('nav a');
  let fromTop = window.scrollY;

  navLinks.forEach(link => {
      let section = document.querySelector(link.hash);

      if (
          section.offsetTop <= fromTop &&
          section.offsetTop + section.offsetHeight > fromTop
      ) {
          link.classList.add('active');
      } else {
          link.classList.remove('active');
      }
  });
});

//Menu não transpassa o conteudo
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();

      let target = document.querySelector(this.getAttribute('href'));
      let headerHeight = 80; 
      window.scrollTo({
          top: target.offsetTop - headerHeight,
          behavior: 'smooth'
      });
  });
});

//Ver mais projetos 
document.getElementById('loadMoreBtn').addEventListener('click', function() {
  // Seleciona todos os projetos ocultos
  var hiddenProjects = document.querySelectorAll('.sites.hidden');

  // Define quantos projetos mostrar a cada clique
  var projectsToShow = 1;

  for (var i = 0; i < projectsToShow && i < hiddenProjects.length; i++) {
      hiddenProjects[i].classList.remove('hidden');
      hiddenProjects[i].classList.remove('reveal');
  }

  // Se não houver mais projetos ocultos, oculte o botão "Ver mais"
  if (hiddenProjects.length <= projectsToShow) {
      this.style.display = 'none';
  }
});


