<h1>Projeto Odisseia Solar</h1>

<h2>Grupo:</h2>
Amanda Massari - 10374292 <br></br>
Nícolas Takehara - 10771443 <br></br>
Isabelle Franco - 10425395 <br></br>
Paulo Zorzin Gerin - 10771431

<h2>Ideação: </h2>
  O projeto "Odisseia Solar" foi idealizado com o intento de auxiliar no processo educacional brasileiro de crianças entre 4 a 6 anos, tornando as aulas de ciência e astronomia mais dinâmicas e convidativas para alunos que, do contrário, não teriam acesso a tais materiais ou que necessitem de maior estímulo para aprender sobre o Sistema Solar.
O protótipo (imagem abaixo), é pensado para ser simples e responsivo, com uma interface única e lúdica que leva a criança numa grande jornada, tornando a experiência maior do que uma aula escolar. 

<h2>Protótipo: </h2><br></br>
<img width="935" height="829" alt="image" src="https://github.com/user-attachments/assets/27b7ea66-c838-461a-9d28-cedabe015ce8" />



## Estrutura básica

### Dentro do `<head>`

```html
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Sistema Solar</title>
```

- `<meta charset="UTF-8">`: garante que acentos e caracteres especiais apareçam corretamente no navegador.
- `<meta name="viewport">`: garante a responsividade da página, ajustando o layout para telas de diferentes tamanhos (celulares, tablets e computadores).
- `<title>`: define o título que aparece na aba do navegador.

### Página Principal (`index.html`)

A página principal utiliza marcas semânticas do HTML5 para estruturar a jornada do usuário pelos corpos celestes:

```html
<header>
  <h1>Sistema Solar</h1>
  <p>Role a página para baixo para ver o Sol e os planetas em ordem.</p>
</header>

<main>
  <section class="item">
    <a href="jupiter.html" class="planeta jupiter"></a>
    <h2>5. Júpiter</h2>
    <p>778,5 milhões de km do Sol</p>
  </section>
  <!-- Outras seções de planetas... -->
</main>
```

- `<header>`: exibe o título principal do projeto e o texto instrucional de navegação.
- `<main>`: agrupa todos os elementos astronômicos na página inicial.
- `<section class="item">`: cria um bloco individual para cada corpo celeste, mantendo o visual centralizado.
- `<a href="..." class="planeta ...">`: elemento interativo circular que serve como representação gráfica do astro e redireciona o usuário para sua respectiva página.
- `<h2>` e `<p>`: mostram a posição numerada/nome do astro e sua distância aproximada do Sol.

### Páginas Individuais dos Planetas (ex: `jupiter.html`)

```html
<section class="card-pagina">
  <section class="planeta jupiter"></section>
  <h1>Júpiter</h1>
  <p>Júpiter é o quinto planeta a partir do Sol e o maior de todo o Sistema Solar.</p>
  <ul>
    <li>Posição a partir do Sol: 5º</li>
    <li>É um gigante gasoso com mais de duas vezes a massa de todos os outros planetas juntos</li>
    <li>Possui mais de 90 luas conhecidas, como Ganimedes e Europa</li>
  </ul>
  <a href="index.html" class="voltar">← Voltar ao início</a>
</section>
```

Todas as páginas detalhadas dos astros seguem o mesmo padrão:
- `<section class="card-pagina">`: caixa de apresentação que centraliza todo o conteúdo informativo da página.
- `<section class="planeta ...">`: insere a ilustração gráfica estilizada do astro.
- `<h1>`: destaca o nome do astro.
- `<p>`: apresenta um resumo introdutório.
- `<ul>` e `<li>`: organizam os fatos rápidos e curiosidades em forma de lista.
- `<a href="index.html" class="voltar">`: link com classe `voltar` para navegação de retorno ao menu principal.

## Estilização com CSS

A aparência de todo o projeto é centralizada em uma **única folha de estilos**, o arquivo `planets.css`.

### Vinculando o CSS

Dentro do `<head>` de todas as páginas HTML, é incluída a tag de vínculo:

```html
<link rel="stylesheet" href="planets.css">
```

- `rel="stylesheet"`: indica que o arquivo é uma folha de estilos.
- `href="planets.css"`: aponta para o arquivo CSS central do projeto.

### Estilização com Classes (`class`)

Em vez de seletores por ID, o projeto emprega **classes CSS** (selecionadas com `.`), permitindo reaproveitar estilos entre as páginas:

```css
.card-pagina {
  max-width: 520px;
  margin: 60px auto;
  padding: 30px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 18px;
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

.jupiter {
  width: 160px;
  height: 160px;
  background: repeating-linear-gradient(180deg, #d4a373 0, #d4a373 12px, #99582a 12px, #99582a 24px);
  box-shadow: inset -15px -10px 25px rgba(0, 0, 0, 0.7);
}

.card-pagina a.voltar {
  color: #38bdf8;
  text-decoration: none;
  font-weight: bold;
  margin-top: 10px;
}
```

- `.card-pagina` e `.item`: utilizam `display: flex` para alinhar verticalmente os elementos e centralizar o conteúdo.
- `.planeta`: define a base circular (`border-radius: 50%`) e o efeito de ampliação (`transform: scale`) no passar do mouse (`:hover`).
- Classes específicas (ex: `.sol`, `.mercurio`, `.jupiter`): estabelecem as proporções de tamanho e os padrões de gradiente de cor (`radial-gradient` ou `linear-gradient`) característicos de cada corpo celeste.
- Elementos complementares (`.lua`, `.anel-saturno`, `.anel-urano`): usam posicionamento absoluto (`position: absolute`) para renderizar os anéis e luas orbitando os planetas correspondentes.
- `.voltar`: personaliza a aparência do link de retorno para a página inicial.
