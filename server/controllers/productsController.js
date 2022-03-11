const { getAllProductsService, deleteProductService, createProductService, updateProductService } = require("../services/productsService");

const getAllProducts = async (_req, res) => {
  const products = await getAllProductsService();
  return res.status(200).json(products);
}

const createProduct = async (req, res) => {
  const {name, provider, price} = req.body;
  const id = await createProductService({name, provider, price});
  return res.status(201).json({id, name, provider, price})
}

const updateProduct = async (req, res) => {
  const { id } = req.params;
  const { name, provider, price } = req.body;
  await updateProductService({id, name, provider, price});
  return res.status(200).json({id, name, provider, price});
}

const deleteProduct = async (req, res) => {
  const { id } = req.params; 
  await deleteProductService(id);
  return res.status(204).end();
}

module.exports = {
  getAllProducts,
  deleteProduct,
  createProduct,
  updateProduct,
};