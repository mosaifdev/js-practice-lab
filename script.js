// Day 1 JavaScript Practice Lab

// 1. Variables
const fullName = "Muhammad Saifullah";
const location = "Bangkok, Thailand";
const email = "smsaif404@gmail.com";
const portfolio = "https://mosaifdev.github.io/saifullah-portfolio/";
const isLearningJavaScript = true;

// 2. Array
const skills = [
  "WordPress",
  "Elementor",
  "HTML",
  "CSS",
  "JavaScript Basics",
  "Git",
  "GitHub"
];

// 3. Object
const featuredProject = {
  name: "WordPress Developer Portfolio",
  type: "Frontend / Portfolio",
  tools: ["HTML", "CSS", "JavaScript", "GitHub Pages"],
  liveLink: portfolio
};

// 4. Function
function createProfileText(name, city, contactEmail) {
  return `My name is ${name}. I am based in ${city}. You can contact me at ${contactEmail}.`;
}

// 5. Show output in console
console.log("Full Name:", fullName);
console.log("Location:", location);
console.log("Email:", email);
console.log("Learning JavaScript:", isLearningJavaScript);
console.log("Skills:", skills);
console.log("Featured Project:", featuredProject);

// 6. Show output on page
const profileOutput = document.querySelector("#profileOutput");
const skillsOutput = document.querySelector("#skillsOutput");
const projectOutput = document.querySelector("#projectOutput");

profileOutput.textContent = createProfileText(fullName, location, email);

skills.forEach(function (skill) {
  const li = document.createElement("li");
  li.textContent = skill;
  skillsOutput.appendChild(li);
});

projectOutput.innerHTML = `
  <h3>${featuredProject.name}</h3>
  <p>Type: ${featuredProject.type}</p>
  <p>Tools: ${featuredProject.tools.join(", ")}</p>
  <a href="${featuredProject.liveLink}" target="_blank">View Live Project</a>
`;
const secondProject = {
  name: "EmpowerMeTech",
  type: "WordPress Website",
  tools: ["WordPress", "Elementor", "Content Structure"],
  liveLink: "https://empowermetech.org"
};

console.log("Second Project:", secondProject);
// Day 2 JavaScript Practice: Functions + Conditions

const targetRole = "WordPress Developer";

function hasSkill(skillList, skillName) {
  return skillList.includes(skillName);
}

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

function createEligibilityReport(role, skillList) {
  if (role === "WordPress Developer") {
    return checkWordPressDeveloperEligibility(skillList);
  } else if (role === "Frontend Developer") {
    return checkFrontendDeveloperEligibility(skillList);
  } else {
    return "Role not found. Please choose WordPress Developer or Frontend Developer.";
  }
}

const eligibilityOutput = document.querySelector("#eligibilityOutput");

const wordpressResult = createEligibilityReport("WordPress Developer", skills);
const frontendResult = createEligibilityReport("Frontend Developer", skills);

console.log("WordPress Result:", wordpressResult);
console.log("Frontend Result:", frontendResult);

eligibilityOutput.innerHTML = `
  <h3>Eligibility Results</h3>
  <p><strong>WordPress Developer:</strong> ${wordpressResult}</p>
  <p><strong>Frontend Developer:</strong> ${frontendResult}</p>
`;

const fullname = "Muhammad Saifullah";
const location2 = "Bangkok, Thailand";
const Age = 22;
const learningfrontend = true;

console.log("Full Name:", fullname);
console.log("Location:", location2);
console.log("Age:", Age);
console.log("Learning Frontend Development:", learningfrontend);
const developername = "Muhammad Saifullah";
const developerlocation = "Bangkok, Thailand";
let completedlessons = 1;
let practiceScore = 0;
const isLearningFrontendDevelopment = true;

practiceScore += 10; // Increment practice score by 10 for completing a lesson
practiceScore += 15; // Increment practice score by 5 for completing a practice task
completedlessons += 1; // Increment completed lessons by 1

console.log("Developer Name:", developername);
console.log("Developer Location:", developerlocation);
console.log("Completed Lessons:", completedlessons);
console.log("Practice Score:", practiceScore);
console.log("Learning Frontend Development:", isLearningFrontendDevelopment);
const courseName = "JavaScript Basics";
let lessonNumber = 1;
let  lessonScore = 0;
const studentName = "Muhammad Saifullah";

lessonScore += 10; // Increment lesson score by 10 for completing a lesson
lessonScore += 15; // Increment lesson score by 5 for completing a practice task
lessonNumber += 1; // Increment lesson number by 1

console.log(`${studentName} is studying ${courseName}.`);
console.log(`Current Lesson Number: ${lessonNumber}`);
console.log(`Lesson Score: ${lessonScore}/25`);