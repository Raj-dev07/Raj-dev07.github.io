document.getElementById('nav-register').onclick = function(){
  window.scrollTo({
    top:900,
    behavior: 'smooth'
  })
}

document.getElementById('launching-soon').onclick = function(){
  window.scrollTo({
    top:900,
    behavior: 'smooth'
  })
}


///////// BEKARRRR
gsap.from(".navbar", {
  opacity: 0,
  y: -100,
  duration: 1,
  ease: "power3.inOut"
});


gsap.from("#home-aipic", {
  opacity: 0,
  y: 100,
  duration: 1,
  ease: "power3.inOut",
  delay: .5
});



gsap.from("#homeh2", {
  opacity: 0,
  y: 100,
  duration: 1,
  ease: "power3.inOut",
  delay: 1
});


gsap.from("#homeh1", {
  opacity: 0,
  y: 100,
  duration: 1,
  ease: "power3.inOut",
  delay: 1.3
});


gsap.from("#homeh4", {
  opacity: 0,
  y: 100,
  duration: 1,
  ease: "power3.inOut",
  delay: 1.6
});


gsap.from("#launching-soon", {
  opacity: 0,
  y: 400,
  duration: 2.2,
  ease: "power3.inOut",
});


gsap.from("#home-down-arrow", {
  opacity: 0,
  y: 100,
  duration: 1.3,
  ease: "power3.inOut",
  delay:2
});


// Animation on scrolling

let animationPlayed1 = false;

const subscribeForm = document.getElementById('sfhome');

subscribeForm.style.opacity = '0';

window.addEventListener('scroll', function () {
  if (window.scrollY >= 400 && !animationPlayed1) {
    subscribeForm.style.opacity = '1';
    gsap.from(".subscribe-form", {
      duration: 2,
      opacity: 0,
      y: 200,
      ease: "power2.out",
      delay:.3
    });
    animationPlayed1 = true;
  }
});

// Next Animation of ( Features )

let animationPlayed2 = false;

const feature1 = document.getElementById("feature1");

feature1.style.opacity = '0';

window.addEventListener('scroll', function () {
  if (window.scrollY >= 1000 && !animationPlayed2) {
    feature1.style.opacity = '1';
    gsap.from("#feature1", {
      duration: 1,
      opacity: 0,
      y: 200,
      ease: "power2.out"
    });
    animationPlayed2 = true;
  }
});


// 2

let animationPlayed3 = false;

const feature2 = document.getElementById("feature2");

feature2.style.opacity = '0';

window.addEventListener('scroll', function () {
  if (window.scrollY >= 1000 && !animationPlayed3) {
    feature2.style.opacity = '1';
    gsap.from("#feature2", {
      duration: 1,
      opacity: 0,
      y: 200,
      ease: "power2.out",
      delay:.5
    });
    animationPlayed3 = true;
  }
});


// 3

let animationPlayed4 = false;

const feature3 = document.getElementById("feature3");

feature3.style.opacity = '0';

window.addEventListener('scroll', function () {
  if (window.scrollY >= 1000 && !animationPlayed4) {
    feature3.style.opacity = '1';
    gsap.from("#feature3", {
      duration: 1,
      opacity: 0,
      y: 200,
      ease: "power2.out",
      delay:1
    });
    animationPlayed4 = true;
  }
});


// 4


let animationPlayed5 = false;

const feature4 = document.getElementById("feature4");

feature4.style.opacity = '0';

window.addEventListener('scroll', function () {
  if (window.scrollY >= 1000 && !animationPlayed5) {
    feature4.style.opacity = '1';
    gsap.from("#feature4", {
      duration: 1,
      opacity: 0,
      y: 200,
      ease: "power2.out",
      delay:1.5
    });
    animationPlayed5 = true;
  }
});


// Features section ends here...


// how it works anim

let animationPlayed6 = false;

const howItWorks = document.getElementById("how-it-works");

howItWorks.style.opacity = '0';

window.addEventListener('scroll', function () {
  if (window.scrollY >= 1700 && !animationPlayed6) {
    howItWorks.style.opacity = '1';
    gsap.from("#how-it-works", {
      duration: 2,
      opacity: 0,
      y: 200,
      ease: "power2.out"
    });
    animationPlayed6 = true;
  }
});



// form script


const msgP = document.getElementById("form-inform");

const getBtn = document.getElementById("getBtn");


getBtn.onclick = function(){
  const name = document.getElementById("name").value;
  const email = document.getElementById('email').value;
  const age = document.getElementById("age").value;
  
  
  if(name.length <= 2 || name.length >= 16){
    msgP.textContent = 'Invalid Name';
    msgP.style.color = '#D02B2B'
  }
  
  else if(email.length <= 8){
    msgP.textContent = 'Invalid Email';
    msgP.style.color = '#D02B2B'
  }
  
  else if(age == ''){
    msgP.textContent = 'Type your age.';
  }
  
  else if(age <= 12){
    msgP.textContent = "Your age is too low! you can't register."
    msgP.style.color = '#D02B2B'
  }
  
  else if(age >= 100){
    msgP.textContent = "You are too old."
    msgP.style.color = '#D02B2B'
  } 
  else if(name != '' && email != '' && age != ''){
    msgP.textContent = 'You are now Registered. We will send future updates & releases of our Proton AI.';
    msgP.style.color = '#1CC01C'
  }
  
  
}


// next footer btn func


const hBtn = document.getElementById("hBtn");
const fBtn = document.getElementById("fBtn");
const hwBtn = document.getElementById("hwBtn");
const rBtn = document.getElementById("rBtn");


hBtn.onclick = function () {
  window.scrollTo({
    top:0,
    behavior: 'smooth'
  });
}

fBtn.onclick = function () {
  window.scrollTo({
    top:1500,
    behavior: 'smooth'
  });
}

hwBtn.onclick = function () {
  window.scrollTo({
    top:2400,
    behavior: 'smooth'
  });
}

rBtn.onclick = function () {
  window.scrollTo({
    top:900,
    behavior: 'smooth'
  });
}
