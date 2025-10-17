const imagenes = document.querySelectorAll('.producto img');
const modal = document.getElementById('imagenModal');
const imagenAmpliada = document.getElementById('imagenAmpliada');
const cerrar = document.querySelector('.cerrar');

imagenes.forEach(img => {
  img.addEventListener('click', () => {
    modal.style.display = 'flex';
    imagenAmpliada.src = img.src;
  });
});

cerrar.addEventListener('click', () => {
  modal.style.display = 'none';
});

modal.addEventListener('click', (e) => {
  if (e.target === modal) modal.style.display = 'none';
});
