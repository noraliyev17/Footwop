var modal = document.getElementById("myModal");

let boxes = document.querySelectorAll(".box");

function openModal() {
  modal.style.display = "block";
}

function closeModal() {
  modal.style.display = "none";
}

document.addEventListener("click", function (event) {
  if (event.target == modal) {
    openModal();
  }
});



modal.addEventListener('click', () => {
    innerH
  });