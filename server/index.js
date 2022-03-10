require('dotenv').config();
const express = require('express');
const { getAllProducts } = require('./controllers/productsController');
const { getAllSales } = require('./controllers/salesController');
const { createDataBase, createProductTable, createSalesTable } = require('./models/createDb');


const app = express();

app.get('/products', getAllProducts);

app.get('/sales', getAllSales);

app.post('/products', )

app.listen(process.env.NODE_LOCAL_PORT, async () => {
  console.log(`escutando na porta ${process.env.NODE_LOCAL_PORT}`);
  await createDataBase();
  await createProductTable();
  await createSalesTable();
});