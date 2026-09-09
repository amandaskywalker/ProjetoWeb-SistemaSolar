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

## Estilização com CSS

Depois que o HTML de todas as páginas ficou pronto, adicionamos um arquivo `.css` para cada uma, deixando o site com cores e um visual mais organizado, sem perder a estrutura simples do HTML.

### Vinculando o CSS

Dentro do `<head>`, adicionamos uma tag `<link>` apontando para o arquivo de estilos daquela página:

```html
<link rel="stylesheet" href="jupiter.css">
```

- `rel="stylesheet"`: informa ao navegador que aquele arquivo é uma folha de estilos.
- `href="..."`: caminho do arquivo `.css`. Como fica na mesma pasta do HTML, basta o nome do arquivo.

### Usando `id`s para estilizar

Para que o CSS soubesse exatamente qual elemento estilizar, adicionamos um `id` em cada elemento do HTML:

```html
<h1 id="titulo">Júpiter</h1>
<p id="descricao">***Info do planeta***</p>
<ul id="lista-fatos">
    <li id="fato-posicao">Posição a partir do Sol: ...</li>
    <li id="fato-1">***texto aqui, etc etc***</li>
</ul>
<p id="voltar"><a href="index.html">Voltar ao início</a></p>
```

E no arquivo `.css` correspondente, usamos `#` para selecionar cada `id`:

```css
#titulo {
  color: #cf8f54;
  text-align: center;
}

#descricao {
  font-size: 1.1rem;
  line-height: 1.6;
  text-align: center;
}

#lista-fatos {
  list-style: none;
  padding: 0;
}

#lista-fatos li {
  background-color: #161b22;
  border-left: 4px solid #cf8f54;
  padding: 10px 15px;
  margin-bottom: 10px;
  border-radius: 4px;
}

#voltar a {
  color: #cf8f54;
  text-decoration: none;
  font-weight: bold;
}
```

- `#id`: seleciona o único elemento que tem aquele `id` (diferente de uma classe, que pode se repetir várias vezes na página).
- Cada planeta tem sua própria cor de destaque, usada no título, nos fatos e no link de voltar, para diferenciar visualmente cada página sem mudar a estrutura do HTML.

### Padrão entre as páginas

Assim como o HTML, o CSS segue o mesmo padrão em todas as páginas de planeta: os mesmos `id`s (`#titulo`, `#descricao`, `#lista-fatos`, `#voltar`), mudando apenas a cor de destaque para combinar com cada planeta. Já o `index.html` usa seu próprio conjunto de `id`s (`#titulo`, `#planetas-titulo`, `#planetas-intro`, `#lista-planetas` e um `#item-{planeta}` para cada link da lista), o que deixa a página inicial e as páginas de planeta visualmente conectadas, mas cada uma com sua identidade.
