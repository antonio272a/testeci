const {
  deleteSaleService,
  getAllSalesService,
  createSaleService,
  updateSaleService,
} = require("../services/salesService");

const getAllSales = async (_req, res) => {
  const sales = await getAllSalesService();
  return res.status(200).json(sales);
};

const createSale = async (req, res) => {
  const { key, productId, quantity, value, state } = req.body;
  await createSaleService({key, productId, quantity, value, state});
  return res.status(201).json({ key, productId, quantity, value, state });
};

const updateSale = async (req, res) => {
  const { key } = req.params;
  const { productId, quantity, value, state } = req.body;
  await updateSaleService({ key, productId, quantity, value, state });
  return res.status(200).json({ key, productId, quantity, value, state });
}

const deleteSale = async(req, res) => {
  const { key } = req.params;
  await deleteSaleService(key);
  return res.status(204).end();
}

module.exports = {
  getAllSales,
  deleteSale,
  createSale,
  updateSale,
};