"use strict";

/**
 * navbar toggle
 */

const overlay = document.querySelector("[data-overlay]");
const navOpenBtn = document.querySelector("[data-nav-open-btn]");
const navbar = document.querySelector("[data-navbar]");
const navCloseBtn = document.querySelector("[data-nav-close-btn]");
const navLinks = document.querySelectorAll("[data-nav-link]");

const navElemArr = [navOpenBtn, navCloseBtn, overlay];

const navToggleEvent = function (elem) {
  for (let i = 0; i < elem.length; i++) {
    elem[i].addEventListener("click", function () {
      navbar.classList.toggle("active");
      overlay.classList.toggle("active");
    });
  }
};

navToggleEvent(navElemArr);
navToggleEvent(navLinks);

/**
 * header sticky & go to top
 */

const header = document.querySelector("[data-header]");
const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 200) {
    header.classList.add("active");
    goTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    goTopBtn.classList.remove("active");
  }
});

//////////////////////////////
//Testimonial Data
const testimonials = [
  {
    name: "Eva Sawyer",
    job: "CEO, Fashworks",
    // image: "https://i.postimg.cc/mgp4pfz5/profile-image-1.png",
    testimonial:
      "Neque volutpat ac tincidunt vitae semper quis lectus nulla at volutpat diam ut venenatis tellus in metus vulputate eu scelerisque felis imperdiet proin fermentum leo vel orci porta non pulvinar neque laoreet suspendisse interdum consectetur",
  },
  {
    name: "Katey Topaz",
    job: "Developer, TechCrew",
    // image: "https://i.postimg.cc/PfSSwtB9/profile-image-2.png",
    testimonial:
      "Elementum tempus egestas sed sed risus pretium quam vulputate dignissim suspendisse in est ante in nibh mauris cursus mattis molestie a iaculis at erat pellentesque adipiscing commodo elit at imperdiet dui accumsan sit amet nulla",
  },
  {
    name: "Jae Robin",
    job: "UI Designer, Affinity Agency",
    // image: "https://i.postimg.cc/W4mnbjG9/profile-image-3.png",
    testimonial:
      "Orci nulla pellentesque dignissim enim sit amet venenatis urna cursus eget nunc scelerisque viverra mauris in aliquam sem fringilla ut morbi tincidunt augue interdum velit euismod in pellentesque massa placerat duis ultricies lacus sed turpis",
  },
  {
    name: "Nicola Blakely",
    job: "CEO,Zeal Wheels",
    // image: "https://i.postimg.cc/xdLsJL23/profile-image-4.png",
    testimonial:
      "Sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit",
  },
];
//Current Slide
let i = 0;
//Total Slides
let j = testimonials.length;
let testimonialContainer = document.getElementById("testimonial-container");
let nextBtn = document.getElementById("next");
let prevBtn = document.getElementById("prev");
nextBtn.addEventListener("click", () => {
  i = (j + i + 1) % j;
  displayTestimonial();
});
prevBtn.addEventListener("click", () => {
  i = (j + i - 1) % j;
  displayTestimonial();
});
////// testiminial switch timer

var timer1 = setInterval(function () {
  nextBtn.click();
}, 1000 * 3);

//////////
function displayTestimonial() {
  clearInterval(timer1);
  testimonialContainer.innerHTML = `
    <p>${testimonials[i].testimonial}</p>
    <h3>${testimonials[i].name}</h3>
  `;
  timer1 = setInterval(function () {
    nextBtn.click();
  }, 1000 * 3);
}
window.onload = displayTestimonial;
