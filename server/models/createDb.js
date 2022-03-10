const connection = require('./connection');

const createDataBase = async () => {
  const query1 = `DROP DATABASE IF EXISTS Loja`;
  const query2 = `CREATE DATABASE Loja`;
  await connection.execute(query1);
  await connection.execute(query2);
}

const createProductTable = async () => {
  const query = `CREATE TABLE IF NOT EXISTS Loja.produtos (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL,
    fornecedor VARCHAR(50) NOT NULL,
    preco DOUBLE NOT NULL
    ) ENGINE=INNODB;`;
  await connection.execute(query);
}

const createSalesTable = async () => {
  const query = `CREATE TABLE IF NOT EXISTS Loja.pedidos (
    chave_nfe INT PRIMARY KEY,
    fornecedor VARCHAR(50) NOT NULL,
    quantidade INT NOT NULL,
    valor DOUBLE NOT NULL
    ) ENGINE=INNODB;`;
  await connection.execute(query)
}

module.exports = {
  createDataBase,
  createProductTable,
  createSalesTable,
};