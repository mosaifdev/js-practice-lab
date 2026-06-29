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
