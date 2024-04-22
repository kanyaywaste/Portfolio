"use strict";

let  i = 0;
let speed = 50; 
const divone = document.querySelector('#prose');
const human = document.querySelector('#human');
const tech = document.querySelector('#tech');
const design = document.querySelector('#design');
const marketing = document.querySelector('#marketing');
const contact = document.querySelector('#contact');

const orry  = "hello world, i am a practicing human, techie and an artist. i am spending most of time learning tech, listening to music, scrolling through reddit and i enjoy watching movies / standup comedy occasionally. i live in india, with my wife and parents. use to below buttons to learns more about me"


// "I am Support professional with more than 5 years of experience, I have good technical skills and excellent communications skills which i leverage to solve complex technical issues. I specialize in Problem-solving, de-escalating unpleasant situations while exhibiting high-level of ownership"

const buttons = document.querySelector('nav')

function typeWriter() {
  if (i < orry.length) {
    divone.innerHTML += orry.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}



typeWriter(orry);

human.addEventListener('click', function(){
  console.log('human was clicked');
  
} );
tech.addEventListener('click', function(){
  console.log('tech was clicked');
  
});
design.addEventListener('click', function(){
  console.log('design was clicked');
  
});
marketing.addEventListener('click', function(){
  console.log('marketing was clicked');
  
});
contact.addEventListener('click', function(){
  console.log('contact was clicked');
  
});

















// const typeWriter = function()  {
//   if (i < orry.length) {
//     divone.innerHTML += orry.charAt(i);
//     i++;
//     setTimeout(typeWriter(), speed);
//   }
// }
// const typeWriter = function() {
//   if (i < orry.length) {
//     divone.innerHTML += orry.charAt(i);
//     i++;
//     setTimeout(typeWriter(), speed);
//   } 
// }





// function typeWriter() {
//   if (i < orry.length) {
//     divone.innerHTML += orry.charAt(i);
//     i++;
//     setTimeout(typeWriter, speed);
//   }
// }



// I am a practicing human, techie and an artist. I live in Palamaner, with my wife and parents. I am spent most of

