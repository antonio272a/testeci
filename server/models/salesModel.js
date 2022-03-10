const connection = require("./connection");

const getAllSalesModel = async () => {
  const query = 'SELECT chave_nfe, fornecedor, quantidade, valor FROM Loja.pedidos';
  const [result] = await connection.execute(query);
  return result;
}

module.exports = {
  getAllSalesModel,
};