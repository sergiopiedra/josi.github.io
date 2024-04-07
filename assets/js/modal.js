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

// Función para mostrar el modal
function openModalP() {
  var modal = document.getElementById("ModalPoliticas");
  modal.style.display = "block";
  setTimeout(closeModalP, 10000); // Cerrar automáticamente después de 15 segundos
}

// Función para cerrar el modal
function closeModalP() {
  var modal = document.getElementById("ModalPoliticas");
  modal.style.display = "none";
}

// Mostrar el modal al cargar la página
window.onload = openModalP;
