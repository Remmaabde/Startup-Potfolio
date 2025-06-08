//Our Current Slide
let currentIndex = 0;

function moveSlide(direction) {
    const track = document.querySelector('.carousel-track');
    const cards = document.querySelectorAll('.Product-card');
    const totalSlides = cards.length;

    // Changes z slide number depending on z button i clicked
    currentIndex += direction;

    //goes to prev slide 
    if (currentIndex < 0) currentIndex = totalSlides - 1;
    //When we reach the end of the slides, it goes back to the first slide
    if (currentIndex >= totalSlides) currentIndex = 0;
     
    //checks how wide one product card is (in pixels)  //We need this number to know how far to move the slider.
    const slideWidth = cards[0].clientWidth;

    //move z entire carousel to left and right.

    track.style.transform = `translateX(-${slideWidth * currentIndex}px)`;
}
function switchTo(target) {
    // Hide both
    document.getElementById('User').classList.remove('visible');
    document.getElementById('Partner').classList.remove('visible');

    // Show selected
    document.getElementById(target).classList.add('visible');

    // Button visual toggle
    document.getElementById('studentBtn').classList.remove('active');
    document.getElementById('mentorBtn').classList.remove('active');
    document.getElementById(target + 'Btn').classList.add('active');
}
//FAQ Acordion
// Select all faq-item elements
const questions = document.querySelectorAll('.faq-question');

    questions.forEach(q => {
      q.addEventListener('click', () => {
        // Close all questions first
        questions.forEach(item => {
          item.classList.remove('active');
          item.querySelector('.icon').textContent = '+';
        });

        // If not already open, open this one
        if (!q.classList.contains('active')) {
          q.classList.add('active');
          q.querySelector('.icon').textContent = '-';
        }
      });
    });
