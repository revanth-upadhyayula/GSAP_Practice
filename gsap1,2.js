//~ GSAP
// gsap.to("#box1",{
//     x: 1000,
//     duration: 2,
//     delay: 1,
// })
// gsap.to("#box2",{
//     x: 1000,
//     duration: 2,
//     delay: 3,
// })
// gsap.to("#box3",{
//     x: 1000,
//     duration: 2,
//     delay: 5,
// })
//^ Timeline
// var tl = gsap.timeline();

// tl.to("#box1",{
//     x: 1000,
//     duration: 2,
//     delay: 1,
//     repeat:-1,
//     yoyo: true
// })
// tl.to("#box2",{
//     x: 1000,
//     duration: 2,
//     repeat:-1,
//     yoyo: true
// })
// tl.to("#box3",{
//     x: 1000,
//     duration: 2,
//     delay: 1,
//     repeat:-1,
//     yoyo: true
// })

//* Navbar
// var tl = gsap.timeline();

// tl.from("h2",{
//     y:-100,
//     opacity:0,
//     duration:1,
//     delay: 0.5
// })
// tl.from("h4",{
//     y:-100,
//     opacity:0,
//     stagger:0.1
// })
// tl.from("h1",{
//     scale:0,
//     opacity:0,
//     duration:1
// })

//? scrollTrigger
var tl = gsap.timeline();
tl.to("#page0 img",{
    scale: 18,
    delay: 20,
    ease: 2000,
    scrollTrigger: {
        trigger: "#page0",
        scroller:"body",
        start: "top 0%",
        end: "bottom 60%",
        scrub: true,
        markers: true,
        pin: true
    }
})
tl.from("#page1", {
    opacity: 0
}, "-=1"); // Syncs with the image scaling

// Once scaling is done, make #page1 normal again
tl.to("#page1", {
    opacity: 1,
    onComplete: () => {
        document.getElementById("page1").classList.add("normal-scroll");
    }
});
