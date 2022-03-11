const connection = require("./connection");

const getAllSalesModel = async () => {
  const query = 'SELECT chave_nfe, produto_id, quantidade, valor, estado_id FROM Loja.pedidos';
  const [result] = await connection.execute(query);
  return result;
}

const createSaleModel = async ({ key, productId, quantity, value, state }) => {
  const query = `INSERT INTO Loja.pedidos (chave_nfe, produto_id, quantidade, valor, estado_id)
  VALUES (?, ?, ?, ?, ?);`;
  const [result] = await connection.execute(query, [
    key,
    productId,
    quantity,
    value,
    state,
  ]);
}

const updateSaleModel = async ({ key, productId, quantity, value, state }) => {
  const query = `UPDATE Loja.pedidos
  SET produto_id=?, quantidade=?, valor=?, estado_id=?
  WHERE chave_nfe=?`;
  await connection.execute(query, [productId, quantity, value, state, key]);
}; 

const deleteSaleModel = async (key) => {
  const query = 'DELETE FROM Loja.pedidos WHERE chave_nfe=?';
  await connection.execute(query, [key]);
}

module.exports = {
  getAllSalesModel,
  deleteSaleModel,
  createSaleModel,
  updateSaleModel,
};