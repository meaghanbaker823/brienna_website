import { tsParticles } from '@tsparticles/engine';
import { loadSlim } from '@tsparticles/slim';

(async () => {
  // 1. Register the slim bundle features
  await loadSlim(tsParticles);

  // 2. Load the particle configuration into your container ID
  await tsParticles.load({
    id: 'tsparticles',
    options: {
      background: {
        color: {
          value: '#0b1020',
        },
      },
      particles: {
        number: {
          value: 80,
        },
        color: {
          value: '#ffffff',
        },
        links: {
          enable: true,
          distance: 150,
          color: '#ffffff',
          opacity: 0.4,
          width: 1,
        },
        move: {
          enable: true,
          speed: 2,
        },
        size: {
          value: { min: 1, max: 3 },
        },
      },
    },
  });
})();

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
