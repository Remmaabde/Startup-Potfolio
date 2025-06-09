
// Product Carousel functionality
let currentIndex = 0;

function move_Slider(direction) {
const track = document.querySelector('.carousel-track');
const cards = document.querySelectorAll('.Product-card');
const totalSlides = cards.length;

currentIndex += direction;

  // Loop will go back to the last slide if we go before the first one
if (currentIndex < 0) {
    currentIndex = totalSlides - 1;
}
// Loop back to the first slide if we go past the last one
if (currentIndex >= totalSlides) {
    currentIndex = 0;
}
const slideWidth = cards[0].clientWidth;
  track.style.transform = `translateX(-${slideWidth * currentIndex}px)`;
}

// Switch between User and Partner sections
function switchTo(target) {
  const userSection = document.getElementById('User');
  const partnerSection = document.getElementById('Partner');

  userSection.classList.remove('visible');
  partnerSection.classList.remove('visible');
  document.getElementById(target).classList.add('visible');

  // Toggle button styling
  document.getElementById('studentBtn').classList.remove('active');
  document.getElementById('mentorBtn').classList.remove('active');
  document.getElementById(`${target}Btn`).classList.add('active');
}

// Track page visits using localStorage
const counterContainer = document.querySelector('#visit_count');
let visitCount = localStorage.getItem('page_view');

if (visitCount) {
  visitCount = parseInt(visitCount, 10) + 1;
} else {
  visitCount = 1;
}
localStorage.setItem('page_view', visitCount);
counterContainer.textContent = visitCount;

// FAQ accordion toggle
function toggleFAQ(element) {
const question = element;
const answer = question.nextElementSibling;

question.classList.toggle('active');
answer.style.display = question.classList.contains('active') ? 'block' : 'none';
}

//Scroll Behaviour
const topBtn = document.getElementById('topBtn');

window.onscroll = function () {// display block if the user scrolls down more than 200px
topBtn.style.display = window.scrollY > 200 ? 'block' : 'none';
};

topBtn.onclick = function () {
window.scrollTo({ top: 0, behavior: 'smooth' });
};

//Integrating AI Chatbot

