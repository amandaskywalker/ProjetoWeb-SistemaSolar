# Odisseia Solar 🚀🪐

Site educativo e interativo sobre o Sistema Solar, pensado para tornar as aulas de ciências e astronomia mais dinâmicas e convidativas para crianças de 4 a 6 anos.

## Grupo

- Amanda Massari - 10374292
- Nícolas Takehara - 10771443
- Isabelle Franco - 10425395
- Paulo Zorzin Gerin - 10771431

## Sobre o projeto

A página principal apresenta uma jornada vertical pelo Sistema Solar, do Sol até Netuno, passando pelo Cinturão Principal de Asteroides. Cada corpo celeste é ilustrado inteiramente em CSS (sem imagens pesadas) e leva a uma página própria com curiosidades, estrutura interna, atmosfera e luas naturais. As páginas de cada planeta também trazem um mini quiz interativo para reforçar o aprendizado.

## Estrutura do projeto

```
ProjetoWeb-SistemaSolar/
├── index.html            # Página principal com a jornada pelo Sistema Solar
├── css/
│   └── planets.css       # Folha de estilos central do projeto
├── js/
│   ├── script.js         # Campo de estrelas animado, barra de progresso e botão "voltar ao topo"
│   ├── quiz.js            # Lógica do mini quiz exibido em cada página de planeta
│   └── quiz_dados.js      # Banco de perguntas e respostas do quiz, por astro
├── planetas/
│   ├── sol.html
│   ├── mercurio.html
│   ├── venus.html
│   ├── terra.html
│   ├── marte.html
│   ├── jupiter.html
│   ├── saturno.html
│   ├── urano.html
│   └── netuno.html
├── vite.config.js
└── tutorial.md           # Guia detalhado da estrutura HTML/CSS/JS do projeto
```

## Como rodar localmente

O projeto é HTML/CSS/JS puro, servido com [Vite](https://vitejs.dev/) durante o desenvolvimento.

```bash
npm install
```

Depois é só abrir o endereço indicado no terminal (geralmente `http://localhost:5173`) no navegador.

Alternativamente, o `index.html` pode ser aberto diretamente no navegador, já que não depende de build.

## Funcionalidades

- 🌌 Campo de estrelas animado ao fundo, gerado em `<canvas>`.
- 📊 Barra de progresso que acompanha a rolagem da jornada pelo Sistema Solar.
- ⬆️ Botão flutuante para retornar suavemente ao topo.
- 🪐 Ilustrações 3D em CSS puro, incluindo os anéis de Saturno e Urano com efeito de profundidade.
- 🧠 Mini quiz por planeta para testar o conhecimento adquirido.

## Documentação adicional

Para uma explicação detalhada da estrutura HTML, das classes CSS e dos scripts JavaScript, veja [tutorial.md](tutorial.md).
