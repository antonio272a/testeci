import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Select from "react-select";
import Header from "../components/Header";
import { getAllProducts } from "../services/products";
import { deleteSale, getSaleWithProductByKey, getStates, updateSale } from "../services/sales";

function SalesEdit() {
  const { key } = useParams();
  const navigate = useNavigate();
  const [sale, setSale] = useState({});
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState({});
  const [states, setStates] = useState([]);
  const [selectedState, setSelectedState] = useState({});

  useEffect(() => {
    const fetchStates = async () => {
      const statesData = await getStates();
      setStates(statesData);
      const actualState = statesData.find(
        (state) => state.id === sale.estado_id
      );
      setSelectedState({ label: actualState.nome, value: actualState.id });
    };
    fetchStates();
  }, [sale.estado_id]);

  useEffect(() => {
    const getSale = async () => {
      const saleData = await getSaleWithProductByKey(key);
      if (!saleData) return navigate("/not-found");
      setSale(saleData);
      setSelectedProduct({
        label: saleData.produto,
        value: saleData.produto_id,
      });
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
    setSale((prev) => ({ ...prev, [id]: value }));
  };

  const handleNumbertInputChange = ({ target: { id, value } }) => {
    setSale((prev) => ({ ...prev, [id]: value }));
  };

  const productSelectOptions = products.map(({ id, nome }) => ({
    label: nome,
    value: id,
  }));

  const stateSelectOptions = states.map(({ id, nome }) => ({
    label: nome,
    value: id,
  }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { chave_nfe, quantidade, valor } = sale;
    const estado_id = selectedState.value;
    const produto_id = selectedProduct.value;
    const body = {
      quantity: Number(quantidade),
      value: Number(valor),
      productId: produto_id,
      state: estado_id,
    }
    await updateSale(chave_nfe, body);
    window.location.reload();

  }

  const handleDeleteButton = async () => {
    await deleteSale(sale.chave_nfe)
    navigate('/sales')
  }

  return (
    <div>
      <Header />
      <main className="container mt-5 text-center">
        <form className="d-flex flex-wrap flex-column justify-content-around align-items-center" onSubmit={handleSubmit}>
          <div className="my-3 form-floating">
            <input
              type="text"
              id="chave_nfe"
              className="form-control"
              value={sale.chave_nfe}
              onChange={handleTextInputChange}
            />
            <label htmlFor="chave_nfe">Chave NFE</label>
          </div>
          <div>
          <p>Produto:</p>
          <Select
            value={selectedProduct}
            options={productSelectOptions}
            onChange={(product) => {
              setSelectedProduct(product);
            }}
            />
          </div>
          <div className="my-3 form-floating">
            <input
              type="text"
              id="quantidade"
              className="form-control"
              value={sale.quantidade}
              onChange={handleNumbertInputChange}
              required
            />
            <label htmlFor="quantidade">Quantidade</label>
          </div>
          <div className="my-3 form-floating">
            <input
              type="number"
              id="valor"
              className="form-control"
              value={sale.valor}
              onChange={handleNumbertInputChange}
              required
            />
            <label htmlFor="valor">Valor Total</label>
          </div>
          <div>
            <p>Estado:</p>
            <Select
              value={selectedState}
              options={stateSelectOptions}
              onChange={(state) => {
                setSelectedState(state);
              }}
            />
          </div>
          <div className="w-50 d-flex justify-content-around mt-3">
            <button className="btn btn-success btn-lg" type="submit">
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
        </form>
      </main>
    </div>
  );
}

export default SalesEdit;
