// nanvbar dropdown
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
















// const postId = new URLSearchParams(window.location.search).get("id");

// const post = blogPosts.find(item => item.id == postId);

// if (post) {
//   const details = document.getElementById("project-details");
//   details.innerHTML = `
//     <h2>${post.title}</h2>
//     <div class="image-slider">
//       ${post.images.map(img => `<img src="assets/blog/${img}" alt="${post.title}">`).join("")}
//     </div>
//     <p>${post.description}</p>
//   `;
// } else {
//   document.getElementById("project-details").innerHTML = `<p>Post not found.</p>`;
// }





















document.addEventListener("DOMContentLoaded", function () {
  const blogContainer = document.getElementById("blog-details");

  // Helper to get query parameter
  function getBlogIdFromURL() {
    const params = new URLSearchParams(window.location.search);
    return parseInt(params.get("id"));
  }

  // Blog data (match blog.html layout)
  const blogs = [
    {
      title: "Introduction to Crypto Trading",
      description: "Get started with crypto trading and understand the basics of blockchain, wallets, and exchanges.",
      images: [
        "./assets/blog1-1.jpg.jpg",
        "./assets/blog2-2.jpg.jpg",
        "./assets/blog3-3.jpg.jpg",
        "./assets/blog4-4.jpg.jpg",
        "./assets/blog5-5.jpg.jpg"
      ]
    },
    {
      title: "Gift Card Trading Tips",
      description: "Discover smart strategies for safely trading gift cards and getting the best rates online.",
      images: [
        "./assets/card-blog1.jpg.jpg",
        "./assets/card-blog2.jpg.jpg",
        "./assets/card-blog3.jpg.jpg",
        "./assets/card-blog4.jpg.jpg",
        "./assets/card-blog5.jpg.jpg"
      ]
    },
    {
      title: "Top 5 Crypto Wallets",
      description: "We reviewed the top 5 crypto wallets in 2025. See which is best for your needs and why.",
      images: [
        "./assets/wallet1.jpg.jpg",
        "./assets/wallet2.jpg.jpg",
        "./assets/wallet3.jpg.jpg",
        "./assets/wallet4.jpg.jpg",
        "./assets/wallet5.jpg.jpg"
      ]
    },
    {
      title: "How to Avoid Crypto Scams",
      description: "Learn the most common crypto scams and how to protect yourself from fraud and fake platforms.",
      images: [
        "./assets/samm1.jpg.jpg",
        "./assets/samm2.jpg.jpg",
        "./assets/samm3.jpg.jpg",
        "./assets/samm4.jpg.jpg",
        "./assets/samm5.jpg.jpg"
      ]
    },
    {
      title: "Best Crypto Trading Apps",
      description: "Explore the best apps for mobile crypto trading in 2025, including fees and security features.",
      images: [
        "./assets/bet1.jpg.jpg",
        "./assets/bet2.jpg.jpg",
        "./assets/bet3.jpg.jpg",
        "./assets/bet4.jpg.jpg",
        "./assets/bet5.jpg.jpg"
      ]
    },
    {
      title: "How Blockchain Works",
      description: "An easy-to-understand explanation of how blockchain technology powers cryptocurrencies today.",
      images: [
        "./assets/chine1.jpg.jpg",
        "./assets/chine2.jpg.jpg",
        "./assets/chine3.jpg.jpg",
        "./assets/chine4.jpg.jpg",
        "./assets/chine5.jpg.jpg"
      ]
    },
    {
      title: "Top Gift Cards to Sell",
      description: "Wondering which gift cards sell fast and at the best rates? Here's your go-to guide.",
      images: [
        "./assets/cards1.jpg.jpg",
        "./assets/cards2.jpg.jpg",
        "./assets/cards3.jpg.jpg",
        "./assets/cards4.jpg.jpg",
        "./assets/cards5.jpg.jpg"
      ]
    },
    {
      title: "Secure Trading Platforms",
      description: "A breakdown of the safest and most trusted trading platforms for gift cards and crypto.",
      images: [
        "./assets/cbbb1.jpg.jpg",
        "./assets/cbbb2.jpg.jpg",
        "./assets/cbbb3.jpg.jpg",
        "./assets/cbbb4.jpg.jpg",
        "./assets/cbbb55.jpg.jpg"
      ]
    },
    {
      title: "Understanding Bitcoin",
      description: "What is Bitcoin really? Here's a simple explanation of the first cryptocurrency ever created.",
      images: [
        "./assets/bblitttttt-1.jpg.jpg",
        "./assets/bblitttttt-2.jpg.jpg",
        "./assets/bblitttttt-3.jpg.jpg",
        "./assets/bblitttttt-4.jpg.jpg",
        "./assets/bblitttttt-5.jpg.jpg"
      ]
    },
    {
      title: "How to Sell Crypto Fast",
      description: "Learn proven methods to quickly and safely sell your crypto for the best market rates.",
      images: [
        "./assets/kkkkkk1.jpg.jpg",
        "./assets/kkkkkk2.jpg.jpg",
        "./assets/kkkkkk3.jpg.jpg",
        "./assets/kkkkkk4.jpg.jpg",
        "./assets/kkkkkk5.jpg.jpg"
      ]
    },
    {
      title: "Top 10 Crypto Myths",
      description: "Let’s bust some of the most common myths about cryptocurrency and the blockchain world.",
      images: [
        "./assets/maysss1.jpg.jpg",
        "./assets/maysss2.jpg.jpg",
        "./assets/maysss3.jpg.jpg",
        "./assets/maysss4.jpg.jpg",
        "./assets/maysss5.jpg.jpg"
      ]
    },
    {
      title: "Gift Card Scams to Avoid",
      description: "Not all deals are good deals. Know the red flags when buying or selling gift cards online.",
      images: [
        "./assets/cammmmmm1.jpg.jpg",
        "./assets/cammmmmm2.jpg.jpg",
        "./assets/cammmmmm3.jpg.jpg",
        "./assets/cammmmmm4.jpg.jpg",
        "./assets/cammmmmm5.jpg.jpg"
      ]
    },
  ];

  const blogId = getBlogIdFromURL();

  if (isNaN(blogId) || blogId < 1 || blogId > blogs.length) {
    blogContainer.innerHTML = "<p>Invalid blog ID. Please go back and try again.</p>";
    return;
  }

  const blog = blogs[blogId - 1]; // Adjust for 0-based array

  // Render HTML
  blogContainer.innerHTML = `
    <h2>${blog.title}</h2>
    <p>${blog.description}</p>
    <div class="image-gallery">
      ${blog.images.map(img => `<img src="${img}" alt="Blog Image" style="width: 100%; max-width: 400px; margin: 10px;">`).join("")}
    </div>
  `;
});
