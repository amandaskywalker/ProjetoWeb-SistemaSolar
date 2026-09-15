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

function criarMiniQuiz() {
  const card = document.querySelector('.card-pagina');
  if (!card) return; 

  const perguntasAstro = {
    'Sol': 'O Sol é tão grande que caberia mais de 1 milhão de Terras dentro dele! ☀️',
    'Mercúrio': 'Apesar de ser o mais perto do Sol, Mercúrio não é o planeta mais quente do Sistema Solar! 🌡️',
    'Vênus': 'Vênus é o planeta mais quente de todos e gira no sentido oposto ao da Terra! 🌋',
    'Terra': 'A Terra é o único lugar conhecido no universo inteiro que tem vida e milkshake! 🌍',
    'Marte': 'Marte tem uma montanha três vezes mais alta que o Monte Everest! 🚀',
    'Júpiter': 'Júpiter é tão grande que tem uma tempestade gigante maior que a própria Terra! 🌀',
    'Saturno': 'Se existisse uma piscina gigante, Saturno boiaria na água de tão leve! 🪐',
    'Urano': 'Urano gira "deitado" de lado, como se estivesse rolando no espaço! ❄️',
    'Netuno': 'Em Netuno venta tão forte que os ventos vão mais rápido que um avião a jato! 💨'
  };

  const tituloPagina = card.querySelector('h1');
  const nomeAstro = tituloPagina ? tituloPagina.innerText.trim() : '';
  const segredoAstro = perguntasAstro[nomeAstro] || 'Você é um grande explorador do espaço! 🌟';

  const quizArea = document.createElement('div');
  quizArea.style.cssText = `
    margin-top: 25px;
    padding: 18px 20px;
    background: rgba(255, 255, 255, 0.06);
    border-radius: 16px;
    border: 2px dashed #38bdf8;
    max-width: 100%;
    box-sizing: border-box;
    text-align: center;
  `;

  quizArea.innerHTML = `
    <p style="margin-bottom: 10px; font-weight: bold; color: #38bdf8; font-size: 1.1rem;">
      🚀 Desafio do Astronauta
    </p>
    <p style="margin-bottom: 14px; font-size: 0.95rem; color: #e2e8f0;">
      Quer descobrir um segredo super divertido sobre este astro?
    </p>
    <button id="btn-revelar-quiz" style="
      background: #38bdf8;
      color: #050711;
      border: none;
      padding: 10px 20px;
      border-radius: 25px;
      font-weight: bold;
      font-size: 0.95rem;
      cursor: pointer;
      transition: transform 0.2s, background-color 0.2s;
    ">Revelar Segredo!</button>
    <p id="resposta-quiz" style="
      display: none; 
      margin-top: 12px; 
      color: #ffd166; 
      font-weight: bold; 
      font-size: 1rem;
      line-height: 1.4;
    "></p>
  `;

  card.appendChild(quizArea);

  const btn = document.getElementById('btn-revelar-quiz');
  const resposta = document.getElementById('resposta-quiz');

  btn.addEventListener('mouseenter', () => btn.style.transform = 'scale(1.05)');
  btn.addEventListener('mouseleave', () => btn.style.transform = 'scale(1)');

  btn.addEventListener('click', () => {
    resposta.innerText = segredoAstro;
    resposta.style.display = 'block';
    btn.style.display = 'none';
  });
}

document.addEventListener('DOMContentLoaded', criarMiniQuiz);