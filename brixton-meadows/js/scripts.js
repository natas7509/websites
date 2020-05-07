// GLOBAL =====================================================

// NAV SLIDE-IN

// Function to select elements
const selectElement = (e) => document.querySelector(e);

// Open the menu when clicked
selectElement(".open").addEventListener("click", (e) => {
  selectElement(".nav-list").classList.add("active");
});

// Close the menu when clicked
selectElement(".close,.closeLink").addEventListener("click", (e) => {
  selectElement(".nav-list").classList.remove("active");
});
