const { getAllProductsModel, deleteProductModel, createProductModel, updateProductModel, getProductByIdModel } = require('../models/productsModel');

const getAllProductsService = async () => getAllProductsModel();

const getProductByIdService = async(id) => getProductByIdModel(id);

const createProductService = async (payload) => createProductModel(payload);

const updateProductService = async(payload) => updateProductModel(payload);

const deleteProductService = async (id) => deleteProductModel(id);

module.exports = {
  getAllProductsService,
  deleteProductService,
  createProductService,
  updateProductService,
  getProductByIdService,
};