const { getAllSalesService } = require("../service/salesService")

const getAllSales = async (_req, res) => {
  const sales = await getAllSalesService();
  return res.status(200).json(sales);
};

module.exports = { 
  getAllSales
}