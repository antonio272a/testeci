import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Header from "../components/Header";
import { deleteProduct, getProductById, updateProduct } from "../services/products";

function ProductEdit() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState({});

  useEffect(() => {
    const getProduct = async () => {
      const productData = await getProductById(id);
      if (!productData) return navigate("/not-found");
      setProduct(productData);
    };

    getProduct();
  }, [id, navigate]);

  const handleInputChange = ({ target: { id, value } }) => {
    setProduct((prev) => ({ ...prev, [id]: value }));
  };

  const handlePriceInputChange = ({target: { value }}) => {
    setProduct((prev) => ({...prev, preco: parseFloat(value) || 0.00}))
  }

  const handleSaveButton = async () => {
    const {nome, fornecedor, preco} = product;
    updateProduct(id, {name: nome, provider: fornecedor, price: preco});
  };

  const handleDeleteButton = async () => {
    deleteProduct(id);
    navigate('/products')
  }

  return (
    <div>
      <Header />
      <main className="container d-flex flex-column align-items-center">
        <div className="my-2 fs-2">Editar Produto:</div>
        <section className="d-flex flex-wrap justify-content-around mt-4">
          <div className="form-floating mb-3 mx-2">
            <input
              className="form-control"
              type="text"
              value={product.nome}
              id="nome"
              onChange={handleInputChange}
              required
            />
            <label htmlFor="nome">Produto</label>
          </div>
          <div className="form-floating mx-2">
            <input
              className="form-control"
              type="text"
              value={product.fornecedor}
              id="fornecedor"
              onChange={handleInputChange}
              required
            />
            <label htmlFor="fornecedor">Fornecedor</label>
          </div>
          <div className="form-floating">
            <input
              type="text"
              id="preco"
              value={product.preco}
              className="form-control"
              onChange={handlePriceInputChange}
              required
            />
            <label htmlFor="preco">Preço</label>
          </div>
        </section>
        <div className="d-flex mt-4 w-50 justify-content-around">
          <button
            type="button"
            className="btn btn-success btn-lg "
            onClick={handleSaveButton}
          >
            Salvar
          </button>
          <button
            type="button"
            className="btn btn-danger btn-lg"
            onClick={handleDeleteButton}
          >
            Deletar
          </button>
        </div>
      </main>
    </div>
  );
}

export default ProductEdit;
