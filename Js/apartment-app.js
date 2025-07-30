document.getElementById('videoUpload').addEventListener('change', function (event) {
  const videoPreview = document.getElementById('videoPreview');
  const file = event.target.files[0];

  if (file) {
    const videoURL = URL.createObjectURL(file);
    const video = document.createElement('video');
    video.src = videoURL;
    video.controls = true;
    video.style.width = '100%';
    video.style.borderRadius = '10px';

    videoPreview.innerHTML = '';
    videoPreview.appendChild(video);
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
