let particles = null;

function initParticles(number, colors) {
  particles = particlesJS('particles-js', {
    "particles": {
      "number": {
        "value": number,
        "density": {
          "enable": true,
          "value_area": 500
        }
      },
      "color": {
        "value": colors
      },
      "shape": {
        "type": "edge",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 0
        }
      },
      "size": {
        "value": 2,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 4,
          "size_min": 1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": false
      },
      "move": {
        "enable": true,
        "speed": 2,
        "direction": "top",
        "random": true,
        "straight": true,
        "out_mode": "out",
        "bounce": false,
        "attract": {
          "enable": false,
          // "rotateX": 600,
          // "rotateY": 600
        }
      }
    },
    "retina_detect": true,
    "interactivity": {
      "events": {
        "onhover": {
          "enable": false
        }
      }
    },
    // "interactivity": {
    //   "detect_on": "canvas",
    //   "events": {
    //     "onhover": {
    //       "enable": false,
    //       "mode": "bubble"
    //     },
    //     "onclick": {
    //       "enable": true,
    //       "mode": "repulse"
    //     },
    //     "resize": true
    //   },
    //   "modes": {
    //     "grab": {
    //       "distance": 400,
    //       "line_linked": {
    //         "opacity": 1
    //       }
    //     },
    //     "bubble": {
    //       "distance": 250,
    //       "size": 0,
    //       "duration": 2,
    //       "opacity": 0,
    //       "speed": 3
    //     },
    //     "repulse": {
    //       "distance": 400,particles
    //       "duration": 0.4
    //     },
    //     "push": {
    //       "particles_nb": 4
    //     },
    //     "remove": {
    //       "particles_nb": 2
    //     }
    //   }
    // }
  });
}

document.addEventListener("DOMContentLoaded", function () {
  initParticles(100, ["#ffffff", "#DC143C"]);
}, false);
