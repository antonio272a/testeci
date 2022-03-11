const {
  deleteSaleService,
  getAllSalesService,
  createSaleService,
  updateSaleService,
  getSaleByKeyService,
  getSaleByKeyWithProductService,
} = require("../services/salesService");

const getAllSales = async (_req, res) => {
  const sales = await getAllSalesService();
  return res.status(200).json(sales);
};

const getSaleByKey = async (req, res) => {
  const { key } = req.params;
  const sale = await getSaleByKeyService(key);
  return res.status(200).json(sale);
}

const getSaleByKeyWithProduct = async (req, res) => {
  const { key } = req.params;
  const sale = await getSaleByKeyWithProductService(key);
  return res.status(200).json(sale);
}

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
  getSaleByKey,
  getSaleByKeyWithProduct,
};