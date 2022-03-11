const connection = require('./connection');

const getAllProductsModel = async () => {
  const query = 'SELECT id, nome, fornecedor, preco FROM Loja.produtos';
  const [result] = await connection.execute(query);
  return result;
}

const getProductByIdModel = async (id) => {
  const query = `SELECT id, nome, fornecedor, preco FROM Loja.produtos WHERE id=?`;
  const [result] = await connection.execute(query, [id]);
  return result[0]
}

const createProductModel = async ({ name, provider, price }) => {
  const query = `INSERT INTO Loja.produtos (nome, fornecedor, preco)
  VALUES (?, ?, ?)`;
  console.log(name, provider, price);
  const [result] = await connection.execute(query, [name, provider, price]);
  return result.insertId;
}

const updateProductModel = async ({id, name, provider, price }) => {
  const query = `UPDATE Loja.produtos
  SET nome=?, fornecedor=?, preco=?
  WHERE id=?`;
  await connection.execute(query, [name, provider, price, id]);
}

const deleteProductModel = async (id) => {
  const query = 'DELETE FROM Loja.produtos WHERE id=?'
  await connection.execute(query, [id]);
}

module.exports = {
  getAllProductsModel,
  deleteProductModel,
  createProductModel,
  updateProductModel,
  getProductByIdModel,
};