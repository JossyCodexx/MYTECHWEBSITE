    const loginForm = document.getElementById('loginForm');

    loginForm.addEventListener('submit', async (e) => {
      e.preventDefault();

      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;

      try {
        const response = await axios.post('http://localhost:5000/api/login', {
          email,
          password
        }, {
          withCredentials: true
        });

        alert('Login successful!');
        console.log(response.data);
        // Optionally redirect
        // window.location.href = '/dashboard.html';
      } catch (error) {
        console.error('Login failed:', error.response?.data || error.message);
        alert(error.response?.data?.message || 'Login failed. Please try again.');
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


    
  




















