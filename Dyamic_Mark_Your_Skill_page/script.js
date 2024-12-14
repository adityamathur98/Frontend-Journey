let skillList = [
  {
    skillName: "HTML",
    uniqueNo: 1,
  },
  {
    skillName: "CSS",
    uniqueNo: 2,
  },
  {
    skillName: "JavaScript",
    uniqueNo: 3,
  },
];

function changeColor(labelId) {
  let labelEl = document.getElementById(labelId);
  labelEl.classList.toggle("changeToGreen");
}

let skillListEl = document.getElementById("skillList");

function createAndAppendSkill(skillObj) {
  let skill = skillObj.skillName;
  let checkboxId = "checkbox" + skillObj.uniqueNo;
  let labelId = "label" + skillObj.uniqueNo;

  let itemEl = document.createElement("li");
  itemEl.classList.add("d-flex", "m-3");
  skillListEl.appendChild(itemEl);

  let inputEl = document.createElement("input");
  inputEl.type = "checkbox";
  inputEl.id = checkboxId;
  inputEl.onclick = function () {
    changeColor(labelId);
  };
  itemEl.appendChild(inputEl);

  let labelEl = document.createElement("label");
  labelEl.setAttribute("for", checkboxId);
  labelEl.id = labelId;
  labelEl.classList.add("ms-2");
  labelEl.textContent = skill;
  itemEl.appendChild(labelEl);
}

for (let skill of skillList) {
  createAndAppendSkill(skill);
}
