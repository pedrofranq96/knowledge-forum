# Documentação do Projeto "Base de Conhecimento - Knowledge"

## Introdução

O projeto "Base de Conhecimento - Knowledge" é uma aplicação web que permite aos usuários visualizar artigos diversos de conhecimento. Cada artigo pode ser visualizado por qualquer pessoa que tenha um login. Somente o administrador tem o poder de criar, atualizar, listar e excluir artigos e categorias dos artigos.

O projeto é dividido em duas partes principais: o frontend e o backend. O frontend é responsável pela interface do usuário, enquanto o backend gerencia a lógica de negócios e os dados do aplicativo.

## Frontend

### Tecnologias/Dependências

As seguintes tecnologias e dependências foram usadas no frontend do projeto:

- Vue.js (v2.5.17): Uma estrutura JavaScript progressiva para a criação de interfaces de usuário.
- Axios (v0.18.0): Uma biblioteca para fazer requisições HTTP.
- Bootstrap-Vue (v2.0.0-rc.11): Uma implementação do Bootstrap para Vue.js.
- Font Awesome (v4.7.0): Uma biblioteca de ícones.
- Highlight.js (v9.10.0): Uma biblioteca para destacar a sintaxe do código.
- Liquor Tree (v0.2.32): Uma biblioteca para criar árvores de exibição.
- Vue Gravatar (v1.2.1): Uma biblioteca para exibir avatares Gravatar.
- Vue-MQ (v0.2.1): Uma biblioteca para trabalhar com media queries no Vue.js.
- Vue Router (v3.0.1): Um roteador oficial para Vue.js.
- Vue Toasted (v1.1.24): Uma biblioteca para exibir notificações Toast.
- Vue2-Editor (v2.6.6): Um editor de texto rico para Vue.js.
- Vuex (v3.0.1): Um gerenciador de estado para aplicativos Vue.js.

### Instalação do Frontend

Para executar o frontend em sua máquina, siga estas etapas:

1. Certifique-se de que você tem o [Node.js](https://nodejs.org/) instalado em sua máquina.

2. Abra um terminal e navegue até a pasta do projeto frontend.

3. Execute o seguinte comando para instalar as dependências:

```bash
npm install
```

4. Após a conclusão da instalação, inicie o servidor de desenvolvimento com o seguinte comando:

```bash
npm run serve
```

5. O aplicativo estará disponível em `http://localhost:8080` em seu navegador. Você pode acessar a interface do usuário do projeto a partir deste URL.

## Backend

### Tecnologias/Dependências

As seguintes tecnologias e dependências foram usadas no backend do projeto:

- Express (v4.16.3): Um framework para aplicativos Node.js.
- MongoDB (utilizando Mongoose v5.2.17): Um banco de dados NoSQL.
- Passport (v0.4.0) e Passport-JWT (v4.0.0): Bibliotecas para autenticação.
- JWT-Simple (v0.5.1): Uma biblioteca para gerar e verificar tokens JWT.
- Bcrypt-Nodejs (v0.0.3): Uma biblioteca para criptografar senhas.
- Knex (v0.21.1): Um construtor de consultas SQL.
- Node-Schedule (v1.3.0): Uma biblioteca para agendar tarefas.
- Cors (v2.8.4): Um middleware para habilitar o acesso de origens cruzadas (CORS).
- Body-Parser (v1.18.3): Um middleware para analisar corpos de solicitação HTTP.
- Pg (v8.0.3): Um driver PostgreSQL para Node.js.
- Moment (v2.22.2): Uma biblioteca para manipulação de datas e horas.

### Instalação do Backend

Para executar o backend em sua máquina, siga estas etapas:

1. Certifique-se de que você tem o [Node.js](https://nodejs.org/) instalado em sua máquina.

2. Certifique-se de que você tem um banco de dados MongoDB instalado e em execução. Você pode instalá-lo seguindo as [instruções oficiais](https://docs.mongodb.com/manual/installation/).

3. Abra um terminal e navegue até a pasta do projeto backend.

4. Execute o seguinte comando para instalar as dependências:

```bash
npm install
```

5. Configure as variáveis de ambiente. Crie um arquivo `.env` na raiz do projeto com as seguintes informações:

```env
MONGO_URI=your-mongodb-uri
SECRET_KEY=your-secret-key
```

Substitua `your-mongodb-uri` pela URI do seu banco de dados MongoDB e `your-secret-key` por uma chave secreta para geração de tokens JWT.

6. Execute o seguinte comando para iniciar o servidor backend:

```bash
npm start
```

O servidor estará disponível em `http://localhost:3000`.

## Uso da Aplicação

Acesse a interface do usuário do frontend em `http://localhost:8080` em seu navegador. Você pode criar uma conta de usuário e fazer login para visualizar artigos. Como administrador, você terá acesso às funcionalidades adicionais de criação, atualização, listagem e exclusão de artigos e categorias.

Lembre-se de que esta é apenas uma documentação inicial. Dependendo da complexidade do projeto, podem ser necessárias etapas adicionais de configuração e personalização.

Para qualquer dúvida ou problema, consulte a documentação das tecnologias individuais ou entre em contato com a equipe de desenvolvimento.
