//

//redirect
window.location = "johanneseppler.github.io/me"

// Particles effect

window.onload = function() {
  Particles.init({

    // normal options
    selector: '#background',
    maxParticles: 300,
    speed: 0.5,
    color: [
      '#2ba654', // primary
      '#46b469',
      '#5ec17d',
      '#74cf92',
      '#8adda6',
      '#ef9a2f' // orange
    ],
    minDistance: 80,
    sizeVariations: 4,
    connectParticles: true,

    // options for breakpoints
    responsive: [
      {
        breakpoint: 992,
        options: {
          maxParticles: 200,
          color: [
            '#2ba654', // primary
            '#5ec17d',
            '#8adda6',
            '#ef9a2f' // orange
          ],
          minDistance: 50,
          sizeVariations: 3,
          connectParticles: true,
        }
      }, {
        breakpoint: 768,
        options: {
          maxParticles: 75,
          color: '#368751',
          minDistance: 30,
          connectParticles: true
        }
      }, {
        breakpoint: 425,
        options: {
          maxParticles: 33 // disables particles.js
        }
      }, {
        breakpoint: 320,
        options: {
          maxParticles: 0 // disables particles.js
        }
      }
    ]
  });
};
