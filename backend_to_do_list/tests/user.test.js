// testar a função create do Model, Service e Controller.

const { expect } = require('chai');
// const connection = require('../models/connection');
// const { ObjectId } = require('mongodb');

const models = require('../models/userModel');
const services = require('../services/userService');

describe.skip('Quando a função models.createUser for chamada', () => {
  const name = 'Xablau';
  const email = 'xablau@gmail.com';

  it('deve criar um novo usuário', async () => {
    const response = await models.createUser({ name, email });

    // const id = ObjectId(response.insertedId);
    expect(response).to.be.an('object');
    expect(response).to.have.property('acknowledged');
    expect(response).to.have.property('insertedId');
    expect(response.acknowledged).to.be.equal(true);
    // expect(response.insertedId).to.be.equal(id);
  });
});

describe('Quando a função services.createUser for chamada', () => {
  it('deve retornar um objeto com as informações do novo usuário cadastrado', async () => {
    const name = 'Xablau';
    const email = 'xablau@gmail.com';
    const response = await services.createUser({ name, email });

    expect(response).to.be.an('object').to.have.keys('name', 'email');
  });
});