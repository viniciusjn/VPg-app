# VPg

## Objetivo
O objetivo principal desse projeto é a implementação de uma interface responsiva, moderna, funcional e estilizada usando as principais ferramentas do Tailwind CSS, React e Next.js. São abordados conceitos de componentização, módulos e rotas do Next.js/React, estilização através do Tailwind com o máximo de suas funcionalidades, além do consumo de uma API interna através do JSON server e uma API externa para buscar dados da temática escolhida.

## Especificações
- projeto totalmente focado no front-end;
- projeto responsivo;
- site todo feito com TypeScript, React, Next.js, Tailwind CSS;
- é consumida a [RAWG API](https://api.rawg.io/docs/) para trazer informações da temática abordada;
- é utilizado o JSON server para consumir uma API interna que facilita a variação de um componente;
- na página de ranking é criada uma tabela que também consome os dados [RAWG API](https://api.rawg.io/docs/), essa tabela conta com ordenação crescente e decrescente pela nota e ordem alfabética pelo nome do jogo
- a temática adotada foi de um site voltado para informações sobre games, seus rankings e detalhes;
- o nome "VPg" significa Vinícius Pereira (meu nome) games

## Ferramentas e Tecnologias

* <img align="center" alt="CSS" height="30" width="40" href="#" src="https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/tailwindcss/tailwindcss-original.svg"> [Tailwind CSS](https://tailwindcss.com)
* <img align="center" alt="TypeScript" height="30" width="40" href="#" src="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/typescript/typescript-original.svg"> [Typescript](https://www.typescriptlang.org/)
* <img align="center" alt="React" height="30" width="40" href="#" src="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/react/react-original-wordmark.svg"> [React](https://react.dev)
* <img align="center" alt="Next.js" height="30" width="40" href="#" src="https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/nextjs/nextjs-original.svg"> [Next.js](https://nextjs.org)
<br><br>



## 🚀 Rodando o projeto

### -> pré-requisitos

Primeiramente você deverá criar uma conta na [RAWG API](https://rawg.io/apidocs) para que consiga obter a chave de utlização da API, é um processo super rápido e tranquilo.

É necessário possuir o [Node.js](https://nodejs.org/en) instalado na sua máquina, para verificar se já o possui, abra o terminal e digite:

```
npm --version
```

Também é fundamental a biblioteca [React](https://react.dev) e o framework [Next](https://nextjs.org) estarem em sua máquina, caso não os possua, digite o comando abaixo e ambos serão instalados:

```
npm install next react react-dom
```

### -> instalação

Com o Node, React e Next instalados, você deverá primeiramente clonar o repositório em uma pasta de sua preferência:

```
git clone https://github.com/viniciusjn/VPg-app.git
```

Logo depois deverá entrar no repositório da aplicação:

```
cd vpg-client
```

Instalar todas as depedências:

```
npm install
```

Ao abrir o projeto no VS Code ou em qualquer IDE que utilize, no diretório vpg-client você deve criar um arquivo chamado:

```
.env.local
```

Depois de criá-lo, cole o código abaixo no arquivo .env.local e SUBSTITUA os asteriscos pela chave da API que você conseguiu logo após criar a conta na [RAWG](https://rawg.io/apidocs):

```
NEXT_PUBLIC_RAWG_API_KEY=***********************************
```


### -> rodando:

Antes de rodar o projeto, ainda no repositório "vpg-client", você deverá inicializar o JSON server através do comando no terminal:

```
json-server --watch db.json --port 3001
```

E por fim, no mesmo diretório vpg-client, colocar o projeto funcionando em servidor local:

```
npm run dev
```

Acesse o link disponibilizado no terminal e veja o projeto em funcionamento!

## License
Esse projeto possui MIT License Copyright (c) 2025 ᴠɪɴɪ. 


