// Animación de aparición suave al cargar la página
window.addEventListener('DOMContentLoaded', () => {
  const content = document.querySelector('.hero-content');
  content.style.opacity = '0';
  content.style.transform = 'translateY(20px)';
  
  setTimeout(() => {
    content.style.transition = 'opacity 1.2s ease, transform 1.2s ease';
    content.style.opacity = '1';
    content.style.transform = 'translateY(0)';
  }, 200);
});
