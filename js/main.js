const cards = document.querySelectorAll('.card');
const width = window.innerWidth;
const height = window.innerHeight;

cards.forEach(card => {
  card.addEventListener('mousemove', (e) => {

    if (card.classList.contains('is_clicked')) return;

    const rect = card.getBoundingClientRect();

    // Getting the proportion of distance across a card
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;

    // Turning it into a percentage
    const posx = Math.round(x * 100);
    const posy = Math.round(y * 100);

    // Tilt degrees (capped at ±15deg)
    const rotateY = (x - 0.5) * 30;
    const rotateX = (y - 0.5) * 30;

    // Hypotenuse — distance from center, used for brightness
    const hyp = Math.sqrt(
      Math.pow(x - 0.5, 2) + Math.pow(y - 0.5, 2)
    );

    card.style.setProperty('--posx', `${posx}%`);
    card.style.setProperty('--posy', `${posy}%`);
    card.style.setProperty('--mx', `${posx}%`);
    card.style.setProperty('--my', `${posy}%`);
    card.style.setProperty('--hyp', hyp);

    card.style.transform = `perspective(600px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  });

  card.addEventListener('mouseleave', () => {
  if (card.classList.contains('is_clicked')) return;
    // Reset everything smoothly
    card.style.transform = 'perspective(600px) rotateX(0deg) rotateY(0deg)';
    card.style.setProperty('--posx', '50%');
    card.style.setProperty('--posy', '50%');
    card.style.setProperty('--mx', '50%');
    card.style.setProperty('--my', '50%');
    card.style.setProperty('--hyp', '0');
  });


  card.addEventListener('click', () => {
    const rect = card.getBoundingClientRect();
    const centerX = width / 2 - (rect.left + rect.width / 2);
    const centerY = height / 2 - (rect.top + rect.height / 2);


    if (card.classList.toggle('is_clicked')) {
      card.style.transform = `translate(${centerX}px, ${centerY}px) scale(2)`;
    } else {
      card.style.transform = '';
    }

  })
});