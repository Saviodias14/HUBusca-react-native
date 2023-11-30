# Cadastro de Funcionários

## Descrição

Essa é uma aplicação voltada para buscar contas e repositórios no GitHub. Ela permite que você faça pesquisas de usuários, encotre contas e seus respectivos repositórios. Dessa forma, fica muito mais fácil de buscar repositórios, já que o aplicativo mobile fica na palma da sua mão. Também existe a funcionalidade do hitórico que guarda as ultimas contas acessadas, priorizando as mais recentes. 

## Índice

- [Instalação](#instalação)
- [Arquivos](#arquivos)

## Instalação

Para instalar o projeto, basta rodar o comando:

```bash
npm install 
```
Depois, vamos precisar dar o comando:
```bash
npx expo start
```
E o projeto já está rodando.

## Arquivos

Agora vamos falar um pouco sobre a construção do projeto e a funcionalidade de cada pasta. Temos as seguintes pastas:
- components: Que guarda os arquivos que componentizam uma página;
- constants: Que guardam dados constantes com cor ou valores numéricos;
- helpers: Contém funções que auxiliam na lógica do código;
- pages: Contém as páginas principais que serão renderizadas conforme a rota;
Por fim, temos o `App.tsx`, que é o componente principal responsável por armazenar as rotas de cada página e direcioná-las.

