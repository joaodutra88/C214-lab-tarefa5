# CRUD básico de filme

![Repo Size](https://img.shields.io/github/repo-size/joaodutra88/C214-lab-tarefa5)
![Linguagens usadas](https://img.shields.io/github/languages/count/joaodutra88/C214-lab-tarefa5)
![Linguagem mais usada](https://img.shields.io/github/languages/top/joaodutra88/C214-lab-tarefa5)
![Última atualização](https://img.shields.io/github/last-commit/joaodutra88/C214-lab-tarefa5)

Este projeto é uma API RESTful construída com Node.js, Express e MongoDB. Ele permite a criação, leitura, atualização e exclusão de informações sobre filmes.
#  Requisitos
Utilizando os conhecimentos adquiridos nas aulas anteriores, crie no mínimo 2 APIs REST de um CRUD básico de filme. Os parâmetros a serem salvos devem ser decididos por vocês (deve conter no mínimo 4 parâmetros, como por exemplo: nome, produtora, atores, ano).


Configuração
Antes de executar o projeto, você precisa ter o Node.js e o MongoDB instalados em sua máquina. Em seguida, siga os passos abaixo:

Clone este repositório:
```
git clone https://github.com/seu-usuario/seu-repositorio.git
```

Navegue até o diretório raiz do projeto:
```
cd seu-repositorio
```

Instale as dependências do projeto:
```
npm install
```

Defina as variáveis ​​de ambiente necessárias (ou crie um arquivo .env na raiz do projeto):
```
MONGO_URI=<sua-uri-mongodb>
PORT=<sua-porta>
```

Execute o servidor:
```
npm start
```

O servidor agora deve estar rodando em `http://localhost:<sua-porta>.`

# Endpoints

Os seguintes endpoints estão disponíveis na API:

## `GET /movies`

Retorna uma lista de todos os filmes cadastrados no banco de dados.

**Exemplo de resposta:**


```
[
{
"_id": "615579b6011b964bf734a8a7",
"title": "Cidade de Deus",
"director": "Fernando Meirelles, Kátia Lund",
"cast": "Alexandre Rodrigues, Leandro Firmino da Hora, Matheus Nachtergaele",
"year": 2002,
"__v": 0
},
{
"_id": "61557b24d3a814c59fa3cf3f",
"title": "Central do Brasil",
"director": "Walter Salles",
"cast": "Fernanda Montenegro, Vinícius de Oliveira, Marília Pêra",
"year": 1998,
"__v": 0
},
...
]
```


## `GET /movies/:id`
Retorna as informações de um filme específico com base em seu ID.

**Exemplo de resposta para /movies/615579b6011b964bf734a8a7:**

```
{
  "_id": "615579b6011b964bf734a8a7",
  "title": "Cidade de Deus",
  "director": "Fernando Meirelles, Kátia Lund",
  "cast": "Alexandre Rodrigues, Leandro Firmino da Hora, Matheus Nachtergaele",
  "year": 2002,
  "__v": 0
}
```

## `POST /movies`
Cria um novo filme com as informações fornecidas no corpo da solicitação.

**Exemplo de corpo da solicitação:**

```
{
  "title": "O Auto da Compadecida",
  "director": "Guel Arraes",
  "cast": "Matheus Nachtergaele, Selton Mello, Rogério Cardoso",
  "year": 2000
}
```
**Exemplo de resposta:**

`Status 201Created`
```
{
  "title": "O Auto da Compadecida",
  "director": "Guel Arraes",
  "cast": "Matheus Nachtergaele, Selton Mello, Rogério Cardoso",
  "year": 2000
}