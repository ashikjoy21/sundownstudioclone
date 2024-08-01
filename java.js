
const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});


var elemC = document.querySelector("#elem-container")
var fixed = document.querySelector("#fixed-image")
elemC.addEventListener("mouseenter", function () {
    fixed.style.display = "block"
})
elemC.addEventListener("mouseleave", function () {
    fixed.style.display = "none"
})

var elems=document.querySelectorAll(".cont")
elems.forEach(function(e){
    e.addEventListener("mouseenter",function(){
  var image = e.getAttribute("data-image")
  console.log(image)
   fixed.style.backgroundImage = `url(${image})`
    })
})

// var im= document.querySelectorall(".maincontainer .right img")
// var sel=document.querySelectorall(".maincontainer .left .title h1")
// sel.forEach(function(i){
//     i.addEventListener("mouseenter",function(){
 
//     })
// })

// document.getElementById('design').addEventListener('click', function() {
//     document.getElementsByClassName('design').classList.remove('hidden');
//     document.getElementsByClassName('project').classList.add('hidden');
//     document.getElementsByClassName('execution').classList.add('hidden');
// });

// document.getElementById('project').addEventListener('click', function() {
//     document.getElementsByClassName('design').classList.add('hidden');
//     document.getElementsByClassName('project').classList.remove('hidden');
//     document.getElementsByClassName('execution').classList.add('hidden');
// });

// document.getElementById('executionTrigger').addEventListener('click', function() {
//     document.getElementsByClassName('design').classList.add('hidden');
//     document.getElementsByClassName('project').classList.add('hidden');
//     document.getElementsByClassName('execution').classList.remove('hidden');
// });

function showSection(section) {
    const sections = ['design', 'project', 'execution'];
    sections.forEach(sec => {
        const elements = document.getElementsByClassName(sec);
        for (let i = 0; i < elements.length; i++) {
            elements[i].style.display = "none";
        }
    });
    const activeElements = document.getElementsByClassName(section);
    for (let i = 0; i < activeElements.length; i++) {
        activeElements[i].style.display = "block";
        document.getElementById(section).style.color="white"
    }
}

document.getElementById('design').addEventListener('click', function() {
    showSection('design');
});

document.getElementById('project').addEventListener('click', function() {
    showSection('project');
});

document.getElementById('execution').addEventListener('click', function() {
    showSection('execution');
});


var swiper = new Swiper(".mySwiper", {
  slidesPerView: "auto",
  centeredSlides: true,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});


var loader = document.querySelector("#loader")
setTimeout(function () {
    loader.style.top = "-100%"
}, 4200)