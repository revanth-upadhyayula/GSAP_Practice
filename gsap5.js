var menu = document.querySelector("#nav i")
var cross = document.querySelector("#part2 i")

var tl = gsap.timeline();

tl.to("#part2",{
    right:0,
    duration: 1,
    delay: 0.5,
    ease: "power3.out"
})

tl.from("h4",{
    opacity:0,
    x: 50,
    duration: 0.4,
    stagger: 0.2
})

tl.pause()

menu.addEventListener("click",function(){
    tl.play()
})
cross.addEventListener("click",function(){
    tl.reverse()
})


//~ GSAP ScrollTrigger
// var tl = gsap.timeline();
// //~ Team Section Text Animation
// tl.to("#page2 h1", {
//     transform: "translateX(-60%)",
//     scale: 1,
//     duration: 2,
//     delay:1,
//     scrollTrigger: {
//         trigger: "#page2",
//         scroller: "body",
//         start: "top top", // Start when #page2 hits the top of the viewport
//         end: "bottom -100%", // End when #page2’s bottom hits the top of the viewport
//         scrub: 2,
//         pin: true,
//         markers: true
//     }
// });