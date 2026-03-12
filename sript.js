

  // Cursor
  const cur = document.getElementById('cur');
  const ring = document.getElementById('cur-ring');
  let mx=0, my=0, rx=0, ry=0;
  document.addEventListener('mousemove', e => { mx=e.clientX; my=e.clientY; });
  (function loop(){
    rx += (mx-rx)*0.15; ry += (my-ry)*0.15;
    cur.style.transform  = `translate(calc(${mx}px - 50%), calc(${my}px - 50%))`;
    ring.style.transform = `translate(calc(${rx}px - 50%), calc(${ry}px - 50%))`;
    requestAnimationFrame(loop);
  })();
  document.querySelectorAll('a, button').forEach(el => {
    el.addEventListener('mouseenter', () => { ring.style.width='52px'; ring.style.height='52px'; ring.style.opacity='.9'; });
    el.addEventListener('mouseleave', () => { ring.style.width='36px'; ring.style.height='36px'; ring.style.opacity='.6'; });
  });

  // Sticky nav
  const nav = document.getElementById('nav');
  window.addEventListener('scroll', () => nav.classList.toggle('stuck', scrollY > 60));

  // Scroll reveal
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => { if(e.isIntersecting) e.target.classList.add('on'); });
  }, { threshold: 0.1 });
  document.querySelectorAll('.reveal').forEach(el => obs.observe(el));

  // Typewriter on hero italic name
  const italic = document.querySelector('.italic-line');
  const full = italic.textContent;
  italic.textContent = '';
  let idx = 0;
  setTimeout(function type(){
    if(idx < full.length){ italic.textContent += full[idx++]; setTimeout(type, 90); }
  }, 600);
