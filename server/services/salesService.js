const { getAllSalesModel, deleteSaleModel, createSaleModel, updateSaleModel } = require("../models/salesModel");

const getAllSalesService = async () => getAllSalesModel();

const createSaleService = async (payload) => createSaleModel(payload)

const updateSaleService = async (payload) => updateSaleModel(payload);

const deleteSaleService = async (key) => deleteSaleModel(key);

module.exports = {
  getAllSalesService,
  deleteSaleService,
  createSaleService,
  updateSaleService,
};