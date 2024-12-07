function display(sectionId) {
  document.getElementById("sectionHome").classList.add("d-none");
  document.getElementById("sectionMusicDetailPage").classList.add("d-none");

  const targetSection = document.getElementById(sectionId);
  if (targetSection) {
    targetSection.classList.remove("d-none");
    targetSection.classList.remove("d-block");
  }
}
