const { getAllProductsModel, deleteProductModel, createProductModel, updateProductModel } = require('../models/productsModel');

const getAllProductsService = async () => getAllProductsModel();

const createProductService = async (payload) => createProductModel(payload);

const updateProductService = async(payload) => updateProductModel(payload);

const deleteProductService = async (id) => deleteProductModel(id);

module.exports = {
  getAllProductsService,
  deleteProductService,
  createProductService,
  updateProductService,
};