

  function toggleDropdown() {
    const dropdown = document.getElementById("dropdownMenu");
    dropdown.classList.toggle("show-dropdown");
  }

  // Optional: Close dropdown if clicked outside
  document.addEventListener("click", function (event) {
    const menu = document.getElementById("dropdownMenu");
    const icon = document.querySelector(".hamburger-icon");

    if (!icon.contains(event.target) && !menu.contains(event.target)) {
      menu.classList.remove("show-dropdown");
    }
  });












  


  // Sample data for all your projects
const projects = [
  {
    id: "1",
    title: "Crypto Exchange Web App",
    img: "../assets/cryptoexchange1uuuu.jpg.jpg.jpg.jpg.jpg",
    description:
      "Built a responsive cryptocurrency trading platform with real-time updates, authentication, and wallet integration.",
  },
  {
    id: "2",
    title: "Gift Card Trading Platform",
    img: "../assets/giftcardstraning2.jpg.jpg.jpg.jpg.jpg",
    description:
      "Developed a platform to securely buy and sell gift cards with user profiles, messaging, and reviews.",
  },
  {
    id: "3",
    title: "Tech Blog CMS",
    img: "../assets/cmstechblog3.jpg.jpg.jpg",
    description:
      "Created a content management system where users can post, edit, and comment on tech articles.",
  },
  {
    id: "4",
    title: "E-commerce Website",
    img: "../assets/e-commerce1111.jpg.jpg.jpg",
    description:
      "Online store built with React, Node.js, and Stripe payment integration.",
  },
  {
    id: "5",
    title: "Real Estate Platform",
    img: "../assets/realestate222222.jpg.jpg.jpg",
    description:
      "Property listing platform with map integration and user dashboards.",
  },
  {
    id: "6",
    title: "Crypto Trading App",
    img: "../assets/cryptotraningapp6.jpg.jpg",
    description:
      "Full-stack crypto trading platform with live market prices and wallet system.",
  },
];

// Get project ID from URL
const urlParams = new URLSearchParams(window.location.search);
const projectId = urlParams.get("id");

// Find the project
const project = projects.find((p) => p.id === projectId);

// Render to page
if (project) {
  document.getElementById("project-details").innerHTML = `
    <h2>${project.title}</h2>
    <img src="${project.img}" alt="${project.title}">
    <p>${project.description}</p>
    <a class="back-link" href="projects.html">&larr; Back to Projects</a>
  `;
} else {
  document.getElementById("project-details").innerHTML = `
    <p>Project not found.</p>
    <a class="back-link" href="projects.html">&larr; Back to Projects</a>
  `;
}
