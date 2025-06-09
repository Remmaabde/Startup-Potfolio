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
    // This will Hide both elements
    document.getElementById('User').classList.remove('visible');
    document.getElementById('Partner').classList.remove('visible');

    // SThis wil show selected element
    document.getElementById(target).classList.add('visible');

    // Button visual toggle
    document.getElementById('studentBtn').classList.remove('active');
    document.getElementById('mentorBtn').classList.remove('active');
    document.getElementById(target + 'Btn').classList.add('active');
}
let counterContainer = document.querySelector('#visit_count');
let visitCount = localStorage.getItem("page_view");

if (visitCount) {
    visitCount = Number(visitCount) + 1;
    localStorage.setItem("page_view", visitCount);
} else {
    visitCount = 1;
    localStorage.setItem("page_view", 1);
}

counterContainer.textContent = visitCount;
 // Display the count in the container
//FAQ Acordion

  function toggleFAQ(element) {
    const question = element; //holds question
    const answer = question.nextElementSibling; // holds the answer which is next to question

    question.classList.toggle('active'); //Adds a class called active , it's like on & off

    if (question.classList.contains('active')) { // if the class is active display the block otherwise hide
      answer.style.display = 'block';
    } else {
      answer.style.display = 'none';
    }
  }


    