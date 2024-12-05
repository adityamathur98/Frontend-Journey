function display(sectionId) {
  document.getElementById("sectionJagannadh").classList.add("d-none");
  document.getElementById("sectionHome").classList.add("d-none");
  document.getElementById("sectionTedx").classList.add("d-none");
  document.getElementById("sectionSadhguru").classList.add("d-none");
  document.getElementById("sectionPurpose").classList.add("d-none");

  const targetSection = document.getElementById(sectionId);
  if (targetSection) {
    targetSection.classList.remove("d-none");
    targetSection.classList.add("d-block");
  }
}
