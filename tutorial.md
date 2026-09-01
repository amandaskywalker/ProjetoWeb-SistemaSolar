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
<title>Odisséia Solar</title>
```

- `<meta charset="UTF-8">`: para garantir que acentos apareçam corretamente.
- `<meta name="viewport">`: garante que a página se ajuste a todos os tamanhos de tela.
- `<title>`: para aparecer o título do projeto na aba do navegador.

### Títulos: `<h1>` e `<h2>`

Usados para garantir a hierarquia dos nomes na página.

### Lista de planetas: `<ul>` e `<li>`

Foi usado `<ul>` e `<li>` para listar os planetas do site:

```html
<ul>
    <li><a href="mercurio.html">Mercurio</a></li>
    <li><a href="venus.html">Venus</a></li>
</ul>
```

- `<ul>`: lista não ordenada, usada aqui porque são opções de navegação, não uma sequência numerada.
- `<li>`: cada item da lista (um planeta).
- `<a href="...">`: cria o link. Como o endereço é só o nome do arquivo (`mercurio.html`), o navegador vai procurar esse arquivo na mesma pasta do `index.html`. A intenção é que os planetas sejam clicáveis e tenham suas próprias páginas com mais informações.

### Página de planetas (por ex: `jupiter.html`)

```html
<h1>Júpiter</h1>
<p>***Info do planeta***</p>
<ul>
    <li>Posição a partir do Sol: </li>
    <li>***texto aqui, etc etc***</li>
</ul>
<p><a href="index.html">Voltar ao início</a></p>
```

Cada página de planeta segue o mesmo padrão do `index.html`: `<h1>` com o nome do planeta, `<p>` com a descrição, `<ul>` com fatos rápidos, e um link de volta com `<a href="index.html">`. Isso permite copiar essa estrutura para `mercurio.html`, `venus.html`, etc., trocando só o texto e tornando tudo padronizado.
