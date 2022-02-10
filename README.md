<h1 align="center">
<i>JWT Authenticate</i> </a> <br>
</h1>
<p align="center"> projeto desenvolvido para realizar autenticação de usuários com JWT </p>

<h3 align="center">
<img src="https://img.shields.io/static/v1?label=NodeJS&message=Backend&color=339933&style=for-the-badge&logo=Node.js"/> 
<img src="https://img.shields.io/static/v1?label=Express&message=Framework&color=000000&style=for-the-badge&logo=Express"/>
<img src="https://img.shields.io/static/v1?label=TypeScript&message=LANGUAGE&color=3178C6&style=for-the-badge&logo=TypeScript"/> 
<img src="https://img.shields.io/static/v1?label=PostgreSQL&message=DB&color=4169E1&style=for-the-badge&logo=PostgreSQL"/>
</h3>

---

<p align="center">
 <a href="#%EF%B8%8F-projeto">Projeto</a> |
 <a href="#-pré-requisitos">Pré-Requisitos</a> |
 <a href="#-rodando-o-projeto">Rodando o Projeto</a> |
 <a href="#%EF%B8%8F-tecnologias">Tecnologias</a> |
 <a href="#-autor">Autor</a> 
</p>

# 🖥️ Projeto

Projeto foi desenvolvido com pretensão de realizar uma autenticação com [JWT](https://jwt.io/), criando modelo de usuário com email e senha, criptografando a senha do usuário com o [bcrypt](https://www.npmjs.com/package/bcrypt).

A autenticação é realizada com o Bearer Token gerado no momento da autenticação.

Exemplo de um modelo de usuário enviado na hora da requisição post

```js
{
  "route": "localhost:3000/users"
  "method": "post"
}
{
  "email": "camilomarioto@github.com",
  "password": "test"
}
```

Exemplo de como o modelo fica salvo no banco de dados

```js
{
  "email": "camilomarioto@github.com",
  "password": "$2a$08$epHKzKGl8OyUMa.GmFqNyeWphZ5CFq7223hZrxWe4uc.C2ZsZeQOO",
  "id": "68be95c2-aba6-41f8-8b4c-ad73c3fcf0bd"
}
```

Exemplo do modelo enviado na hora da requisição de autenticação

```js
{
  "route": "localhost:3000/auth"
  "method": "post"
}
{
  "email": "camilomarioto@github.com",
  "password": "test"
}
```

Exemplo de como é o retorno da requisição de autenticação

```js
{
  "user": {
    "id": "68be95c2-aba6-41f8-8b4c-ad73c3fcf0bd",
    "email": "camilomarioto@github.com"
  },
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4YmU5NWMyLWFiYTYtNDFmOC04YjRjLWFkNzNjM2ZjZjBiZCIsImlhdCI6MTY0NDUxNTA1MiwiZXhwIjoxNjQ0NjAxNDUyfQ.YnT_uIYD9VsxMPECzBhjIM0ABORMx9sTeTjIrN-Vyts"
}
```

Esse código token gerado, deve ser enviado no Header das próximas requisições para que ocorra a autorização, caso não seja enviado o token ou o token seja invalido a seguinte mensagem é retornada

```js
{
	"msg": "Invalid Authorization"
}
```

# 🎲 Pré-Requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com) e [Node.js](https://nodejs.org/pt-br/).
Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/)

# 🎮 Rodando o Projeto

```bash
# Clone este repositório
$ git clone https://github.com/GabrielMarioto/ts-auth.git

# Acesse a pasta do projeto no terminal
$ cd ts-auth

# Instale as dependências
$ yarn

# Execute a aplicação em modo de desenvolvimento
$ yarn dev
```

# 🛠️ Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

- [NodeJs](https://nodejs.org/pt-br/)
- [Express](https://expressjs.com/pt-br/)
- [Eslint](https://eslint.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [PostgreSQL](https://www.postgresql.org/)
- [TypeORM](https://typeorm.io/#/)
- [JWT](https://jwt.io/)
- [bcrypt](https://www.npmjs.com/package/bcrypt)

# 🙍 Autor

<h1 align="center">
<a href="https://www.linkedin.com/in/gabriel-marioto/">
 <img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/50884596?v=4" width="100px;" alt=""/>
 <br/><br/>
 
[![Facebook](https://img.shields.io/badge/Facebook-1877F2?style=for-the-badge&logo=facebook&logoColor=white)](https://facebook.com/gabrielmarioto)
[![Instagram](https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white)](https://instagram.com/gabrielmarioto_)
[![Linkedin](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/gabriel-marioto/)

</h1>
