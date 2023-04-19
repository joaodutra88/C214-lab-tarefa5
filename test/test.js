const app = require('../index');
const request = require('supertest');
const db = require('../src/config/db');


// Dados de teste para adicionar e atualizar um filme
const testMovie = { title: 'Filme Teste', year: 2022 };
const updatedMovie = { title: 'Filme Atualizado', year: 2022 };

beforeAll(async () => {
  await db.connectDB();
});

afterAll(async () => {
  await db.close();
});


describe('Testes para adicionar, atualizar, pesquisar e retirar um filme', () => {
  let movieId;

  test('Adiciona um novo filme no db', async () => {
    const response = await request(app)
      .post('/movies')
      .send(testMovie)
      .expect(201);

    expect(response.body.title).toBe(testMovie.title);
    expect(response.body.year).toBe(testMovie.year);

    movieId = response.body._id;
  });

  test('Atualiza um filme existente no db', async () => {
    const response = await request(app)
      .put(`/movies/${movieId}`)
      .send(updatedMovie)
      .expect(200);

    expect(response.body.title).toBe(updatedMovie.title);
    expect(response.body.year).toBe(updatedMovie.year);
  });

  test('Retorna um filme válido do db', async () => {
    const response = await request(app)
      .get(`/movies/${movieId}`)
      .expect(200);

    expect(response.body.title).toBe(updatedMovie.title);
    expect(response.body.year).toBe(updatedMovie.year);
  });

  test('Remove um filme válido do db', async () => {
    const response = await request(app)
      .delete(`/movies/${movieId}`)
      .expect(200);

    expect(response.body.message).toBe('Filme removido com sucesso');
  });
});
