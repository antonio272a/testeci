const PORT = process.env.NODE_SERVER_PORT || 3001;

export const getAllProducts = async () => {
  const url = `http://localhost:${PORT}/products`
  const response = await fetch(url);
  const products = await response.json();
  return products
}

export const getProductById = async (id) => {
  const url = `http://localhost:${PORT}/products/${id}`;
  const response = await fetch(url);
  try {
    const product = await response.json();
    return product;
  } catch (error) {
    return
  };
}

export const createProduct = async (product) => {
  const url = `http://localhost:${PORT}/products/`;
  const response = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(product),
  });
  const { id } = await response.json();
  return id;
};

export const updateProduct = async (id, product) => {
  const url = `http://localhost:${PORT}/products/${id}`;
  await fetch(url, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(product),
  });
}

export const deleteProduct = async (id) => {
  const url = `http://localhost:${PORT}/products/${id}`;
  await fetch(url, {
    method: 'DELETE'
  });
};