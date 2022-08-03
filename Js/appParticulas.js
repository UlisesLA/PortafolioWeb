particlesJS({
  particles: {
    number: {
      value: 200,
      density: {
        enable: true,
        value_area: 882,
      },
    },
    color: {
      value: "#115173",
    },
    shape: {
      type: "circle",
      stroke: {
        width: 0,
        color: "#000000",
      },
      polygon: {
        nb_sides: 9,
      },
      image: {
        src: "img/github.svg",
        width: 100,
        height: 100,
      },
    },
    opacity: {
      value: 1,
      random: true,
      anim: {
        enable: true,
        speed: 1.0,
        opacity_min: 0.1,
        sync: true,
      },
    },
    size: {
      value: 6.5,
      random: true,
      anim: {
        enable: false,
        speed: 50,
        size_min: 1,
        sync: false,
      },
    },
    line_linked: {
      enable: true,
      distance: 55,
      color: "#0D63A5",
      opacity: 0.25,
      width: 1,
    },
    move: {
      enable: true,
      speed: 0.75,
      direction: "none",
      random: true,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: {
        enable: false,
        rotateX: 1000,
        rotateY: 1200,
      },
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: true,
        mode: "bubble",
      },
      onclick: {
        enable: true,
        mode: "repulse",
      },
      resize: true,
    },
    modes: {
      grab: {
        distance: 400,
        line_linked: {
          opacity: 1,
        },
      },
      bubble: {
        distance: 250,
        size: 0,
        duration: 2,
        opacity: 0,
        speed: 3,
      },
      repulse: {
        distance: 400,
        duration: 0.4,
      },
      push: {
        particles_nb: 4,
      },
      remove: {
        particles_nb: 2,
      },
    },
  },
  retina_detect: true,
});
