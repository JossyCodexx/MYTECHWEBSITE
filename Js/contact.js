

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


















 
    const form = document.getElementById('contactForm');
    const responseEl = document.getElementById('formResponse');

    form.addEventListener('submit', async (e) => {
      e.preventDefault();

      const formData = {
        name: form.name.value,
        email: form.email.value,
        message: form.message.value
      };

      try {
        const res = await fetch('http://localhost:5000/api/contact', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(formData)
        });

        const data = await res.json();
        if (res.ok) {
          responseEl.style.color = 'green';
          responseEl.textContent = 'Message sent successfully!';
          form.reset();
        } else {
          responseEl.style.color = 'red';
          responseEl.textContent = data.message || 'Something went wrong.';
        }
      } catch (error) {
        responseEl.style.color = 'red';
        responseEl.textContent = 'Server error. Please try again later.';
      }
    });



