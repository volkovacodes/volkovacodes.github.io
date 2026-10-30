// Sprinkle silver sparkles over each .award-highlight element.
// Use horizontal bands so sparkles span the full text (incl. start).
document.addEventListener('DOMContentLoaded', () => {
  const glyphs = ['✦', '✧', '⋆', '✩'];
  document.querySelectorAll('.award-highlight').forEach(el => {
    const count = 3 + Math.floor(Math.random() * 2); // 3–4
    for (let i = 0; i < count; i++) {
      const s = document.createElement('span');
      s.className = 'award-sparkle';
      s.textContent = glyphs[Math.floor(Math.random() * glyphs.length)];
      const bandStart = (i / count) * 100;
      const bandSize = 100 / count;
      s.style.left = (bandStart + Math.random() * bandSize) + '%';
      s.style.top = (Math.random() * 130 - 30) + '%';
      s.style.fontSize = (0.55 + Math.random() * 0.5).toFixed(2) + 'em';
      s.style.animationDelay = (Math.random() * 2.4).toFixed(2) + 's';
      s.style.animationDuration = (1.8 + Math.random() * 1.6).toFixed(2) + 's';
      el.appendChild(s);
    }
  });
});
