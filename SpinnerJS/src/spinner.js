document.addEventListener("DOMContentLoaded", () => {
  const spinnerBtn = document.getElementById("spinnerBtn");
  const spinner = document.getElementById("spinner");

  spinnerBtn.addEventListener("click", () => {
    spinner.classList.toggle("hidden");
  });
});
