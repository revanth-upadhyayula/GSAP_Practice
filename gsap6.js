//~ GSAP ScrollTrigger
var tl = gsap.timeline();
//~ Team Section Text Animation
tl.to("#page2 h1", {
    transform: "translateX(-48%)",
    scale: 1,
    duration: 2,
    delay:1,
    scrollTrigger: {
        trigger: "#page2",
        scroller: "body",
        start: "top top", // Start when #page2 hits the top of the viewport
        end: "bottom -100%", // End when #page2’s bottom hits the top of the viewport
        scrub: 2,
        pin: true
        // markers: true
    }
});

// Initialize Particles.js for #page1
particlesJS("particles-js", {
    particles: {
      number: {
        value: 100, // Number of particles
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
        value: 1.25,
        random: true,
      },
      line_linked: {
        enable: false, // No lines between particles
      },
      move: {
        enable: true,
        speed: 0.5, // Slow movement for a subtle effect
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