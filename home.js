
document.querySelectorAll('.rll-youtube-player').forEach(player => {
const button = player.querySelector('.play');
button.addEventListener('click', () => {
const videoSrc = player.getAttribute('data-src');
player.innerHTML = `<iframe src="${videoSrc}" frameborder="0" allowfullscreen></iframe>`;
});
});
function toggleMenu() {
const navbarMenu = document.querySelector('.navbar ul');
navbarMenu.classList.toggle('expanded');
navbarMenu.classList.toggle('collapsed');
}


// JavaScript for popup functionality and form submission
document.addEventListener("DOMContentLoaded", () => {
const openPopupBtn = document.getElementById("open-popup");
const closePopupBtn = document.getElementById("close-popup");
const popupOverlay = document.getElementById("popup-overlay");
const form = document.querySelector(".popup-form form");

// Function to open the popup
openPopupBtn.addEventListener("click", (e) => {
e.preventDefault();
popupOverlay.style.display = "flex";
});

// Function to close the popup
closePopupBtn.addEventListener("click", () => {
popupOverlay.style.display = "none";
});

// Close popup when clicking outside the form
popupOverlay.addEventListener("click", (e) => {
if (e.target === popupOverlay) {
popupOverlay.style.display = "none";
}
});

// Form submission handler
form.addEventListener("submit", (e) => {
e.preventDefault();

// Get form values
const companyName = document.getElementById("company-name").value;
const userName = document.getElementById("user-name").value;
const email = document.getElementById("email").value;
const phone = document.getElementById("phone").value;

// Create email content
const subject = encodeURIComponent("New 3D Design Request");
const body = encodeURIComponent(
`Company Name: ${companyName}\nName: ${userName}\nEmail: ${email}\nPhone: ${phone}`
);

// Open the default email client
window.location.href = `mailto:stallifyin@gmail.com?subject=${subject}&body=${body}`;

// Optionally close the popup after submission
popupOverlay.style.display = "none";
});
});
