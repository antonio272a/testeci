const PORT = process.env.NODE_LOCAL_PORT || 3001;

export const getAllProducts = async () => {
  const url = `http://localhost:${PORT}/products`
  const response = await fetch(url);
  const products = await response.json();
  return products
}


