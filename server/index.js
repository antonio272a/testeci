require('dotenv').config();
const express = require('express');
const { getAllProducts } = require('./controllers/productsController');
const { createDataBase, createProductTable, createSalesTable } = require('./models/createDb');


const app = express();

app.get('/products', getAllProducts)

app.listen(process.env.NODE_LOCAL_PORT, async () => {
  console.log(`escutando na porta ${process.env.NODE_LOCAL_PORT}`);
  await createDataBase();
  await createProductTable();
  await createSalesTable();
});