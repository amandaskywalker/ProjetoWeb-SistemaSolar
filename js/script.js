const canvas = document.getElementById('espaco'); // busca o canvas do html
if (canvas) {
  const ctx = canvas.getContext('2d'); // O getContext('2d') devolve um objeto com métodos para desenhar
  let w = (canvas.width = window.innerWidth); // define largura de acordo com a janela
  let h = (canvas.height = window.innerHeight); // define altura de acordo com a janela

  window.addEventListener('resize', () => { // redimensiona quando a janela muda
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
  });

  const estrelas = Array.from({ length: 100 }, () => ({ // cria as estrelas, um array com 100 objetos.
    x: Math.random() * w, // Posição horizontal.
    y: Math.random() * h, // Posição vertical.
    r: Math.random() * 1.6 + 0.4, // Raio da estrela.
    alpha: Math.random(), // Transparência inicial.
    vel: Math.random() * 0.02 + 0.005, // Velocidade do brilho.
  }));

  let meteoro = null; // Inicialmente não existe meteoro.

  function animar() {
    ctx.clearRect(0, 0, w, h); // Apaga tudo que foi desenhado anteriormente. pras estrelas nao deixarem rastro

    for (const e of estrelas) { // Percorre cada objeto do array.
      e.alpha += e.vel; // Aumenta a transparência.
      if (e.alpha > 1 || e.alpha < 0.1) e.vel = -e.vel; // fazendo a estrela piscar, quando fica muito brilhante inverte a velocidade e escurece; e vice versa
      ctx.fillStyle = `rgba(255, 255, 255, ${Math.abs(e.alpha)})`;  // cor branca
      ctx.beginPath(); // começando o desenho
      ctx.arc(e.x, e.y, e.r, 0, Math.PI * 2); // desenhando a estrela
      ctx.fill(); // Preenche o círculo.
    }

    if (!meteoro && Math.random() < 0.008) { // n existe meteoro, e a probabilidade dele existir é 0.008
      meteoro = {
        x: Math.random() * w, // posição inicial, Qualquer ponto da largura.
        y: Math.random() * (h / 2), // Apenas metade superior da tela.
        len: Math.random() * 50 + 35,
        speed: Math.random() * 6 + 6,
        life: 1,
      };
    }

    if (meteoro) {
      ctx.strokeStyle = `rgba(255, 255, 255, ${meteoro.life})`; // A opacidade depende da vida.
      ctx.lineWidth = 1.5; // Linha de 1.5 px.
      ctx.beginPath(); // inicio da linha
      ctx.moveTo(meteoro.x, meteoro.y); 
      ctx.lineTo(meteoro.x - meteoro.len, meteoro.y + meteoro.len * 0.5); // Forma a cauda inclinada.
      ctx.stroke(); // desenha a linha

      meteoro.x += meteoro.speed; // Vai para a direita.
      meteoro.y += meteoro.speed * 0.5; // Vai para baixo.
      meteoro.life -= 0.025; // desaparece
      if (meteoro.life <= 0) meteoro = null; // quando a vida acaba... ele tambem acaba ):
    }

    requestAnimationFrame(animar); // loop infinito 
  }

  animar(); // inicia animação
}

const progresso = document.getElementById('progresso'); // barra de progresso
const btnTopo = document.getElementById('btn-topo'); // botao voltar ao topo

window.addEventListener('scroll', () => { // Executa sempre que a página rola.
  if (progresso) {
    const total = document.documentElement.scrollHeight - window.innerHeight; // Calculando o total rolável
    const atual = (window.scrollY / (total || 1)) * 100; // Calculando a porcentagem
    progresso.style.width = `${atual}%`; // Atualizando a barra, A barra cresce conforme o usuário desce.
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
