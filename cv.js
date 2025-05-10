const savedData = localStorage.getItem("cvData");
const cvInfo = savedData ? JSON.parse(savedData) : {
  name: "NURAY BEYDULLAYEVA",
  position: "STUDENT",
  profileDescription: "SKSFRC NJF NBUIFREDQ CJDSDIEWNGVJNSL, SSMJROGVNSHJDR DJFNREJ3QWB DUOWCF EWBNREUFGNFDCB HDSBF HJDFHI4UEWDXN SDJTFRE UDHFNIU3RWFNCSJDNCF EKWJNFHDIUHNCJSR ERUDSFJOEWIJSNX CSDGI3U4WEJDS JHFRTR43UEWJSAKHFUITE5R EIDFJ8REWFNDWIUEH BIUREWJSDFND.",
  phone: "+123-456-7890",
  email: "nuray070722@gmail.com",
  workExperience: [
    { company: "BARCELLO STUDIO", position: "MARKETING MANAGER", description: "Develop and execute comprehensive marketing strategies and campaigns that align with the company's goals and objectives." },
    { company: "FAUGET STUDIO", position: "MARKETING MANAGER", description: "Create and manage the marketing budget, ensuring efficient allocation of resources and optimizing ROI." }
  ],
  education: [
    { year: "2029-2030", school: "WARDIERE UNIVERSITY", degree: "Master Business Management" },
    { year: "2025-2029", school: "WARDIERE UNIVERSITY", degree: "Bachelor of Business, GPA 3.8/4.0" }
  ],
  skills: [
    "Project Management", "Teamwork", "Public Relations", "Time Management", "Leadership", "Effective Communication", "Critical Thinking"
  ]
};

document.getElementById("cv-name").textContent = cvInfo.name;
document.getElementById("cv-position").textContent = cvInfo.position;
document.getElementById("profile-description").textContent = cvInfo.profileDescription;
document.getElementById("phone").textContent = cvInfo.phone;
document.getElementById("email").textContent = cvInfo.email;

function displayWorkExperience() {
  const container = document.getElementById("work-experience");
  container.innerHTML = "";
  cvInfo.workExperience.forEach((work, index) => {
    const newItem = document.createElement("div");
    newItem.innerHTML = `<h4>${work.company}</h4><h6>${work.position}</h6><p>${work.description}</p>
                         <button onclick="editExperience(${index})">Edit</button> <button onclick="removeExperience(${index})">Remove</button>`;
    container.appendChild(newItem);
  });
}

function displayEducation() {
  const container = document.getElementById("education");
  container.innerHTML = "";
  cvInfo.education.forEach((edu, index) => {
    const newItem = document.createElement("div");
    newItem.innerHTML = `<h5><div>${edu.year}</div><div>${edu.school}</div><ul><li>${edu.degree}</li></ul>
                         <button onclick="editEducation(${index})">Edit</button> <button onclick="removeEducation(${index})">Remove</button></h5>`;
    container.appendChild(newItem);
  });
}

function displaySkills() {
  const list = document.getElementById("skills");
  list.innerHTML = "";
  cvInfo.skills.forEach((skill, index) => {
    const newItem = document.createElement("li");
    newItem.innerHTML = `${skill} <button onclick="editSkill(${index})">Edit</button> <button onclick="removeSkill(${index})">Remove</button>`;
    list.appendChild(newItem);
  });
}

function addExperience() {
  const company = prompt("Enter company name:");
  const position = prompt("Enter position:");
  const description = prompt("Enter a short description:");
  if (!company?.trim() || !position?.trim() || !description?.trim()) return alert("All fields are required.");
  if (description.length > 300) return alert("Description too long (max 300 characters).");
  cvInfo.workExperience.push({ company, position, description });
  displayWorkExperience();
}

function addEducation() {
  const year = prompt("Enter year (e.g., 2025-2029):");
  const school = prompt("Enter university name:");
  const degree = prompt("Enter degree or field:");
  if (!year?.trim() || !school?.trim() || !degree?.trim()) return alert("All fields are required.");
  cvInfo.education.push({ year, school, degree });
  displayEducation();
}

function addSkill() {
  const skill = prompt("Enter new skill:");
  if (!skill?.trim()) return alert("Skill cannot be empty.");
  cvInfo.skills.push(skill);
  displaySkills();
}

