function criarMiniQuiz() {
  const card = document.querySelector('.card-pagina');
  if (!card) return;

  const tituloPagina = card.querySelector('h1');
  const nomeAstro = tituloPagina ? tituloPagina.innerText.trim() : '';
  const perguntas = perguntasPorAstro[nomeAstro];

  injetarEstilosQuiz();

  const quizArea = document.createElement('div');
  quizArea.className = 'quiz-area';

  if (!perguntas) {
    quizArea.innerHTML = `
      <p class="quiz-titulo">🚀 Desafio do Astronauta</p>
      <p class="quiz-generico">Você é um grande explorador do espaço! 🌟</p>
    `;
    card.appendChild(quizArea);
    return;
  }

  let indiceAtual = 0;
  let acertos = 0;

  quizArea.innerHTML = `
    <p class="quiz-titulo">🚀 Desafio do Astronauta</p>
    <p class="quiz-progresso"></p>
    <div class="quiz-corpo"></div>
  `;
  card.appendChild(quizArea);

  const progressoEl = quizArea.querySelector('.quiz-progresso');
  const corpoEl = quizArea.querySelector('.quiz-corpo');

  function renderPergunta() {
    const q = perguntas[indiceAtual];
    progressoEl.textContent = `Pergunta ${indiceAtual + 1} de ${perguntas.length}`;

    corpoEl.innerHTML = `
      <p class="quiz-pergunta">${q.pergunta}</p>
      <button type="button" class="quiz-btn-dica">💡 Mostrar dica</button>
      <p class="quiz-dica" hidden>${q.dica}</p>
      <div class="quiz-opcoes"></div>
      <p class="quiz-feedback" hidden></p>
      <button type="button" class="quiz-btn-proxima" hidden>Próxima pergunta</button>
    `;

    const btnDica = corpoEl.querySelector('.quiz-btn-dica');
    const dicaEl = corpoEl.querySelector('.quiz-dica');
    btnDica.addEventListener('click', () => {
      dicaEl.hidden = false;
      btnDica.hidden = true;
    });

    const opcoesEl = corpoEl.querySelector('.quiz-opcoes');
    q.opcoes.forEach((opcao, idx) => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'quiz-btn-opcao';
      btn.textContent = opcao;
      btn.addEventListener('click', () => responder(idx, btn));
      opcoesEl.appendChild(btn);
    });

    corpoEl.querySelector('.quiz-btn-proxima').addEventListener('click', () => {
      indiceAtual++;
      if (indiceAtual < perguntas.length) {
        renderPergunta();
      } else {
        mostrarResultado();
      }
    });
  }

  function responder(idxEscolhido, botaoClicado) {
    const q = perguntas[indiceAtual];

    corpoEl.querySelectorAll('.quiz-btn-opcao').forEach((b) => (b.disabled = true));
    corpoEl.querySelector('.quiz-btn-dica').hidden = true;

    const feedbackEl = corpoEl.querySelector('.quiz-feedback');
    const btnProxima = corpoEl.querySelector('.quiz-btn-proxima');
    const botoes = corpoEl.querySelectorAll('.quiz-btn-opcao');

    if (idxEscolhido === q.correta) {
      acertos++;
      botaoClicado.classList.add('quiz-opcao-correta');
      feedbackEl.innerHTML = `<strong>✅ Acertou!</strong> ${q.justificativa}`;
    } else {
      botaoClicado.classList.add('quiz-opcao-errada');
      botoes[q.correta].classList.add('quiz-opcao-correta');
      feedbackEl.innerHTML = `<strong>❌ Quase! A resposta certa era "${q.opcoes[q.correta]}".</strong> ${q.justificativa}`;
    }

    feedbackEl.hidden = false;
    btnProxima.hidden = false;
    btnProxima.textContent = indiceAtual < perguntas.length - 1 ? 'Próxima pergunta' : 'Ver resultado';
  }

  function mostrarResultado() {
    progressoEl.textContent = 'Desafio concluído!';
    const mensagem = acertos === perguntas.length
      ? 'Mandou muito bem, explorador! 🌟'
      : 'Continue explorando o espaço! 🚀';
    corpoEl.innerHTML = `<p class="quiz-resultado">Você acertou ${acertos} de ${perguntas.length} perguntas sobre ${nomeAstro}! ${mensagem}</p>`;
  }

  renderPergunta();
}

function injetarEstilosQuiz() {
  if (document.getElementById('quiz-estilos')) return;

  const style = document.createElement('style');
  style.id = 'quiz-estilos';
  style.textContent = `
    .quiz-area {
      margin-top: 25px;
      padding: 18px 20px;
      background: rgba(255, 255, 255, 0.06);
      border-radius: 16px;
      border: 2px dashed #38bdf8;
      max-width: 100%;
      box-sizing: border-box;
      text-align: center;
    }
    .quiz-titulo {
      margin-bottom: 6px;
      font-weight: bold;
      color: #38bdf8;
      font-size: 1.1rem;
    }
    .quiz-progresso {
      margin-bottom: 14px;
      font-size: 0.85rem;
      color: #94a3b8;
    }
    .quiz-generico {
      color: #ffd166;
      font-weight: bold;
    }
    .quiz-pergunta {
      margin-bottom: 12px;
      font-size: 1rem;
      color: #e2e8f0;
    }
    .quiz-btn-dica {
      background: transparent;
      color: #38bdf8;
      border: 1px solid #38bdf8;
      padding: 6px 14px;
      border-radius: 20px;
      font-size: 0.85rem;
      cursor: pointer;
      margin-bottom: 10px;
    }
    .quiz-dica {
      margin-bottom: 12px;
      font-size: 0.9rem;
      color: #94a3b8;
      font-style: italic;
    }
    .quiz-opcoes {
      display: flex;
      flex-direction: column;
      gap: 8px;
      margin-bottom: 12px;
    }
    .quiz-btn-opcao {
      background: rgba(255, 255, 255, 0.08);
      color: #e2e8f0;
      border: 1px solid rgba(255, 255, 255, 0.2);
      padding: 10px 16px;
      border-radius: 12px;
      font-size: 0.95rem;
      cursor: pointer;
      transition: background-color 0.2s, transform 0.2s;
      text-align: left;
    }
    .quiz-btn-opcao:hover:not(:disabled) {
      background: rgba(56, 189, 248, 0.15);
      transform: scale(1.01);
    }
    .quiz-btn-opcao:disabled {
      cursor: default;
    }
    .quiz-opcao-correta {
      background: rgba(34, 197, 94, 0.25) !important;
      border-color: #22c55e !important;
    }
    .quiz-opcao-errada {
      background: rgba(239, 68, 68, 0.25) !important;
      border-color: #ef4444 !important;
    }
    .quiz-feedback {
      margin-bottom: 14px;
      font-size: 0.9rem;
      line-height: 1.4;
      color: #ffd166;
      text-align: left;
    }
    .quiz-btn-proxima {
      background: #38bdf8;
      color: #050711;
      border: none;
      padding: 10px 20px;
      border-radius: 25px;
      font-weight: bold;
      font-size: 0.95rem;
      cursor: pointer;
    }
    .quiz-resultado {
      color: #ffd166;
      font-weight: bold;
      font-size: 1rem;
      line-height: 1.4;
    }
  `;
  document.head.appendChild(style);
}

document.addEventListener('DOMContentLoaded', criarMiniQuiz);