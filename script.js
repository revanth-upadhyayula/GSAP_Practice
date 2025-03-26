// //~ GSAP ScrollTrigger
var tl = gsap.timeline();
tl.from("#fuzzy-ensemble .card", {
    y:100,
    opacity:0,
    scale: 1,
    duration: 0.5,
    stagger: 0.8,
    ease: "expo.out",
    scrollTrigger: {
        trigger: "#page2",
        scroller: "body",
        start: "top top", // Start when #page2 hits the top of the viewport
        end: "bottom -100%", // End when #page2’s bottom hits the top of the viewport
        scrub: 1,
        pin: true,
        markers: true
    }
});

tl.from(".step", {
  x: -100, // Move from left
  opacity: 0,
  duration: 1,
  stagger: 1,
  ease: "power2.out",
  scrollTrigger: {
      trigger: "#page3",
      scroller: "body",
      start: "top top",
      end: "bottom 20%",
      scrub: 1,
      pin:true
  }
});


// Initialize Particles.js for #page1
particlesJS("particles-js", {
    particles: {
      number: {
        value: 40, // Number of particles
        density: {
          enable: true,
          value_area: 800,
        },
      },
      color: {
        value: "#ffffff", // Blue particles to match the theme
      },
      shape: {
        type: "circle",
      },
      opacity: {
        value: 0.5,
        random: true,
      },
      size: {
        value: 1,
        random: true,
      },
      line_linked: {
        enable: false, // No lines between particles
      },
      move: {
        enable: true,
        speed: 0.35, // Slow movement for a subtle effect
        direction: "none",
        random: true,
        straight: false,
        out_mode: "out",
        bounce: false,
      },
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: {
          enable: true,
          mode: "repulse", // Particles move away on hover
        },
        onclick: {
          enable: true,
          mode: "push", // Add particles on click
        },
        resize: true,
      },
      modes: {
        repulse: {
          distance: 100,
          duration: 0.4,
        },
        push: {
          particles_nb: 4,
        },
      },
    },
    retina_detect: true,
  });