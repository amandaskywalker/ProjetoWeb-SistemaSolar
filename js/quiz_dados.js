const perguntasPorAstro = {
  'Sol': [
    {
      pergunta: 'Qual é a principal fonte de energia do Sol?',
      opcoes: ['Combustão de gás natural', 'Fusão nuclear no núcleo', 'Reação química com hidrogênio líquido', 'Radiação refletida da Lua'],
      correta: 1,
      dica: 'Pense em como as estrelas "acendem" — não é fogo como conhecemos aqui na Terra.',
      justificativa: 'O Sol gera energia através da fusão nuclear, transformando hidrogênio em hélio no núcleo e liberando enormes quantidades de energia.'
    },
    {
      pergunta: 'Quantas Terras caberiam dentro do Sol, aproximadamente?',
      opcoes: ['Cerca de 1.000', 'Cerca de 100.000', 'Mais de 1 milhão', 'Cerca de 10'],
      correta: 2,
      dica: 'O Sol representa mais de 99% de toda a massa do Sistema Solar!',
      justificativa: 'O Sol é tão grande que caberiam mais de 1 milhão de Terras dentro dele.'
    },
    {
      pergunta: 'Qual é a camada mais externa do Sol, visível a olho nu durante um eclipse total?',
      opcoes: ['Núcleo', 'Fotosfera', 'Coroa solar', 'Zona convectiva'],
      correta: 2,
      dica: 'Ela só fica visível quando a Lua "tapa" o disco solar.',
      justificativa: 'A coroa solar é a atmosfera externa do Sol, vista como um halo brilhante durante eclipses totais.'
    },
    {
      pergunta: 'O Sol é classificado como que tipo de estrela?',
      opcoes: ['Gigante vermelha', 'Anã branca', 'Anã amarela', 'Buraco negro'],
      correta: 2,
      dica: 'Apesar do nome "anã", ele é gigantesco comparado à Terra.',
      justificativa: 'O Sol é uma estrela anã amarela de sequência principal, de tamanho e temperatura médios.'
    }
  ],
  'Mercúrio': [
    {
      pergunta: 'Por que Mercúrio não é o planeta mais quente do Sistema Solar mesmo sendo o mais próximo do Sol?',
      opcoes: ['Porque tem gelo permanente', 'Porque não tem atmosfera para reter o calor', 'Porque é feito de metal', 'Porque gira muito rápido'],
      correta: 1,
      dica: 'Pense em uma manta: sem ela, o calor escapa rápido.',
      justificativa: 'Mercúrio quase não tem atmosfera, então o calor escapa à noite. Isso deixa Vênus, com sua atmosfera espessa, mais quente.'
    },
    {
      pergunta: 'Quanto tempo dura uma rotação completa (um "dia") em Mercúrio?',
      opcoes: ['Cerca de 24 horas', 'Cerca de 59 dias terrestres', 'Cerca de 1 dia terrestre', 'Cerca de 365 dias'],
      correta: 1,
      dica: 'Mercúrio gira bem devagar em torno do próprio eixo.',
      justificativa: 'Mercúrio leva cerca de 59 dias terrestres para completar uma rotação.'
    },
    {
      pergunta: 'Mercúrio é o quê em relação ao tamanho no Sistema Solar?',
      opcoes: ['O maior planeta', 'O menor planeta', 'O segundo maior', 'Do mesmo tamanho da Terra'],
      correta: 1,
      dica: 'Ele é até menor que algumas luas do Sistema Solar, como Ganimedes.',
      justificativa: 'Mercúrio é o menor planeta do Sistema Solar desde que Plutão foi reclassificado como planeta anão.'
    },
    {
      pergunta: 'Quantas luas Mercúrio possui?',
      opcoes: ['Nenhuma', 'Uma', 'Duas', 'Cinco'],
      correta: 0,
      dica: 'Ele é pequeno e está muito perto do Sol, o que dificulta manter satélites.',
      justificativa: 'Mercúrio não possui luas conhecidas.'
    }
  ],
  'Vênus': [
    {
      pergunta: 'Por que Vênus é o planeta mais quente do Sistema Solar?',
      opcoes: ['Por estar mais perto do Sol', 'Por causa do efeito estufa intenso', 'Por ter vulcões ativos constantes', 'Por girar muito rápido'],
      correta: 1,
      dica: 'A atmosfera dele é espessa e cheia de gás carbônico.',
      justificativa: 'A atmosfera densa de CO₂ de Vênus retém o calor, criando um efeito estufa extremo — mais forte que o de Mercúrio, mesmo estando mais longe do Sol.'
    },
    {
      pergunta: 'Em que sentido Vênus gira, comparado à maioria dos planetas?',
      opcoes: ['No mesmo sentido', 'No sentido oposto (retrógrado)', 'Não gira', 'Gira na vertical'],
      correta: 1,
      dica: 'Nele, o Sol nascer aconteceria ao contrário do que na Terra.',
      justificativa: 'Vênus tem rotação retrógrada, girando no sentido contrário à maioria dos planetas do Sistema Solar.'
    },
    {
      pergunta: 'Vênus é conhecido popularmente por qual apelido, por seu brilho no céu?',
      opcoes: ['Estrela Polar', 'Estrela D\'Alva (ou "Estrela Vespertina")', 'Cometa Halley', 'Estrela do Sul'],
      correta: 1,
      dica: 'Ele costuma ser visto logo após o pôr do sol ou antes do amanhecer.',
      justificativa: 'Por seu brilho intenso, Vênus é popularmente chamado de "Estrela D\'Alva" ou "Estrela Vespertina".'
    },
    {
      pergunta: 'Como é a pressão atmosférica na superfície de Vênus, comparada à da Terra?',
      opcoes: ['Muito menor', 'Praticamente igual', 'Cerca de 90 vezes maior', 'Não existe atmosfera'],
      correta: 2,
      dica: 'É parecido com estar quase 1 km abaixo da superfície do oceano na Terra.',
      justificativa: 'A pressão na superfície de Vênus é cerca de 90 vezes a da Terra ao nível do mar.'
    }
  ],
  'Terra': [
    {
      pergunta: 'Por que a Terra é o único planeta conhecido com vida?',
      opcoes: ['Combinação de água líquida, atmosfera e distância ideal do Sol', 'Por ser o maior planeta', 'Por não ter luas', 'Por girar mais rápido que os outros'],
      correta: 0,
      dica: 'Pense na "zona habitável": nem muito perto, nem muito longe do Sol.',
      justificativa: 'A Terra está na zona habitável, tem água líquida em abundância e uma atmosfera protetora — condições essenciais para a vida como conhecemos.'
    },
    {
      pergunta: 'Quanto tempo a Terra leva para completar uma volta ao redor do Sol?',
      opcoes: ['24 horas', 'Aproximadamente 365 dias', '30 dias', '10 anos'],
      correta: 1,
      dica: 'É esse tempo que define o que chamamos de "ano".',
      justificativa: 'A Terra completa uma translação ao redor do Sol em aproximadamente 365,25 dias, o que define um ano.'
    },
    {
      pergunta: 'Qual gás é mais abundante na atmosfera terrestre?',
      opcoes: ['Oxigênio', 'Gás carbônico', 'Nitrogênio', 'Hidrogênio'],
      correta: 2,
      dica: 'Ele compõe cerca de 78% do ar, mas não é o gás que usamos para respirar.',
      justificativa: 'O nitrogênio representa cerca de 78% da atmosfera terrestre, enquanto o oxigênio, essencial para a respiração, representa cerca de 21%.'
    },
    {
      pergunta: 'Quantas luas naturais a Terra possui?',
      opcoes: ['Nenhuma', 'Uma', 'Duas', 'Três'],
      correta: 1,
      dica: 'Ela é responsável, entre outras coisas, pelas marés dos oceanos.',
      justificativa: 'A Terra tem apenas uma lua natural, chamada simplesmente de "Lua".'
    }
  ],
  'Marte': [
    {
      pergunta: 'Qual é o nome da maior montanha (e vulcão) de Marte, três vezes mais alta que o Everest?',
      opcoes: ['Monte Olimpo (Olympus Mons)', 'Vale Marineris', 'Monte Sharp', 'Cratera Gale'],
      correta: 0,
      dica: 'É o maior vulcão conhecido em todo o Sistema Solar.',
      justificativa: 'Olympus Mons tem cerca de 22 km de altura, tornando-o o maior vulcão conhecido do Sistema Solar.'
    },
    {
      pergunta: 'Por que Marte é conhecido como o "Planeta Vermelho"?',
      opcoes: ['Por causa da luz do Sol refletida', 'Por causa do óxido de ferro (ferrugem) em sua superfície', 'Por causa da atmosfera vermelha', 'Por causa de vulcões em erupção'],
      correta: 1,
      dica: 'É o mesmo processo que enferruja um prego de metal aqui na Terra.',
      justificativa: 'A superfície de Marte é rica em óxido de ferro, o que dá ao planeta sua coloração avermelhada característica.'
    },
    {
      pergunta: 'Quantas luas Marte possui?',
      opcoes: ['Nenhuma', 'Uma', 'Duas', 'Quatro'],
      correta: 2,
      dica: 'Elas se chamam Fobos e Deimos.',
      justificativa: 'Marte tem duas pequenas luas, Fobos e Deimos, que provavelmente são asteroides capturados pela gravidade do planeta.'
    },
    {
      pergunta: 'Quanto dura, aproximadamente, um dia em Marte comparado à Terra?',
      opcoes: ['Bem parecido, cerca de 24h37', 'Bem mais curto, cerca de 10h', 'Bem mais longo, cerca de 48h', 'Igual a um ano terrestre'],
      correta: 0,
      dica: 'Isso surpreende muita gente, já que Marte é bem diferente da Terra em outros aspectos.',
      justificativa: 'Um dia em Marte (chamado de "sol") dura cerca de 24 horas e 37 minutos, bem próximo de um dia terrestre.'
    }
  ],
  'Júpiter': [
    {
      pergunta: 'Como se chama a tempestade gigante de Júpiter, maior que a própria Terra?',
      opcoes: ['Grande Mancha Vermelha', 'Grande Mancha Azul', 'Furacão Joviano', 'Tempestade Polar'],
      correta: 0,
      dica: 'Ela já existe há séculos e é observada por astrônomos há muito tempo.',
      justificativa: 'A Grande Mancha Vermelha é uma tempestade anticiclônica gigante, maior que a Terra, que dura há centenas de anos.'
    },
    {
      pergunta: 'Júpiter é classificado como qual tipo de planeta?',
      opcoes: ['Planeta rochoso', 'Gigante gasoso', 'Planeta anão', 'Planeta de gelo'],
      correta: 1,
      dica: 'Ele é composto principalmente por hidrogênio e hélio, sem superfície sólida definida.',
      justificativa: 'Júpiter é um gigante gasoso, composto majoritariamente por hidrogênio e hélio.'
    },
    {
      pergunta: 'Júpiter é o quê em relação aos outros planetas do Sistema Solar?',
      opcoes: ['O menor', 'O mais próximo do Sol', 'O maior', 'O mais frio'],
      correta: 2,
      dica: 'Ele é tão grande que todos os outros planetas juntos caberiam dentro dele.',
      justificativa: 'Júpiter é o maior planeta do Sistema Solar, com massa maior que a de todos os outros planetas combinados.'
    },
    {
      pergunta: 'Qual é o nome da maior lua de Júpiter, também a maior do Sistema Solar?',
      opcoes: ['Europa', 'Titã', 'Ganimedes', 'Io'],
      correta: 2,
      dica: 'Ela é até maior que o planeta Mercúrio!',
      justificativa: 'Ganimedes é a maior lua do Sistema Solar, maior até que o planeta Mercúrio.'
    }
  ],
  'Saturno': [
    {
      pergunta: 'Por que se diz que Saturno "boiaria" em uma piscina gigante de água?',
      opcoes: ['Porque ele tem baixa densidade', 'Porque ele é feito de gelo', 'Porque ele não tem gravidade', 'Porque ele é oco'],
      correta: 0,
      dica: 'Densidade é a relação entre massa e volume — Saturno é "leve" para o tamanho que tem.',
      justificativa: 'Saturno tem densidade menor que a da água, então, hipoteticamente, flutuaria em uma piscina gigante o suficiente.'
    },
    {
      pergunta: 'Do que são feitos principalmente os anéis de Saturno?',
      opcoes: ['Metal e rochas sólidas', 'Gelo e partículas de rocha', 'Gás hidrogênio', 'Poeira vulcânica'],
      correta: 1,
      dica: 'Pense em pequenos "flocos" orbitando o planeta.',
      justificativa: 'Os anéis de Saturno são compostos majoritariamente por partículas de gelo, com uma pequena quantidade de rocha e poeira.'
    },
    {
      pergunta: 'Qual é o nome da maior lua de Saturno, que tem atmosfera densa?',
      opcoes: ['Titã', 'Encélado', 'Reia', 'Mimas'],
      correta: 0,
      dica: 'É a única lua do Sistema Solar conhecida por ter uma atmosfera espessa.',
      justificativa: 'Titã é a maior lua de Saturno e a única do Sistema Solar com atmosfera densa, além de lagos de metano líquido.'
    },
    {
      pergunta: 'Saturno é classificado como qual tipo de planeta?',
      opcoes: ['Planeta rochoso', 'Gigante gasoso', 'Planeta anão', 'Planeta de gelo'],
      correta: 1,
      dica: 'Assim como Júpiter, ele não tem uma superfície sólida como a Terra.',
      justificativa: 'Saturno é um gigante gasoso, composto principalmente por hidrogênio e hélio.'
    }
  ],
  'Urano': [
    {
      pergunta: 'O que há de peculiar na forma como Urano gira em torno do próprio eixo?',
      opcoes: ['Ele gira "deitado" de lado', 'Ele não gira', 'Ele gira ao contrário só às vezes', 'Ele gira mais rápido que todos os outros'],
      correta: 0,
      dica: 'Imagine uma bola de gude rolando pelo chão em vez de girar em pé.',
      justificativa: 'Urano tem uma inclinação axial de quase 98 graus, fazendo parecer que ele "rola" em sua órbita, ao invés de girar em pé como a maioria dos planetas.'
    },
    {
      pergunta: 'Qual gás dá a Urano sua coloração azul-esverdeada característica?',
      opcoes: ['Oxigênio', 'Metano', 'Nitrogênio', 'Hélio'],
      correta: 1,
      dica: 'Esse gás absorve a luz vermelha e reflete tons de azul e verde.',
      justificativa: 'O metano presente na atmosfera de Urano absorve a luz vermelha do Sol, dando ao planeta sua cor azul-esverdeada.'
    },
    {
      pergunta: 'Urano é classificado como qual tipo de planeta?',
      opcoes: ['Gigante gasoso', 'Gigante de gelo', 'Planeta rochoso', 'Planeta anão'],
      correta: 1,
      dica: 'Diferente de Júpiter e Saturno, ele tem mais "gelos" (água, amônia, metano) em sua composição.',
      justificativa: 'Urano, junto com Netuno, é classificado como gigante de gelo, com composição diferente da de Júpiter e Saturno.'
    },
    {
      pergunta: 'Urano possui anéis?',
      opcoes: ['Não, nenhum', 'Sim, alguns anéis finos e escuros', 'Sim, um único anel grande e brilhante', 'Sim, milhares de anéis coloridos'],
      correta: 1,
      dica: 'Eles são bem mais discretos que os anéis famosos de Saturno.',
      justificativa: 'Urano possui um sistema de anéis finos e escuros, descobertos apenas em 1977, bem menos visíveis que os de Saturno.'
    }
  ],
  'Netuno': [
    {
      pergunta: 'Por que os ventos de Netuno chamam tanto a atenção dos cientistas?',
      opcoes: ['Porque não existem ventos em Netuno', 'Porque são os mais lentos do Sistema Solar', 'Porque podem ser mais rápidos que um avião a jato', 'Porque só sopram uma vez por ano'],
      correta: 2,
      dica: 'Eles estão entre os ventos mais fortes já registrados em qualquer planeta.',
      justificativa: 'Netuno tem os ventos mais fortes do Sistema Solar, podendo ultrapassar 2.000 km/h — mais rápidos que muitos aviões a jato.'
    },
    {
      pergunta: 'Netuno foi descoberto de que forma peculiar?',
      opcoes: ['Observado diretamente a olho nu', 'Previsto matematicamente antes de ser observado', 'Descoberto por uma sonda espacial', 'Confundido inicialmente com uma estrela'],
      correta: 1,
      dica: 'Cientistas notaram que a órbita de Urano tinha "algo" a influenciá-la.',
      justificativa: 'Netuno foi previsto matematicamente por causa de perturbações na órbita de Urano, antes de ser observado diretamente em 1846.'
    },
    {
      pergunta: 'Qual é o nome da maior lua de Netuno?',
      opcoes: ['Tritão', 'Caronte', 'Nereida', 'Proteu'],
      correta: 0,
      dica: 'Essa lua orbita Netuno no sentido contrário ao da rotação do planeta.',
      justificativa: 'Tritão é a maior lua de Netuno e tem órbita retrógrada, o que sugere que pode ser um objeto capturado do Cinturão de Kuiper.'
    },
    {
      pergunta: 'Netuno é classificado como qual tipo de planeta?',
      opcoes: ['Gigante gasoso', 'Gigante de gelo', 'Planeta rochoso', 'Planeta anão'],
      correta: 1,
      dica: 'Assim como Urano, sua composição tem mais "gelos" que gases puros.',
      justificativa: 'Netuno é classificado como gigante de gelo, junto com Urano, com composição rica em água, amônia e metano congelados.'
    }
  ]
};