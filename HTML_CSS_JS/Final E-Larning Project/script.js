window.onload = function () {
  alert("🎉 Welcome to LearnHub E-Learning Website!");
};


// Explore Courses Button
// ===========================================

// Select the first button (Explore Courses)
let exploreBtn = document.querySelector(".hero button");

exploreBtn.addEventListener("click", function () {
  alert("Welcome to Our Courses!");

  // Move to Courses Section
  document.getElementById("courses").scrollIntoView({
    behavior: "smooth",
  });
});

// Contact Form Validation
// ===========================================

let form = document.querySelector("form");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  let name = form.querySelector('input[type="text"]').value;

  let email = form.querySelector('input[type="email"]').value;

  let subject = form.querySelectorAll('input[type="text"]')[1].value;

  let message = form.querySelector("textarea").value;

  if (name == "" || email == "" || subject == "" || message == "") {
    alert("Please fill all the fields.");
  } else {
    alert("Your message has been sent successfully!");

    form.reset();
  }
});

// Course Button Click
// ===========================================

let courseButtons = document.querySelectorAll(".course-card button");

courseButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    alert("Thank you for choosing this course!");
  });
});

// ===========================================
// Faculty Card Click
// ===========================================

let facultyCards = document.querySelectorAll(".faculty-card");

facultyCards.forEach(function (card) {
  card.addEventListener("click", function () {
    alert("Our experienced faculty will guide you.");
  });
});

// ===========================================
// Testimonial Hover
// ===========================================

let testimonials = document.querySelectorAll(".testimonial-card");

testimonials.forEach(function (card) {
  card.addEventListener("click", function () {
    alert("Thank you for reading our student's review.");
  });
});

// ===========================================
// Footer Copyright Click
// ===========================================

let footer = document.querySelector("footer");

footer.addEventListener("click", function () {
  console.log("LearnHub Website");
});

// ===========================================
// Back To Top Button
// ===========================================

// Create Button

let topButton = document.createElement("button");

topButton.innerHTML = "↑";

document.body.appendChild(topButton);

// Style by JavaScript

topButton.style.position = "fixed";
topButton.style.bottom = "20px";
topButton.style.right = "20px";

topButton.style.padding = "12px 16px";

topButton.style.fontSize = "20px";

topButton.style.border = "none";

topButton.style.borderRadius = "50%";

topButton.style.background = "#0d6efd";

topButton.style.color = "white";

topButton.style.cursor = "pointer";

topButton.style.display = "none";

// Show Button

window.addEventListener("scroll", function () {
  if (window.scrollY > 300) {
    topButton.style.display = "block";
  } else {
    topButton.style.display = "none";
  }
});

// Scroll to Top

topButton.addEventListener("click", function () {
  window.scrollTo({
    top: 0,

    behavior: "smooth",
  });
});

// ===========================================
// Navigation Link Click
// ===========================================

let links = document.querySelectorAll("nav a");

links.forEach(function (link) {
  link.addEventListener("click", function () {
    console.log("Navigation Clicked");
  });
});

// ===========================================
// Hero Image Click
// ===========================================

let heroImage = document.querySelector(".hero-image img");

heroImage.addEventListener("click", function () {
  alert("Keep Learning, Keep Growing!");
});

// ===========================================
// Logo Click
// ===========================================

let logo = document.querySelector(".logo");

logo.addEventListener("click", function () {
  location.reload();
});
