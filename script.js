// Get the navbar element
const navbar = document.getElementById("stickyNavbar");

// Get the offset position of the navbar
const sticky = navbar.offsetTop;

// Function to add or remove the "sticky" class based on scroll position
function handleScroll() {
    if (window.pageXOffset >= sticky) {
        navbar.classList.add("sticky");
    } else {
        navbar.classList.remove("sticky");
    }
}

// Listen for the "scroll" event and call the handleScroll function
window.addEventListener("scroll", handleScroll);

document.querySelectorAll('.navbar a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
  
      const targetSection = document.querySelector(this.getAttribute('href'));
      targetSection.scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  