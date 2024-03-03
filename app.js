// Sticky Navbar
let header = document.querySelector('header');
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    header.classList.toggle('shadow', window.scrollY > 0);
});

menu.onclick = () => {
    navbar.classList.toggle('active');
}
window.onscroll = () => {
    navbar.classList.remove('active');
}

// for contact form reset after send
window.onbeforeunload = () => {
    for(const form of document.getElementsByTagName('form')) {
      form.reset();
    }
}

// counter

// let counter = document.querySelector(".counter");
// let visitCount = localStorage.getItem("page_view");

// counter.addEventListener('click', function (){
//     counter.style.color = "red";    
// })

// Check if page_view entry is present
// if (visitCount) {
//     visitCount = Number(visitCount) + 1;
//     localStorage.setItem("page_view", visitCount);
//   } else {
//     visitCount = 1;
//     localStorage.setItem("page_view", 1);
//   }
//   counter.innerHTML = visitCount;
  
  // Adding onClick event listener
//   resetButton.addEventListener("click", () => {
//     visitCount = 1;
//     localStorage.setItem("page_view", 1);
//     counter.innerHTML = visitCount;
//   });


// change on "18/6/2023"
// const counter = document.querySelector('.count');

// // updateVisitCount();

// // function updateVisitCount() {
// // 	fetch('https://api.countapi.xyz/update/itsvijay/visitor-counter/?amount=1')
// // 	.then(res => res.json())
// // 	.then(res => {
// //     // console.log(res);
// //     counter.innerHTML = res.value;

// // 	})
// // }



// change year Accordingly in footer

const currentYear = new Date().getFullYear();
// console.log(currentYear);

const year = document.querySelector('#currentYear');
year.innerHTML = currentYear;