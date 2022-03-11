const connection = require("./connection");

const getAllSalesModel = async () => {
  const query = 'SELECT chave_nfe, produto_id, quantidade, valor, estado_id FROM Loja.pedidos';
  const [result] = await connection.execute(query);
  return result;
}

const getSaleByKeyModel = async (key) => {
  const query = `SELECT s.chave_nfe, s.produto_id, s.quantidade, s.valor, e.nome as estado
  FROM Loja.pedidos s
  INNER JOIN Loja.estados e
  ON e.id = s.estado_id
  WHERE s.chave_nfe=?;`
  const [result] = await connection.execute(query, [key]);
  return result[0];
}

const getSaleByKeyWithProductModel = async (key) => {
  const query = `SELECT s.chave_nfe, s.produto_id, s.quantidade, s.valor, s.estado_id, p.nome as produto
  FROM Loja.pedidos s
  INNER JOIN Loja.produtos p
  ON s.produto_id = p.id
  WHERE s.chave_nfe=?`;
  const [result] = await connection.execute(query, [key]);
  return result[0];
};

const getStatesModel = async () => {
  const query = `SELECT id, nome FROM Loja.estados`;
  const [result] = await connection.execute(query);
  return result;
} 

const createSaleModel = async ({ key, productId, quantity, value, state }) => {
  const query = `INSERT INTO Loja.pedidos (chave_nfe, produto_id, quantidade, valor, estado_id)
  VALUES (?, ?, ?, ?, ?);`;
  await connection.execute(query, [
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
  getSaleByKeyModel,
  getSaleByKeyWithProductModel,
  getStatesModel,
};