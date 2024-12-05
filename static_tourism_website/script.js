function display(sectionId) {
  document.getElementById("sectionHome").classList.add("d-none");
  document.getElementById("sectionFavouritePlaces").classList.add("d-none");
  document.getElementById("sectionDetailedViewTaj").classList.add("d-none");
  document.getElementById("sectionDetailedViewGolden").classList.add("d-none");
  document.getElementById("sectionDetailedViewMysore").classList.add("d-none");
  document
    .getElementById("sectionDetailedViewVaranasi")
    .classList.add("d-none");

  const targetSection = document.getElementById(sectionId);
  if (targetSection) {
    targetSection.classList.remove("d-none");
    targetSection.classList.add("d-block");
  }
}
