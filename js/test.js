document.querySelectorAll('.text-container').forEach(container => {
  const text = container.querySelector('.text');
  const video = container.querySelector('.video');

  container.addEventListener('mouseenter', () => {
    gsap.to(text, { opacity: 0, duration: 0.5, onComplete: () => {
      text.style.display = 'none';
      video.style.display = 'block';
      video.play();
    }});
  });

  container.addEventListener('mouseleave', () => {
    gsap.to(text, { opacity: 1, duration: 0.5, onStart: () => {
      text.style.display = 'block';
      video.pause();
      video.style.display = 'none';
    }});
  });
});
