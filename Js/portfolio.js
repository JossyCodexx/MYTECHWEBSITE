function toggleAddForm() {
  const form = document.getElementById('addForm');
  form.classList.toggle('hidden');
}

function addProject() {
  const title = document.getElementById('project-title').value.trim();
  const description = document.getElementById('project-description').value.trim();

  if (title === "" || description === "") {
    alert("Please fill in both fields.");
    return;
  }

  const grid = document.querySelector('.portfolio-grid');

  const card = document.createElement('div');
  card.className = 'portfolio-card';
  card.innerHTML = `
    <div class="card-header">
      <h3 class="card-title">${title}</h3>
      <p class="card-description">${description}</p>
    </div>
    <div class="card-content">
      <div class="video-placeholder">
        <svg class="play-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <polygon points="5,3 19,12 5,21"></polygon>
        </svg>
      </div>
      <div class="upload-section">
        <label for="video-new" class="upload-label">Upload Video</label>
        <input type="file" accept="video/*" class="file-input">
      </div>
      <button class="btn-view">View Project</button>
    </div>
  `;

  grid.appendChild(card);

  document.getElementById('project-title').value = '';
  document.getElementById('project-description').value = '';
  toggleAddForm();
}





















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
