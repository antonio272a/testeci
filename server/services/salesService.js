const { getAllSalesModel, deleteSaleModel, createSaleModel, updateSaleModel, getSaleByKeyModel, getSaleByKeyWithProductModel } = require("../models/salesModel");

const getAllSalesService = async () => getAllSalesModel();

const getSaleByKeyService = async (key) => getSaleByKeyModel(key); 

const getSaleByKeyWithProductService = async (key) => getSaleByKeyWithProductModel(key);

const createSaleService = async (payload) => createSaleModel(payload)

const updateSaleService = async (payload) => updateSaleModel(payload);

const deleteSaleService = async (key) => deleteSaleModel(key);

module.exports = {
  getAllSalesService,
  deleteSaleService,
  createSaleService,
  updateSaleService,
  getSaleByKeyService,
  getSaleByKeyWithProductService,
};