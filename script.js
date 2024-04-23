"use strict";

let  i  = 0, j = 0 , k = 0 ,l = 0 , m = 0 ,n = 0;
let speed = 25; 
const wrap1 = document.querySelector('#wrap1');
const prose = document.querySelector('#prose');
const human = document.querySelector('#human');
const tech = document.querySelector('#tech');
const design = document.querySelector('#design');
const marketing = document.querySelector('#marketing');
const contact = document.querySelector('#contact');
const buttons = document.querySelector('#buttons');
const heading = document.querySelector('#heading');
const walker = document.getElementById('walker');

const walk = function(){
  console.log(walker.style);
  console.log(walker.style.left);
  console.log(walker.style.bottom);
  // console.log('walk fuunc was called');
  walker.style.left += 1;
};

setInterval(walk,1500);

const p  = "hello world, i am a practicing human, techie, and artist. i spend most of my time learning tech, listening to music, scrolling through reddit, and occasionally enjoying watching movies or stand-up comedy. i live in india with my wife and parents. you're welcome to explore more about me and consult me regarding the below fields"

const p0 = "this space is where you will see white-papers, blogs, one-liners, shower thoughts and memes that i come up with. all original, relatively ;) when i write, you will hear about it on my socials"

const p1 = "HTML, CSS, JavaScript, node.js, SQL, MongoDB, API Testing on Postman, REST APIs, SOAP, Webhooks, XML, JSON, HTTP methods, GIT, Github, Linux, Chrome Developer tools, incident Management, ITIL, SFDC, ServiceNow, JIRA, analytics, cloud computing, networking basics...etc"

const p2 = "i can design images, motion graphics, websites, emails, edit audio and direct video which are minimalist and feel like a breath of fresh air. i have an understanding of design principles and inherent taste for design that overflows from one medium to another seamlessly often helping me visualize better. my experience in web development makes me parallely think of bringing design to reality. tools i use: canva, photoshop, figma, fl studio, davinci resolve, html/css/js for web...etc" 

const p3   = "i can plan, design, segment customers and execute personalised campaigns across all channels and then analyse performace after, also work with ad audience for better engagement and sales. tools i use: hubspot, bloomreach engagement cdxp, salesforce marketing cloud, google ads, facebook ads, google analytics...etc";

const p4 = "reachxsalman@gmail.com for any consultation or if you'd like to hire me full-time"


function typeWriter() {
  if (i < p.length) {
    prose.innerHTML += p.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

typeWriter();

const backbutton =  function(){
  buttons.innerHTML = `<a href=index.html id='bb' class='button'>
<<< back 
</a>`;
};

setTimeout( function(){
  buttons.style.display = "flex";
} , 8000) 


function typeWriter1() {
  if (j < p0.length) {
    heading.innerHTML = "<h1>human</h1>"
    prose.innerHTML += p0.charAt(j);
    j++;
    setTimeout(typeWriter1, speed);
  }
};

function typeWriter2() {
  if (k < p1.length) {
    heading.innerHTML = "<h1>tech<h1>"
    prose.innerHTML += p1.charAt(k);
    k++;
    setTimeout(typeWriter2, speed);
  }
};

function typeWriter3() {
  if (l < p2.length) {
    heading.innerHTML = "<h1>design<h1>"
    prose.innerHTML += p2.charAt(l);
    l++;
    setTimeout(typeWriter3, speed);
  }
};


function typeWriter4() {
  if (m < p3.length) {
    heading.innerHTML = "<h1>marketing</h1>"
    prose.innerHTML += p3.charAt(m);
    m++;
    setTimeout(typeWriter4, speed);
  }
};

function typeWriter5() {
  if (n < p4.length) {
    heading.innerHTML = "<h1>contact<h1>"
    prose.innerHTML += p4.charAt(n);
    n++;
    setTimeout(typeWriter5, speed);
  }
};

human.addEventListener('click', function(e){
  e.preventDefault();
  heading.innerHTML = "";
  prose.innerHTML = "";
  buttons.innerHTML = "";
  typeWriter1();
  setTimeout(backbutton,5000);
} );

tech.addEventListener('click', function(e){
  e.preventDefault();
  heading.innerHTML = "";
  prose.innerHTML = "";
  buttons.innerHTML = "";
  typeWriter2();
  setTimeout(backbutton,7000);
} );

design.addEventListener('click', function(e){
  e.preventDefault();
  heading.innerHTML = "";
  prose.innerHTML = "";
  buttons.innerHTML = "";
  typeWriter3();
  setTimeout(backbutton,12000);
} );

marketing.addEventListener('click', function(e){
  e.preventDefault();
  heading.innerHTML = "";
  prose.innerHTML = "";
  buttons.innerHTML = "";
  typeWriter4();
  setTimeout(backbutton,6000 );
} );

contact.addEventListener('click', function(e){
  e.preventDefault();
  heading.innerHTML = "";
  prose.innerHTML = "";
  buttons.innerHTML = "";
  typeWriter5();
  setTimeout(backbutton,2500 );
} );




// human.addEventListener('click', function(e){
//   e.preventDefault();
//   prose.innerHTML = "";
//   console.log('click works');
//   typeWriter1();
  
// } );

// tech.addEventListener('click', function(){
//   console.log('tech was clicked');
  
// });
// design.addEventListener('click', function(){
//   console.log('design was clicked');
  
// });
// marketing.addEventListener('click', function(){
//   console.log('marketing was clicked');
  
// });
// contact.addEventListener('click', function(){
//   console.log('contact was clicked');
  
// });


// function typeWriter(x) {
// const letters = x.split('')
// console.log(letters);
// letters.forEach(element => {
//   setTimeout( prose.innerHTML += element, speed)
// });
// }

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

// "I am Support professional with more than 5 years of experience, I have good technical skills and excellent communications skills which i leverage to solve complex technical issues. I specialize in Problem-solving, de-escalating unpleasant situations while exhibiting high-level of ownership"
