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

const createStatesTable = async () => {
  const query = `CREATE TABLE IF NOT EXISTS Loja.estados (
    id INT PRIMARY KEY,
    nome VARCHAR(30) NOT NULL
  ) ENGINE=INNODB`
  await connection.execute(query);

}

const createSalesTable = async () => {
  const query = `CREATE TABLE IF NOT EXISTS Loja.pedidos (
    chave_nfe VARCHAR(100) PRIMARY KEY,
    produto_id INT NOT NULL,
    quantidade INT NOT NULL,
    valor DOUBLE NOT NULL,
    estado_id INT NOT NULL,
    FOREIGN KEY (produto_id) REFERENCES Loja.produtos(id),
    FOREIGN KEY (estado_id) REFERENCES Loja.estados(id)
    ) ENGINE=INNODB;`;
  await connection.execute(query)
}

const populateProductsTable = async () => {
  const query = `INSERT INTO Loja.produtos (nome, fornecedor, preco)
  VALUES (?, ?, ?)`;
  const products = [
    {name: 'Bola de futebol', provider: 'Adidas', price: 59.90},
    {name: 'Perfume', provider: 'Boticário', price: 100.00},
    {name: 'Shampoo', provider: 'Pantene', price: 25.50}
  ];
  products.forEach(async ({name, provider, price}) => {
    await connection.execute(query, [name, provider, price])
  })
};

const populateStatesTable = async () => {
  const query = `INSERT INTO Loja.estados (id, nome) VALUES
  (1, 'em aberto'),
  (2, 'pago'),
  (3, 'cancelado')`
  await connection.execute(query);
};

const populateSalesTable = async () => {
  const query = `INSERT INTO Loja.pedidos (chave_nfe, produto_id, quantidade, valor, estado_id)
  VALUES (?, ?, ?, ?, ?)`;
  const sales = [
    {key: 'jkmfnajklnasjfa', productId: 1, quantity: 2, value: 119.80, state: 2},
    {key: 'akjfgajkfnajfasd', productId: 2, quantity: 1, value: 25.50, state: 3},
    {key: 'hfgbfgaklsdfjasnd', productId: 3, quantity: 1, value: 100.00, state: 1}
  ]
  sales.forEach(async ({key, productId, quantity, value, state}) => {
    await connection.execute(query, [key, productId, quantity, value, state]);
  })
}


const startDB = async () => {
  await createDataBase();
  await createProductTable();
  await createStatesTable();
  await createSalesTable();
  await populateStatesTable();
  await populateProductsTable();
  await populateSalesTable();
}

module.exports = {
  startDB,
};