// Abrir imagen ampliada
function abrirImagen(img) {
  const modal = document.getElementById("imagenModal");
  const imagenAmpliada = document.getElementById("imagenAmpliada");
  imagenAmpliada.src = img.src;
  modal.style.display = "flex";
}

// Cerrar modal
function cerrarImagen() {
  document.getElementById("imagenModal").style.display = "none";
}

// Cerrar con click fuera de la imagen
window.onclick = function(event) {
  const modal = document.getElementById("imagenModal");
  if (event.target === modal) modal.style.display = "none";
}
