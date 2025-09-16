// Hamburger menu toggle
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

// Smooth active link highlight (scroll spy)
const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 100;
    if (scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });
  navItems.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});

// Simulate ESP32 data
function generateData() {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);
  const rgr = (r / (g || 1)).toFixed(2);
  const gbr = (g / (b || 1)).toFixed(2);

  const row = `<tr>
    <td>${new Date().toLocaleTimeString()}</td>
    <td>${r}</td>
    <td>${g}</td>
    <td>${b}</td>
    <td>${rgr}</td>
    <td>${gbr}</td>
  </tr>`;

  document.querySelector("#data-table tbody").insertAdjacentHTML("afterbegin", row);

  // Fake AI prediction
  const prediction = rgr > 1.2 && gbr > 1.1 ? "Genuine" : "Fake";
  document.getElementById("prediction-text").textContent = prediction;
}

// Update every 3s
setInterval(generateData, 3000);
