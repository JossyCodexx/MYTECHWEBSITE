
//   function toggleDropdown() {
//     const menu = document.getElementById('dropdownMenu');
//     menu.classList.toggle('show-dropdown');
//   }

//   // Optional: Close dropdown when clicking outside
//   document.addEventListener('click', function(event) {
//     const dropdown = document.getElementById('dropdownMenu');
//     const icon = document.querySelector('.hamburger-icon');
//     if (!icon.contains(event.target)) {
//       dropdown.classList.remove('show-dropdown');
//     }
//   });





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


