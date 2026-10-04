const register = document.getElementById("registerForm");

if (register) {
  register.addEventListener("submit", function(e) {
    e.preventDefault();

    localStorage.setItem("name", document.getElementById("name").value);
    localStorage.setItem("email", document.getElementById("email").value);
    localStorage.setItem("password", document.getElementById("password").value);

    alert("Registration successful!");
    location.href = "login.html";
  });
}


const login = document.getElementById("loginForm");

if (login) {
  login.addEventListener("submit", function(e) {
    e.preventDefault();

    let email = document.getElementById("loginEmail").value;
    let password = document.getElementById("loginPassword").value;

    if (
      email === localStorage.getItem("email") &&
      password === localStorage.getItem("password")
    ) {
      localStorage.setItem("loggedIn", "true");
      location.href = "dashboard.html";
    } else {
      alert("Invalid email or password!");
    }
  });
}
const businessForm = document.getElementById("businessForm");

if (businessForm) {
  businessForm.addEventListener("submit", function(e) {
    e.preventDefault();

    let businesses =
      JSON.parse(localStorage.getItem("businesses")) || [];

    businesses.push({
      owner: document.getElementById("owner").value,
      name: document.getElementById("businessName").value,
      category: document.getElementById("category").value,
      description: document.getElementById("description").value,
      phone: document.getElementById("phone").value,
      social: document.getElementById("social").value
    });

    localStorage.setItem("businesses",
      JSON.stringify(businesses));

    alert("Your business has been added to SheLeads! 🌸");

    businessForm.reset();
  });
}
const businessList = document.getElementById("businessList");

if (businessList) {
  let businesses =
    JSON.parse(localStorage.getItem("businesses")) || [];

  businesses.forEach(business => {
    businessList.innerHTML += `
      <div class="card">
        <h3>${business.name}</h3>
        <p><b>${business.category}</b></p>
        <p>${business.description}</p>
        <p>👤 ${business.owner}</p>

        <a class="btn" href="tel:${business.phone}">
          📞 Contact
        </a>

        <a class="btn" href="${business.social}" target="_blank">
          📷 Instagram
        </a>
      </div>
    `;
  });
}
