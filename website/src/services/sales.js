const PORT = process.env.NODE_LOCAL_PORT || 3001;

export const getAllSales = async () => {
  const url = `http://localhost:${PORT}/sales`;
  const response = await fetch(url);
  const sales = await response.json();
  return sales;
};

export const getSaleByKey = async (key) => {
  const url = `http://localhost:${PORT}/sales/${key}`;
  const response = await fetch(url);
  try {
    const sales = await response.json();
    return sales;
  } catch (error) {
    return;
  }
};

export const getSaleWithProductByKey = async(key) => {
  const url = `http://localhost:${PORT}/sale-with-product/${key}`;
  try {
    const response = await fetch(url);
    const sale = await response.json();
    return sale;
  } catch (error) {
    return;
  }
} 

export const updateSale = async (id, sale) => {
  const url = `http://localhost:${PORT}/sales/${id}`;
  await fetch(url, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(sale),
  });
};

export const deleteSale = async (key) => {
  const url = `http://localhost:${PORT}/sales/${key}`;
  await fetch(url, {
    method: "DELETE",
  });
};
