import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import { createProduct } from '../services/products';

function ProductsAdd() {
  const navigate = useNavigate();

  const [product, setProduct] = useState({nome: '', fornecedor: '', preco: 0.00});


  const handleInputChange = ({ target: { id, value } }) => {
    setProduct((prev) => ({ ...prev, [id]: value }));
  };

  const handlePriceInputChange = ({ target: { value } }) => {
    setProduct((prev) => ({ ...prev, preco: parseFloat(value) || 0.0 }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { nome, fornecedor, preco } = product;
    const id = await createProduct({ name: nome, provider: fornecedor, price: preco });
    navigate(`/products/${id}`);
  };
  
  return (
    <div>
      <Header />
      <main className="container d-flex flex-column align-items-center">
        <form className="d-flex flex-column align-items-center" onSubmit={handleSubmit}>
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
            <button type="submit" className="btn btn-success btn-lg ">
              Salvar
            </button>
          </div>
        </form>
      </main>
    </div>
  );
}

export default ProductsAdd