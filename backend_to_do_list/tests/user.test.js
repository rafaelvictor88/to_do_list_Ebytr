// testar a função create do Model, Service e Controller.

const { expect } = require('chai');
const connection = require('../models/connection');
// const { ObjectId } = require('mongodb');

const models = require('../models/userModel');

describe('Quando a função createUserModel for chamada', async () => {
  const name = 'Xablau'
  const email = 'xablau@gmail.com'

  it('deve realizar a conecção com o banco de dados', async () => {
    const response = await models.createUserModel({ name, email });
    expect(response).to.be.an('object');
  });
  
  it('deve realizar a inserção de um novo usuário', async () => {
    const response = await models.createUserModel({ name, email });
    expect(response).to.have.property('acknowledged');
    expect(response).to.have.property('insertedId');
    expect(response.acknowledged).to.be.equal(true);
    // expect(response.insertedId).to.be.equal(ObjectId('620c368c1efa123b296640df'));
  });
});