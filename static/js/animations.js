const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.prose section > *, .prose h2, .callout-box')
  .forEach(el => {
    el.classList.add('animate-on-scroll');
    observer.observe(el);
  });