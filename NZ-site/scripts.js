// Function to select elements

const selectElement = (e) => document.querySelector(e);
const selectLink = (e) => document.querySelector(e);

// Open the menu when clicked
selectElement(".open").addEventListener("click", (e) => {
  selectElement(".nav-list").classList.add("active");
});

// Close the menu when clicked
selectElement(".close").addEventListener("click", (e) => {
  selectElement(".nav-list").classList.remove("active");
});

// Close menu when a nav link is clicked
selectLink(".closeLink").addEventListener("click", (e) => {
  selectLink(".nav-list").classList.remove("active");
});
