require('dotenv').config();
const express = require('express');
const { createDataBase, createProductTable, createSalesTable } = require('./models/createDb');


const app = express();

app.listen(process.env.NODE_PORT, async () => {
  console.log(`escutando na porta ${process.env.NODE_PORT}`);
  await createDataBase();
  await createProductTable();
  await createSalesTable();
});