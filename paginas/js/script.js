// Ejemplo de código JavaScript para interactuar con el blog

// Obtener todos los elementos de artículo
const articles = document.querySelectorAll('article');

// Agregar evento clic a cada artículo
articles.forEach(article => {
  article.addEventListener('click', () => {
    // Simplemente cambia el color de fondo del artículo al hacer clic
    article.style.backgroundColor = '#f2f2f2';
  });
});