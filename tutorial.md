# Projeto Odisseia Solar

## Grupo:
Amanda Massari - 10374292 <br>
Nícolas Takehara - 10771443 <br>
Isabelle Franco - 10425395 <br>
Paulo Zorzin Gerin - 10771431

## Ideação:
O projeto "Odisseia Solar" foi idealizado com o intento de auxiliar no processo educacional brasileiro de crianças entre 4 a 6 anos, tornando as aulas de ciência e astronomia mais dinâmicas e convidativas para alunos que, do contrário, não teriam acesso a tais materiais ou que necessitem de maior estímulo para aprender sobre o Sistema Solar.
O protótipo (imagem abaixo), é pensado para ser simples e responsivo, com uma interface única e lúdica que leva a criança numa grande jornada, tornando a experiência maior do que uma aula escolar.

## Protótipo:
<br>
<img width="935" height="829" alt="image" src="https://github.com/user-attachments/assets/27b7ea66-c838-461a-9d28-cedabe015ce8" />

---

## Estrutura básica

### Dentro do `<head>`

```html
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Sistema Solar</title>
<link rel="stylesheet" href="planets.css">
```

- `<meta charset="UTF-8">`: garante que acentos e caracteres especiais da língua portuguesa apareçam corretamente em todos os navegadores.
- `<meta name="viewport" content="width=device-width, initial-scale=1.0">`: garante a responsividade total da página, adaptando o layout para celulares, tablets e computadores desktop.
- `<title>`: define o título informativo exibido na aba do navegador.
- `<link rel="stylesheet" href="planets.css">`: conecta o documento à folha de estilos central do projeto.

---

### Elementos Globais de Interface e Navegação Espacial

No início do `<body>`, tanto a página principal quanto as páginas dos astros contam com componentes visuais de suporte:

```html
<canvas id="espaco"></canvas>
<section id="progresso"></section>
<button id="btn-topo" aria-label="Voltar ao topo">↑ Topo</button>
```

- `<canvas id="espaco">`: tela de renderização gráfica em segundo plano onde um script gera centenas de estrelas dinâmicas e cintilantes pelo cosmos.
- `<section id="progresso">`: barra de progresso fixada no topo da tela que preenche visualmente uma linha gradiente conforme o usuário viaja para as profundezas do Sistema Solar.
- `<button id="btn-topo">`: botão flutuante acessível que surge automaticamente após o início da rolagem, permitindo voltar suavemente ao topo da jornada.

---

### Página Principal (`index.html`)

A página principal utiliza marcações semânticas do HTML5 para estruturar a jornada pelos corpos celestes em ordem de distância em relação ao Sol:

```html
<header>
  <h1>Sistema Solar</h1>
  <p>Role a página para baixo para ver o Sol e os planetas em ordem.</p>
</header>

<main>
  <!-- 1. O Sol com sua esfera central translúcida -->
  <section class="item">
    <a href="sol.html" class="planeta sol" aria-label="Sol">
      <span class="esfera-solar"></span>
    </a>
    <h2>Sol</h2>
    <p>Estrela Central</p>
  </section>

  <!-- Planetas Rochosos e suas luas (Mercúrio, Vênus, Terra e Marte) -->
  <section class="item">
    <a href="terra.html" class="planeta terra" aria-label="Terra">
      <span class="lua" title="Lua"></span>
    </a>
    <h2>3. Terra</h2>
    <p>149,6 milhões de km do Sol • 1 Lua</p>
  </section>

  <!-- Cinturão Principal de Asteroides entre Marte e Júpiter -->
  <section class="item item-cinturao">
    <section class="faixa-asteroides" aria-label="Cinturão de Asteroides">
      <span class="faixa-nevoa-orbital"></span>
      <span class="faixa-linha-guia"></span>
      <span class="enxame-constelacao-1"></span>
      <span class="enxame-constelacao-2"></span>
      <span class="enxame-constelacao-3"></span>
      <span class="rocha r-1"></span>
      <!-- Dezenas de microrrochas e poeira estelar... -->
    </section>
    <h2>Cinturão Principal de Asteroides</h2>
    <p>329 a 478 milhões de km do Sol • Faixa de detritos rochosos e planetesimais entre as órbitas de Marte e Júpiter</p>
  </section>

  <!-- Gigantes Gasosos com Luas e Anéis em 3D -->
  <section class="item">
    <a href="saturno.html" class="planeta saturno" aria-label="Saturno">
      <span class="anel-saturno-tras"></span>
      <span class="corpo-saturno"></span>
      <span class="anel-saturno-frente"></span>
      <span class="lua-tita" title="Titã"></span>
      <span class="lua-encelado" title="Encélado"></span>
      <span class="lua-mimas" title="Mimas"></span>
    </a>
    <h2>6. Saturno</h2>
    <p>1,43 bilhão de km do Sol • Luas Notáveis (Titã, Encélado, Mimas)</p>
  </section>
</main>
```

