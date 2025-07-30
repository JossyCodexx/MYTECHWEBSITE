document.addEventListener("DOMContentLoaded", function () {
  const viewButtons = document.querySelectorAll(".view-project");

  viewButtons.forEach(button => {
    button.addEventListener("click", function (e) {
      e.preventDefault();
      const card = this.closest(".project-card");
      const projectId = card.getAttribute("data-id");
      window.location.href = `project-details.html?id=${projectId}`;
    });
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
