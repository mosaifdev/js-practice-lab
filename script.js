// JavaScript Practice Lab
// Muhammad Saifullah

// ===============================
// 1. Basic Variables
// ===============================

const fullName = "Muhammad Saifullah";
const userLocation = "Bangkok, Thailand";
const email = "smsaif404@gmail.com";
const portfolio = "https://mosaifdev.github.io/saifullah-portfolio/";
const isLearningJavaScript = true;

// ===============================
// 2. Skills Array
// ===============================

const skills = [
  "WordPress",
  "Elementor",
  "HTML",
  "CSS",
  "JavaScript Basics",
  "Git",
  "GitHub"
];

// ===============================
// 3. Project Objects
// ===============================

const featuredProject = {
  name: "WordPress Developer Portfolio",
  type: "Frontend / Portfolio",
  tools: ["HTML", "CSS", "JavaScript", "GitHub Pages"],
  liveLink: portfolio
};

const secondProject = {
  name: "EmpowerMeTech",
  type: "WordPress Website",
  tools: ["WordPress", "Elementor", "Content Structure"],
  liveLink: "https://empowermetech.org"
};

// ===============================
// 4. Function: Create Profile Text
// ===============================

function createProfileText(name, city, contactEmail) {
  return `My name is ${name}. I am based in ${city}. You can contact me at ${contactEmail}.`;
}

// ===============================
// 5. Select HTML Elements
// ===============================

const profileOutput = document.querySelector("#profileOutput");
const skillsOutput = document.querySelector("#skillsOutput");
const projectOutput = document.querySelector("#projectOutput");
const eligibilityOutput = document.querySelector("#eligibilityOutput");

// ===============================
// 6. Show Profile on Page
// ===============================

profileOutput.textContent = createProfileText(fullName, userLocation, email);

// ===============================
// 7. Show Skills on Page
// ===============================

skills.forEach(function (skill) {
  const li = document.createElement("li");
  li.textContent = skill;
  skillsOutput.appendChild(li);
});

// ===============================
// 8. Show Projects on Page
// ===============================

projectOutput.innerHTML = `
  <h3>${featuredProject.name}</h3>
  <p><strong>Type:</strong> ${featuredProject.type}</p>
  <p><strong>Tools:</strong> ${featuredProject.tools.join(", ")}</p>
  <a href="${featuredProject.liveLink}" target="_blank">View Live Project</a>

  <hr>

  <h3>${secondProject.name}</h3>
  <p><strong>Type:</strong> ${secondProject.type}</p>
  <p><strong>Tools:</strong> ${secondProject.tools.join(", ")}</p>
  <a href="${secondProject.liveLink}" target="_blank">View Live Project</a>
`;

// ===============================
// 9. Function: Check Skill
// ===============================

function hasSkill(skillList, skillName) {
  return skillList.includes(skillName);
}

// ===============================
// 10. WordPress Eligibility Function
// ===============================

function checkWordPressDeveloperEligibility(skillList) {
  const hasWordPress = hasSkill(skillList, "WordPress");
  const hasElementor = hasSkill(skillList, "Elementor");
  const hasHTML = hasSkill(skillList, "HTML");
  const hasCSS = hasSkill(skillList, "CSS");

  if (hasWordPress && hasElementor && hasHTML && hasCSS) {
    return "Strong match for WordPress Developer roles.";
  } else if (hasWordPress && hasElementor) {
    return "Good match for WordPress Support or Elementor roles, but improve HTML and CSS.";
  } else if (hasWordPress) {
    return "Basic match. Improve Elementor, HTML, and CSS.";
  } else {
    return "Not ready yet for WordPress Developer roles.";
  }
}

// ===============================
// 11. Frontend Eligibility Function
// ===============================

function checkFrontendDeveloperEligibility(skillList) {
  const hasHTML = hasSkill(skillList, "HTML");
  const hasCSS = hasSkill(skillList, "CSS");
  const hasJavaScript = hasSkill(skillList, "JavaScript Basics");
  const hasGit = hasSkill(skillList, "Git");

  if (hasHTML && hasCSS && hasJavaScript && hasGit) {
    return "Good beginner foundation for Frontend Developer path.";
  } else if (hasHTML && hasCSS) {
    return "You have layout basics, but need stronger JavaScript and Git.";
  } else {
    return "You need to strengthen HTML, CSS, JavaScript, and Git first.";
  }
}

// ===============================
// 12. Role Report Function
// ===============================

function createEligibilityReport(role, skillList) {
  if (role === "WordPress Developer") {
    return checkWordPressDeveloperEligibility(skillList);
  } else if (role === "Frontend Developer") {
    return checkFrontendDeveloperEligibility(skillList);
  } else {
    return "Role not found.";
  }
}

// ===============================
// 13. Show Eligibility on Page
// ===============================

const wordpressResult = createEligibilityReport("WordPress Developer", skills);
const frontendResult = createEligibilityReport("Frontend Developer", skills);

eligibilityOutput.innerHTML = `
  <h3>Eligibility Results</h3>
  <p><strong>WordPress Developer:</strong> ${wordpressResult}</p>
  <p><strong>Frontend Developer:</strong> ${frontendResult}</p>
`;

// ===============================
// 14. Lesson Practice: Variables + Output
// ===============================

const courseName = "JavaScript Basics";
let lessonNumber = 1;
let lessonScore = 0;
const studentName = "Muhammad Saifullah";

lessonScore += 10;
lessonScore += 15;
lessonNumber += 1;

console.log(`${studentName} is studying ${courseName}`);
console.log(`Current lesson: ${lessonNumber}`);
console.log(`Lesson score: ${lessonScore}/25`);

// ===============================
// 15. Console Checks
// ===============================

console.log("Full Name:", fullName);
console.log("Location:", userLocation);
console.log("Email:", email);
console.log("Learning JavaScript:", isLearningJavaScript);
console.log("Skills:", skills);
console.log("Featured Project:", featuredProject);
console.log("Second Project:", secondProject);
console.log("WordPress Result:", wordpressResult);
console.log("Frontend Result:", frontendResult);