- `<header>`: exibe o título principal do projeto e as instruções lúdicas de navegação.
- `<main>`: agrupa todos os corpos celestes ao longo do percurso cósmico vertical.
- `<section class="item">`: contêiner vertical com espaçamento generoso para que cada planeta ocupe seu próprio momento de foco na tela.
- `<a href="..." class="planeta ...">`: elemento circular estilizado como link interativo que conduz à página individual do planeta.
- `<span class="esfera-solar">`: elemento semitransparente posicionado no coração do Sol para simbolizar o astro esférico em meio às auras luminosas.
- `<span class="lua-...">`: satélites naturais integrados diretamente à órbita de cada planeta (Terra, Marte, Júpiter, Saturno, Urano e Netuno).
- `<section class="faixa-asteroides">`: representação horizontal contínua do Cinturão Principal de Asteroides entre Marte e Júpiter, composto por névoa difusa, enxames densos de estrelas e microrrochas.
- `.anel-...-tras`, `.corpo-...` e `.anel-...-frente`: sistema de três camadas para Saturno e Urano que permite que os anéis abracem o planeta em 3D, passando por trás e pela frente do globo.

---

### Páginas Individuais dos Planetas (ex: `saturno.html`, `jupiter.html`)

```html
<section class="card-pagina">
  <section class="planeta saturno">
    <span class="anel-saturno-tras"></span>
    <span class="corpo-saturno"></span>
    <span class="anel-saturno-frente"></span>
    <span class="lua-tita" title="Titã"></span>
    <span class="lua-encelado" title="Encélado"></span>
    <span class="lua-mimas" title="Mimas"></span>
  </section>
  <h1>Saturno</h1>
  <p>O segundo maior planeta do Sistema Solar é um gigante gasoso conhecido mundialmente pelo mais deslumbrante sistema de anéis e mais de 140 luas catalogadas.</p>
  
  <h3>Luas Fascinantes de Saturno</h3>
  <ul>
    <li><strong>Titã:</strong> A segunda maior lua do Sistema Solar, a única com atmosfera densa rica em nitrogênio e lagos líquidos de metano e etano.</li>
    <li><strong>Encélado:</strong> Mundo coberto de gelo super brilhante com gêiseres ativos que ejetam vapor de água e moléculas orgânicas.</li>
    <li><strong>Mimas:</strong> Famosa pela gigantesca cratera Herschel, conferindo-lhe uma semelhança marcante com a "Estrela da Morte".</li>
  </ul>
  <a href="index.html" class="voltar">← Voltar ao início</a>
</section>
```

Todas as páginas detalhadas dos astros seguem o mesmo padrão harmonioso:
- `<section class="card-pagina">`: cartão escuro centralizado com bordas suaves e tipografia em alto contraste para facilitar a leitura infantil e de educadores.
- `<section class="planeta ...">`: ilustração visual em CSS do astro em escala ampliada com suas luas e características marcantes.
- `<h1>`: título de destaque com o nome do corpo celeste.
- `<p>`: introdução contextualizada em linguagem acessível e educativa.
- `<h3>`, `<ul>` e `<li>`: estruturação pedagógica em tópicos com curiosidades, composição atmosférica e luas notáveis.
- `<a href="index.html" class="voltar">`: botão estipulado com a classe `voltar`, permitindo retornar comodamente à visão global.

