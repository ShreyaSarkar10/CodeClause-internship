const form = document.getElementById("resume-form");
const generateBtn = document.getElementById("generate-btn");
const resumeOutput = document.getElementById("resume-output");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  generateResume();
});

function generateResume() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  // Retrieve other form inputs and create resume sections
  
  const resumeHTML = `
    <h2>${name}</h2>
    <p>Email: ${email}</p>
    <!-- Add other resume sections here -->
  `;

  resumeOutput.innerHTML = resumeHTML;
  resumeOutput.style.display = "block";
}