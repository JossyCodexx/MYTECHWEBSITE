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
        "./images/blog1-1.jpg.jpg",
        "./images/blog2-2.jpg.jpg",
        "./images/blog3-3.jpg.jpg",
        "./images/blog4-4.jpg.jpg",
        "./images/blog5-5.jpg.jpg"
      ]
    },
    {
      title: "Gift Card Trading Tips",
      description: "Discover smart strategies for safely trading gift cards and getting the best rates online.",
      images: [
        "images/card-blog1.jpg.jpg",
        "images/card-blog2.jpg.jpg",
        "images/card-blog3.jpg.jpg",
        "images/card-blog4.jpg.jpg",
        "images/card-blog5.jpg.jpg"
      ]
    },
    {
      title: "Top 5 Crypto Wallets",
      description: "We reviewed the top 5 crypto wallets in 2025. See which is best for your needs and why.",
      images: [
        "./images/wallet1.jpg.jpg",
        "./images/wallet2.jpg.jpg",
        "./images/wallet3.jpg.jpg",
        "./images/wallet4.jpg.jpg",
        "./images/wallet5.jpg.jpg"
      ]
    },
    {
      title: "How to Avoid Crypto Scams",
      description: "Learn the most common crypto scams and how to protect yourself from fraud and fake platforms.",
      images: [
        "./images/samm1.jpg.jpg",
        "./images/samm2.jpg.jpg",
        "./images/samm3.jpg.jpg",
        "./images/samm4.jpg.jpg",
        "./images/samm5.jpg.jpg"
      ]
    },
    {
      title: "Best Crypto Trading Apps",
      description: "Explore the best apps for mobile crypto trading in 2025, including fees and security features.",
      images: [
        "./images/bet1.jpg.jpg",
        "./images/bet2.jpg.jpg",
        "./images/bet3.jpg.jpg",
        "./images/bet4.jpg.jpg",
        "./images/bet5.jpg.jpg"
      ]
    },
    {
      title: "How Blockchain Works",
      description: "An easy-to-understand explanation of how blockchain technology powers cryptocurrencies today.",
      images: [
        "./images/chine1.jpg.jpg",
        "./images/chine2.jpg.jpg",
        "./images/chine3.jpg.jpg",
        "./images/chine4.jpg.jpg",
        "./images/chine5.jpg.jpg"
      ]
    },
    {
      title: "Top Gift Cards to Sell",
      description: "Wondering which gift cards sell fast and at the best rates? Here's your go-to guide.",
      images: [
        "./images/cards1.jpg.jpg",
        "./images/cards2.jpg.jpg",
        "./images/cards3.jpg.jpg",
        "./images/cards4.jpg.jpg",
        "./images/cards5.jpg.jpg"
      ]
    },
    {
      title: "Secure Trading Platforms",
      description: "A breakdown of the safest and most trusted trading platforms for gift cards and crypto.",
      images: [
        "./images/cbbb1.jpg.jpg",
        "./images/cbbb2.jpg.jpg",
        "./images/cbbb3.jpg.jpg",
        "./images/cbbb4.jpg.jpg",
        "./images/cbbb5.jpg.jpg"
      ]
    },
    {
      title: "Understanding Bitcoin",
      description: "What is Bitcoin really? Here's a simple explanation of the first cryptocurrency ever created.",
      images: [
        "./images/tttt-1.jpg.jpg",
        "./images/tttt-2.jpg.jpg",
        "./images/tttt-3.jpg.jpg",
        "./images/tttt-4.jpg.jpg",
        "./images/tttt-5.jpg.jpg"
      ]
    },
    {
      title: "How to Sell Crypto Fast",
      description: "Learn proven methods to quickly and safely sell your crypto for the best market rates.",
      images: [
        "./images/kkk1.jpg.jpg",
        "./images/kkk2.jpg.jpg",
        "./images/kkk3.jpg.jpg",
        "./images/kkk4.jpg.jpg",
        "./images/kkk5.jpg.jpg"
      ]
    },
    {
      title: "Top 10 Crypto Myths",
      description: "Let’s bust some of the most common myths about cryptocurrency and the blockchain world.",
      images: [
        "./images/ma1.jpg.jpg",
        "./images/ma2.jpg.jpg",
        "./images/ma3.jpg.jpg",
        "./images/ma4.jpg.jpg",
        "./images/ma5.jpg.jpg"
      ]
    },
    {
      title: "Gift Card Scams to Avoid",
      description: "Not all deals are good deals. Know the red flags when buying or selling gift cards online.",
      images: [
        "./images/aaa1.jpg.jpg",
        "./images/aaa2.jpg.jpg",
        "./images/aaa3.jpg.jpg",
        "./images/aaa4.jpg.jpg",
        "./images/aaa5.jpg.jpg"
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
