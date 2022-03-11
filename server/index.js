require('dotenv').config();
const express = require('express');
const cors = require('cors')
const bodyParser = require('body-parser')
const rescue = require('express-rescue')
const { getAllProducts, createProduct, deleteProduct, updateProduct, getProductById } = require('./controllers/productsController');
const { getAllSales, deleteSale, createSale, updateSale, getSaleByKey, getSaleByKeyWithProduct } = require('./controllers/salesController');
const { startDB } = require('./models/createDb');


const app = express();

app.use(bodyParser.json());

app.use(cors());

app.get('/products', rescue(getAllProducts));

app.get('/products/:id', rescue(getProductById));

app.post('/products', rescue(createProduct));

app.put('/products/:id', rescue(updateProduct));

app.delete('/products/:id', rescue(deleteProduct));

app.get("/sale-with-product/:key", rescue(getSaleByKeyWithProduct));

app.get('/sales/:key', rescue(getSaleByKey));

app.get('/sales', rescue(getAllSales));

app.post('/sales', rescue(createSale));

app.put('/sales/:key', rescue(updateSale));

app.delete('/sales/:key', rescue(deleteSale));

app.use((err, _req, res, _next) => {
  console.log(err);
  return res.status(500).json({ message: err.message })
})

app.listen(process.env.NODE_LOCAL_PORT, async () => {
  console.log(`escutando na porta ${process.env.NODE_LOCAL_PORT}`);
  await startDB();
});