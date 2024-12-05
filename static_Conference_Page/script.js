function display(sectionId) {
  // Hide the Home Page
  document.getElementById("sectionHomePage").classList.add("d-none");

  // Hide the Conference Section
  document.getElementById("sectionConferencePage").classList.add("d-none");

  const targetSection = document.getElementById(sectionId);
  if (targetSection) {
    targetSection.classList.remove("d-none");
    targetSection.classList.add("d-block");
  }
}
