import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from "react-router-dom";
import Select from 'react-select';
import Header from '../components/Header';
import { getAllProducts, getProductById } from '../services/products';
import { getSaleByKey, getSaleWithProductByKey } from "../services/sales";



function SalesEdit() {
  const { key } = useParams();
  const navigate = useNavigate();
  const [sale, setSale] = useState({});
  const [products, setProducts] = useState({});

  useEffect(() => {
    const getSale = async () => {
      const saleData = await getSaleWithProductByKey(key);
      if (!saleData) return navigate("/not-found");
      setSale(saleData);
    };

    getSale();
  }, [key, navigate]);

  useEffect(() => {
    const getProduct = async () => {
      const productsData = await getAllProducts();
      if (!productsData) return;
      setProducts(productsData);
    };

    getProduct();
  }, [navigate, sale.produto_id]);
  
  const handleTextInputChange = ({ target: { id, value } }) => {
    setSale((prev) => ({ ...prev, [id]: value}));
  }

  const product_select_options = () => {

  }

  return (
    <div>
      <Header />
      <main className="container mt-5">
        <form className="d-flex flex-wrap justify-content-around">
          <div className="mb-3 form-floating">
            <input
              type="text"
              id="chave_nfe"
              className="form-control"
              value={sale.chave_nfe}
              onChange={handleTextInputChange}
            />
            <label htmlFor="chave_nfe">Chave NFE</label>
          </div>
          <Select />
        </form>
      </main>
    </div>
  );
}

export default SalesEdit