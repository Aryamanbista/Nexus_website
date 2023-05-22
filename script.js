// JavaScript code for the header section

// Add an event listener to the logo image
const logoImage = document.querySelector("header img");
logoImage.addEventListener("click", goToHomePage);

// Function to navigate to the home page
function goToHomePage() {
  window.location.href = "home.html";
}

// Add event listeners to each menu item
const menuItems = document.querySelectorAll(".menu li a");
menuItems.forEach(item => {
  item.addEventListener("click", highlightMenuItem);
});

// Function to highlight the clicked menu item
function highlightMenuItem(event) {
  // Remove the "active" class from all menu items
  menuItems.forEach(item => {
    item.classList.remove("active");
  });

  // Add the "active" class to the clicked menu item
  event.target.classList.add("active");
}

// Add an event listener to the registration link
const registerLink = document.querySelector(".register");
registerLink.addEventListener("click", openRegistrationForm);

// Function to open the registration form in a new tab
function openRegistrationForm(event) {
  event.preventDefault();
  window.open("registrationform.html", "_blank");
}
