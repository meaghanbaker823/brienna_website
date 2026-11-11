import { tsParticles } from "@tsparticles/engine";
import { loadFull } from "tsparticles";

await loadFull(tsParticles);

await tsParticles.load({
  id: "tsparticles",
  options: {
    background: {
      opacity: 0,
    },
    particles: {
      number: {
        value: 120,
        density: {
          enable: true,
        },
      },
      color: {
        // Mix pure white with soft gold and ice-blue tints
        value: ["#ffffff", "#fff4b8", "#d4f1ff"],
      },
      shape: {
        type: "star",
        options: {
          star: {
            sides: 4, // Creates a classic 4-point sparkle shape
            inset: 2, // Sharpens the inner corners for a sleeker glint
          },
        },
      },
      opacity: {
        value: { min: 0.1, max: 1 },
        animation: {
          enable: true,
          speed: 1.5,
          sync: false, // Prevents all particles from fading together
        },
      },
      size: {
        value: { min: 1, max: 4 },
        animation: {
          enable: true,
          speed: 2,
          sync: false,
        },
      },
      twinkle: {
        particles: {
          enable: true,
          frequency: 0.05, // Controls how often a sudden bright flash occurs
          opacity: 1,
          color: {
            value: "#ffffff",
          },
        },
      },
      move: {
        enable: true,
        speed: 0.4, // Slow, gentle floating motion
        direction: "none",
        random: true,
        outModes: {
          default: "out",
        },
      },
    },
    detectRetina: true,
  },
});


// For the view more/view less for on the stage and off the stage
document.addEventListener('click', (event) => {
  // Click the view more button
  if (event.target && event.target.id.endsWith('-b')) {
    const hiddenId = `${event.target.id.slice(0, -2)}-c`;
    const hidden = document.getElementById(hiddenId);

    if (hidden) {
      event.target.style.display = 'none';
      hidden.style.display = 'flex';
    }
  }
  // Click the show less button
  if (event.target && event.target.id.endsWith('-a')) {
    const base = event.target.id.slice(0, -2);
    const hidden = document.getElementById(`${base}-c`);
    const moreButton = document.getElementById(`${base}-b`);

    if (hidden && moreButton) {
      hidden.style.display = 'none';
      moreButton.style.display = 'flex';
    }
  }
});