function editExperience(index) {
  const company = prompt("Edit company name:", cvInfo.workExperience[index].company);
  const position = prompt("Edit position:", cvInfo.workExperience[index].position);
  const description = prompt("Edit description:", cvInfo.workExperience[index].description);
  if (!company?.trim() || !position?.trim() || !description?.trim()) return alert("All fields are required.");
  cvInfo.workExperience[index] = { company, position, description };
  displayWorkExperience();
}

function removeExperience(index) {
  if (confirm("Are you sure you want to remove this experience?")) {
    cvInfo.workExperience.splice(index, 1);
    displayWorkExperience();
  }
}

function editEducation(index) {
  const year = prompt("Edit year:", cvInfo.education[index].year);
  const school = prompt("Edit university name:", cvInfo.education[index].school);
  const degree = prompt("Edit degree or field:", cvInfo.education[index].degree);
  if (!year?.trim() || !school?.trim() || !degree?.trim()) return alert("All fields are required.");
  cvInfo.education[index] = { year, school, degree };
  displayEducation();
}

function removeEducation(index) {
  if (confirm("Are you sure you want to remove this education?")) {
    cvInfo.education.splice(index, 1);
    displayEducation();
  }
}

function editSkill(index) {
  const skill = prompt("Edit skill:", cvInfo.skills[index]);
  if (!skill?.trim()) return alert("Skill cannot be empty.");
  cvInfo.skills[index] = skill;
  displaySkills();
}

function removeSkill(index) {
  if (confirm("Are you sure you want to remove this skill?")) {
    cvInfo.skills.splice(index, 1);
    displaySkills();
  }
}

function saveToLocalStorage() {
  localStorage.setItem("cvData", JSON.stringify(cvInfo));
  alert("Saved successfully!");
}

function resetData() {
  // LocalStorage-dan məlumatı silirik
  localStorage.removeItem("cvData");

  // Orijinal məlumatları təyin edirik
  const originalData = {
    name: "NURAY BEYDULLAYEVA",
    position: "STUDENT",
    profileDescription: "SKSFRC NJF NBUIFREDQ CJDSDIEWNGVJNSL, SSMJROGVNSHJDR DJFNREJ3QWB DUOWCF EWBNREUFGNFDCB HDSBF HJDFHI4UEWDXN SDJTFRE UDHFNIU3RWFNCSJDNCF EKWJNFHDIUHNCJSR ERUDSFJOEWIJSNX CSDGI3U4WEJDS JHFRTR43UEWJSAKHFUITE5R EIDFJ8REWFNDWIUEH BIUREWJSDFND.",
    phone: "+123-456-7890",
    email: "nuray070722@gmail.com",
    workExperience: [
      { company: "BARCELLO STUDIO", position: "MARKETING MANAGER", description: "Develop and execute comprehensive marketing strategies and campaigns that align with the company's goals and objectives." },
      { company: "FAUGET STUDIO", position: "MARKETING MANAGER", description: "Create and manage the marketing budget, ensuring efficient allocation of resources and optimizing ROI." }
    ],
    education: [
      { year: "2029-2030", school: "WARDIERE UNIVERSITY", degree: "Master Business Management" },
      { year: "2025-2029", school: "WARDIERE UNIVERSITY", degree: "Bachelor of Business, GPA 3.8/4.0" }
    ],
    skills: [
      "Project Management", "Teamwork", "Public Relations", "Time Management", "Leadership", "Effective Communication", "Critical Thinking"
    ]
  };

  // Yenidən UI-ni sıfırlayırıq
  document.getElementById("cv-name").textContent = originalData.name;
  document.getElementById("cv-position").textContent = originalData.position;
  document.getElementById("profile-description").textContent = originalData.profileDescription;
  document.getElementById("phone").textContent = originalData.phone;
  document.getElementById("email").textContent = originalData.email;
  cvInfo.workExperience = originalData.workExperience;
  cvInfo.education = originalData.education;
  cvInfo.skills = originalData.skills;
  displayWorkExperience();
  displayEducation();
  displaySkills();

  alert("All data has been reset.");
}

displayWorkExperience();
displayEducation();
displaySkills();

const saveBtn = document.createElement("button");
saveBtn.textContent = "Save";
saveBtn.style.margin = "20px";
saveBtn.onclick = saveToLocalStorage;
document.body.appendChild(saveBtn);

const resetBtn = document.createElement("button");
resetBtn.textContent = "Reset All";
resetBtn.style.margin = "20px";
resetBtn.onclick = resetData;
document.body.appendChild(resetBtn);
