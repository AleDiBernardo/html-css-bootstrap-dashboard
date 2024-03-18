document.querySelector(".shadow__btn").addEventListener("click", function () {
  document.querySelector("h1").classList.remove("d-none");
  document.querySelector("body").classList.add("bg-danger");

});

function ruotaElementoInfinitamente() {
  const elementoDaRuotare = document.querySelector("body");
  let angoloDiRotazione = 0;
  const incrementoRotazione = 2;

  function ruota() {
    angoloDiRotazione += incrementoRotazione;
    elementoDaRuotare.style.transform = `rotate(${angoloDiRotazione}deg)`;
    requestAnimationFrame(ruota);
  }

  ruota();
}

document
  .querySelector(".shadow__btn")
  .addEventListener("click", ruotaElementoInfinitamente);
