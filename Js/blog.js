document.querySelectorAll('.read-more').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    alert("Blog details page coming soon!");
  });
});












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












































  const blogPosts = [
  {
    id: 1,
    title: "Top 5 JavaScript Frameworks",
    description: "Explore the best JS frameworks in 2025.",
    images: ["1a.jpg", "1b.jpg", "1c.jpg", "1d.jpg", "1e.jpg"]
  },
  {
    id: 2,
    title: "Mastering React for Beginners",
    description: "Kickstart your frontend dev with React.",
    images: ["2a.jpg", "2b.jpg", "2c.jpg", "2d.jpg", "2e.jpg"]
  },
  {
    id: 3,
    title: "CSS Grid vs Flexbox",
    description: "Learn which layout technique to use.",
    images: ["3a.jpg", "3b.jpg", "3c.jpg", "3d.jpg", "3e.jpg"]
  },
  {
    id: 4,
    title: "AI Tools for Developers",
    description: "Boost productivity with AI tools.",
    images: ["4a.jpg", "4b.jpg", "4c.jpg", "4d.jpg", "4e.jpg"]
  },
  {
    id: 5,
    title: "Building Secure Web Apps",
    description: "Best practices for web app security.",
    images: ["5a.jpg", "5b.jpg", "5c.jpg", "5d.jpg", "5e.jpg"]
  },
  {
    id: 6,
    title: "Deploying with Netlify",
    description: "Step-by-step deployment guide.",
    images: ["6a.jpg", "6b.jpg", "6c.jpg", "6d.jpg", "6e.jpg"]
  },
  {
    id: 7,
    title: "Version Control with Git",
    description: "Master Git and GitHub workflows.",
    images: ["7a.jpg", "7b.jpg", "7c.jpg", "7d.jpg", "7e.jpg"]
  },
  {
    id: 8,
    title: "Understanding TypeScript",
    description: "A practical guide to TypeScript.",
    images: ["8a.jpg", "8b.jpg", "8c.jpg", "8d.jpg", "8e.jpg"]
  },
  {
    id: 9,
    title: "Next.js Crash Course",
    description: "Learn server-side rendering fast.",
    images: ["9a.jpg", "9b.jpg", "9c.jpg", "9d.jpg", "9e.jpg"]
  },
  {
    id: 10,
    title: "Building APIs with Node.js",
    description: "Create REST APIs using Express.",
    images: ["10a.jpg", "10b.jpg", "10c.jpg", "10d.jpg", "10e.jpg"]
  },
  {
    id: 11,
    title: "Web Performance Optimization",
    description: "Speed up your websites easily.",
    images: ["11a.jpg", "11b.jpg", "11c.jpg", "11d.jpg", "11e.jpg"]
  },
  {
    id: 12,
    title: "UI Design Principles",
    description: "Design clean, accessible UIs.",
    images: ["12a.jpg", "12b.jpg", "12c.jpg", "12d.jpg", "12e.jpg"]
  }
];

const blogCardsContainer = document.getElementById("blogCards");

blogPosts.forEach(post => {
  const card = document.createElement("div");
  card.className = "blog-card";
  card.innerHTML = `
    <div class="image-slider">
      ${post.images.map(img => `<img src="assets/blog/${img}" alt="${post.title}">`).join("")}
    </div>
    <h3>${post.title}</h3>
    <p>${post.description}</p>
    <a class="btn" href="blog-details.html?id=${post.id}">View Details</a>
  `;
  blogCardsContainer.appendChild(card);
});










