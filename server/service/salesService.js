const { getAllSalesModel } = require("../models/salesModel");

const getAllSalesService = async () => getAllSalesModel();

module.exports = { getAllSalesService };