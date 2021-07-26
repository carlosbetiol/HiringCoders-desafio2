DESAFIO 2

Este documento descreve passo a passo de como foi feito o projeto, serve para orientação para novos projetos em react com typescript.

- criar um projeto react baseado em typescript
npx create-react-app hiringcoders-desafio2 --template=typescript

instalar plugins no vscode, alem de configurar algumas coisas:
- tabnine para autocomplete
- material icon para os icons bonitos
- omni theme rocketseat para esquema de cores q fica legal
- Rockseat React Native para usar de atalho para criaçao de componentes para react native (snippets)
- Rockseat ReactJS para usar de atalho para criação de componentes para react (snippets)
- Entrar em preferences, settings, abrir o codigo do settings.json e colocar "editor.tabsize":2 junto com as configuracoes de fontes
- vscode-styled-components util para usar o styled components

*** a partir da versao 15x nao é necessario mais importar o react em todos os componentes

com o plugin de snippet da rocketseat basta digitar rfc para que venha o codigo base para o componente

- instalar o styled component (é o css em js, ele compila a estilizacao do projeto em javascript, nao gera o css que ficaria acoplado ao projeto:
yarn add styled-components
- indicar que o styled component recebe uma tipagem, para que haja compilacao automatica (somente em desenvolvimento):
yarn add @types/styled-components -D

- instalar o json-server que simula uma API no cliente para o ambiente de desenvolvimento, facilita o desenvolvimento de aplicacoes porque dá para simular um banco de dados e poderá testar requisicoes por meio de um URL
yarn add json-server -D

- instalar o axios (api client) para fazer requisicoes para o json-server
yarn add axios

- criar um arquivo server.json e popular com uma estrutura array json, e colocar o server para rodar (ver documentacao do json-server):
yarn json-server server.json -w -p 8888

- para facilitar o start do json-server, colocar em scripts no package.json:
"server": "json-server server.json -w -p 8888"
(rodar com: yarn server)

  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');
  
- fazer este tutorial para entender melhor o styled componentes (e também css):
  https://medium.com/reactbrasil/utilizando-media-queries-no-react-com-styled-components-f0f3160f3f01
  
