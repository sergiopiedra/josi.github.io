function openModal(id) {
  document.getElementById("modal" + id).style.display = "flex";
}

function closeModal(id) {
  document.getElementById("modal" + id).style.display = "none";
}

// Cierra el modal si se hace clic fuera de él
window.onclick = function (event) {
  if (event.target.classList.contains("modal")) {
    event.target.style.display = "none";
  }
};
