const canvas = document.getElementById('espaco');
if (canvas) {
  const ctx = canvas.getContext('2d');
  let w = (canvas.width = window.innerWidth);
  let h = (canvas.height = window.innerHeight);

  window.addEventListener('resize', () => {
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
  });

  const estrelas = Array.from({ length: 100 }, () => ({
    x: Math.random() * w,
    y: Math.random() * h,
    r: Math.random() * 1.6 + 0.4,
    alpha: Math.random(),
    vel: Math.random() * 0.02 + 0.005,
  }));

  let meteoro = null;

  function animar() {
    ctx.clearRect(0, 0, w, h);

    for (const e of estrelas) {
      e.alpha += e.vel;
      if (e.alpha > 1 || e.alpha < 0.1) e.vel = -e.vel;
      ctx.fillStyle = `rgba(255, 255, 255, ${Math.abs(e.alpha)})`;
      ctx.beginPath();
      ctx.arc(e.x, e.y, e.r, 0, Math.PI * 2);
      ctx.fill();
    }

    if (!meteoro && Math.random() < 0.008) {
      meteoro = {
        x: Math.random() * w,
        y: Math.random() * (h / 2),
        len: Math.random() * 50 + 35,
        speed: Math.random() * 6 + 6,
        life: 1,
      };
    }

    if (meteoro) {
      ctx.strokeStyle = `rgba(255, 255, 255, ${meteoro.life})`;
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.moveTo(meteoro.x, meteoro.y);
      ctx.lineTo(meteoro.x - meteoro.len, meteoro.y + meteoro.len * 0.5);
      ctx.stroke();

      meteoro.x += meteoro.speed;
      meteoro.y += meteoro.speed * 0.5;
      meteoro.life -= 0.025;
      if (meteoro.life <= 0) meteoro = null;
    }

    requestAnimationFrame(animar);
  }

  animar();
}

const progresso = document.getElementById('progresso');
const btnTopo = document.getElementById('btn-topo');

window.addEventListener('scroll', () => {
  if (progresso) {
    const total = document.documentElement.scrollHeight - window.innerHeight;
    const atual = (window.scrollY / (total || 1)) * 100;
    progresso.style.width = `${atual}%`;
  }
  if (btnTopo) {
    btnTopo.style.display = window.scrollY > 250 ? 'block' : 'none';
  }
});

if (btnTopo) {
  btnTopo.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}