---

## Estilização com CSS

A identidade visual de todo o projeto é centralizada em uma **única folha de estilos**, o arquivo `planets.css`.

### Vinculando o CSS

Dentro do `<head>` de todas as páginas HTML, é mantida a tag padrão:

```html
<link rel="stylesheet" href="planets.css">
```

### Estilização com Classes (`class`)

O projeto utiliza **classes CSS reutilizáveis** para garantir consistência visual em todo o ecossistema:

```css
.card-pagina {
  max-width: 580px;
  margin: 50px auto 70px;
  padding: 30px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
}

.planeta {
  display: inline-block;
  border-radius: 50%;
  position: relative;
  transition: transform 0.25s;
  text-decoration: none;
}

.planeta:hover {
  transform: scale(1.08);
}
```

- `.card-pagina` e `.item`: utilizam `display: flex` para centralizar perfeitamente os astros na tela e balancear os textos explicativos.
- `.planeta`: define a geometria esférica básica (`border-radius: 50%`) e o feedback interativo de ampliação suave (`transform: scale(1.08)`) ao passar o cursor ou interagir com o elemento.

---

### Efeitos Visuais Avançados em CSS

O projeto se destaca por criar gráficos celestes de alta fidelidade visual **sem depender de imagens pesadas**, usando recursos nativos do CSS:

#### 1. A Estrela Sol (Esfera Semitransparente e Auras Coronais)
```css
.sol {
  width: 105px;
  height: 105px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.95) 0%, rgba(254, 249, 195, 0.75) 30%, rgba(254, 240, 138, 0.35) 65%, transparent 100%);
  box-shadow: 0 0 45px #ffffff, 0 0 95px #fef08a, 0 0 190px rgba(254, 240, 138, 0.9), 0 0 340px rgba(253, 224, 71, 0.7);
  animation: brilho-solar 4s infinite ease-in-out alternate;
}

.esfera-solar {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90px;
  height: 90px;
  border-radius: 50%;
  background: radial-gradient(circle at 36% 34%, rgba(255, 255, 255, 0.85) 0%, rgba(254, 249, 195, 0.6) 35%, rgba(254, 240, 138, 0.32) 70%, rgba(250, 204, 21, 0.15) 100%);
  border: 1.5px solid rgba(255, 255, 255, 0.65);
  box-shadow: inset 0 0 18px rgba(255, 255, 255, 0.8), inset -3px -3px 12px rgba(234, 179, 8, 0.35), 0 0 25px rgba(255, 255, 255, 0.7);
  pointer-events: none;
  z-index: 2;
}
```
- A classe `.esfera-solar` cria uma esfera delicada e semitransparente no centro para que o Sol tenha a definição física de uma estrela esférica, enquanto os pseudo-elementos `.sol::before` e `.sol::after` espalham auras de luz orgânicas e assimétricas em tons de amarelo claro que preenchem suavemente a tela.

#### 2. Anéis Tridimensionais de Saturno e Urano
```css
.anel-saturno-tras {
  clip-path: polygon(0 0, 100% 0, 100% 50%, 0 50%);
  z-index: 1; /* Passa por trás do polo superior */
}

.corpo-saturno {
  z-index: 2; /* Fica no meio */
}

.anel-saturno-frente {
  clip-path: polygon(0 50%, 100% 50%, 100% 100%, 0 100%);
  z-index: 3; /* Passa pela frente do polo inferior */
}
```
- Com a propriedade `clip-path`, o anel é cortado em metades superior e inferior com diferentes valores de `z-index`. Isso produz uma ilusão ótica 3D perfeita: o disco parece envolver fisicamente o planeta no espaço sem cobrir os textos informativos.
- O anel de Saturno conta ainda com a representação gráfica da **Divisão de Cassini** (faixa escura separando os anéis internos e externos).

