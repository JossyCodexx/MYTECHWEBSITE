// crypto-project.js
document.getElementById('videoUpload').addEventListener('change', function (event) {
  const file = event.target.files[0];
  const videoPreview = document.getElementById('videoPreview');

  if (file && file.type.startsWith('video/')) {
    const video = document.createElement('video');
    video.controls = true;
    video.src = URL.createObjectURL(file);

    // Clear SVG placeholder
    videoPreview.innerHTML = '';
    videoPreview.appendChild(video);
  } else {
    alert('Please upload a valid video file.');
  }
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

