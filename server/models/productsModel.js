const connection = require('./connection');

const getAllProductsModel = async () => {
  const query = 'SELECT id, nome, fornecedor, preco FROM Loja.produtos';
  const [result] = await connection.execute(query);
  console.log(result);
  return result;
}

module.exports = {
  getAllProductsModel
};