#### 3. Cinturão Principal de Asteroides como Constelação Superpopulosa
- A faixa estende-se horizontalmente pelo vácuo entre Marte e Júpiter.
- Utiliza enxames (`.enxame-constelacao-1`, `.enxame-constelacao-2`, `.enxame-constelacao-3`) compostos por dezenas de micropontos de luz (`box-shadow` múltiplo) de 1px a 2.5px com animações de cintilação suave:

```css
/* Enxame estelar com múltiplos pontos de luz e cintilação suave */
.enxame-constelacao-1 {
  width: 2.5px;
  height: 2.5px;
  border-radius: 50%;
  pointer-events: none;
  animation: cintilacao-constelacao 5s infinite ease-in-out alternate;
  box-shadow:
    -565px -12px 0 #ffffff,
    -490px -24px 0 #bae6fd,
    140px -15px 0 #ffffff,
    365px 28px 0 #fef08a;
}

/* Microrrochas com relevo orgânico e sem efeito de hover */
.rocha {
  position: absolute;
  pointer-events: none;
  border-radius: 40% 60% 55% 45% / 45% 55% 45% 55%;
  filter: drop-shadow(0 0 4px rgba(0, 0, 0, 0.95));
}
```

#### 4. O Sistema de Luas Notáveis
- Cada satélite natural possui dimensões proporcionais e paleta mineral autêntica gerada por `radial-gradient` (ex: a alaranjada Titã com atmosfera de metano, a gelada Encélado com brilho alvíssimo, o tom sulfuroso de Ío e os cânions azuis de Miranda).
- Suas posições orbitais (`position: absolute`) foram calibradas para contornar os polos e laterais dos planetas, garantindo distância visual segura dos títulos e textos:

```css
/* Posicionamento orbital e relevo mineral das luas (exemplo: Lua da Terra) */
.lua {
  position: absolute;
  top: -12px;
  right: -16px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: radial-gradient(circle at 35% 30%, #e2e8f0 0%, #94a3b8 50%, #334155 100%);
  box-shadow: inset -3px -3px 6px rgba(0, 0, 0, 0.8), 0 0 8px rgba(226, 232, 240, 0.4);
  pointer-events: none;
}
```

---

## Interatividade com JavaScript (`script.js`)

O arquivo `script.js` potencializa a experiência da criança e do professor com três recursos essenciais:

1. **Campo Estelar Dinâmico no Canvas**:
   - Cria e anima partículas estelares no elemento `<canvas id="espaco">`.
   - Adapta-se automaticamente com evento de `resize` sempre que a janela é redimensionada ou rotacionada no celular:

```javascript
// Renderização e cintilação contínua do campo de estrelas
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
  requestAnimationFrame(animar);
}
```

2. **Rastreador de Progresso Orbital**:
   - Calcula a porcentagem do scroll (`window.scrollY`) em relação à altura navegável total e atualiza dinamicamente a largura da barra `#progresso`:

```javascript
// Cálculo da porcentagem percorrida na jornada pelo Sistema Solar
window.addEventListener('scroll', () => {
  if (progresso) {
    const total = document.documentElement.scrollHeight - window.innerHeight;
    const atual = (window.scrollY / (total || 1)) * 100;
    progresso.style.width = `${atual}%`;
  }
});
```

3. **Controle de Retorno ao Topo**:
   - Exibe o botão flutuante `#btn-topo` assim que a rolagem ultrapassa 250px.
   - Ao ser clicado, aciona uma rolagem suave até o Sol:

```javascript
// Exibição contextual e rolagem suave de volta ao Sol
window.addEventListener('scroll', () => {
  if (btnTopo) {
    btnTopo.style.display = window.scrollY > 250 ? 'block' : 'none';
  }
});

if (btnTopo) {
  btnTopo.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}
```
