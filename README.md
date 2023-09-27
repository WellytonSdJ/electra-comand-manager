# ⚡ Electra Comand Manager⚡ 

Um amigo que trabalha com a infra se deparou com o seguinte problema: atualmente existem vários arquivos executaveis .bat e .sh dentro de pastas, que deveriam ser acessados e executados pela equipe de suporte.

No entanto, os arquivos estavam soltos, o que poderia dar margem para o arquivo ser editado tanto por analistas como por algum terceiro que tivesse acesso aos arquivos.

Com isso surgiu a necessidade de criar uma interface local que executasse os arquivos não dando acesso direto aos arquivos para sua edição.

Partindo desse principio comecei o projeto em Electron que cria uma interface de usuário que lê e executa os arquivos .bat/.sh para evitar a exposição e ainda melhorar a 'disposição' dos arquivos, centralizando tudo em apenas um executável.

# *ANDAMENTO DO PROJETO*

Inicialmente o projeto foi criado usando apenas electron, no entanto, enfrentei problemas ao criar a build, erros de tipagem e também notei que para o projeto abrir espaço para evolução, seria interessante não ficar apenas na lib Electron, então, dei um restart no projeto, iniciando-o com React e incluindo Electron, para assim, ter mais liberdade de criar novas features.

----
## Instruções de funcionamento:

### Requisitos:

Para executar o projeto, deve-se ter instalado localmente:
| Plataforma | Link |
| ---- | ---------------------------------------------------- |
| VSC  | [Visual Studio Code](https://code.visualstudio.com) |
| NODE | [NodeJS](https://nodejs.org/en) |
| GIT  | [GIT](https://git-scm.com) |

### Preparando ambiente

1. Clone o projeto em sua máquina
2. Dentro da pasta do projeto, no terminal, execute o comando: `npm i` para instalar as dependencias do projeto.

### Executando o projeto:

1. Adicione dentro da pasta do projeto, os arquivos que queira que sejam executados.
2. No arquivo `main.js`, adicione as constantes apontando o local dos arquivos a serem executados.
3. No arquivo `index.html`, copie o botão alterando seu texto e na função handleComand de cada botão adicione o nome da constante que queira chamar.
4. Para validar se está funcionando corretamente, execute no terminal: `npm run start`, que abrirá o projeto em sua forma final e valide se os comandos funcionam corretamente.
5. Crie a build do projeto executando o comando `npm run build` no terminal. Isso fará com que seja criado o arquivo para distribuição. 
---

## TODO

 - [ ] Criar página inicial do projeto
 - [ ] Estilizar o sistema
 
 - [ ] Executar arquivos .bat
 - [ ] Executar arquivos .sh

 - [ ] criar botão para adicinoar comandos
 - [ ] criar botão para remover comandos
 - [ ] criar botão para bloquear a remoção dos comandos
 
 - [ ] criar build do projeto.
 
 #### Ideias de melhorias

 - Inserção de novos comandos:
  1. Ao executar a aplicação, lerá os arquivos da pasta e criará um botão para cada executor.
  2. Botão adicionar comando para adicionar novos
  3. Arrastar comandos para o programa e automaticamente será criado um botão relacionado ao item com o nome do arquivo.

 - Um botão que habilita/desabilita a exclusão dos comandos registrados, que para ser habilitado é necessário inserir a senha de adm

---




------------------------
# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.
Created by https://electron-vite.org

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
   parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
   },
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
