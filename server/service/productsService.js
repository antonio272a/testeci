const { getAllProductsModel } = require("../models/productsModel");

const getAllProductsService = async () => getAllProductsModel();

module.exports = {
  getAllProductsService
};