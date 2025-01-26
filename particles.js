  particlesJS("particles-js", {
    "particles": {
      "number": {
        "value": 50, /* Number of particles */
        "density": {
          "enable": true,
          "value_area": 800 /* Particle density */
        }
      },
      "color": {
        "value": "#ffffff" /* Line color */
      },
      "shape": {
        "type": "line",
        "stroke": {
          "width": 1,
          "color": "#ffffff"
        }
      },
      "opacity": {
        "value": 0.5,
        "random": false
      },
      "size": {
        "value": 2,
        "random": true
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#ffffff",
        "opacity": 0.6,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 3, /* Speed of movement */
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "bounce",
        "attract": {
          "enable": false
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "grab" /* Interaction mode */
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 200,
          "line_linked": {
            "opacity": 0.7
          }
        },
        "push": {
          "particles_nb": 4
        }
      }
    },
    "retina_detect": true
  });
