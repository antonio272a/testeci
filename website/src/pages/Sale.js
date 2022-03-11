import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Header from '../components/Header';
import ProductCard from '../components/ProductCard';
import { getProductById } from '../services/products';
import { deleteSale, getSaleByKey } from '../services/sales';

function Sale() {
  const { key } = useParams();
  const navigate = useNavigate();
  const [sale, setSale] = useState({});
  const [product, setProduct] = useState({});

 useEffect(() => {
   const getSale = async () => {
     const saleData = await getSaleByKey(key);
     if (!saleData) return navigate("/not-found");
     setSale(saleData);
   };

   getSale();
 }, [key, navigate]);

 useEffect(() => {
    const getProduct = async () => {
      const productData = await getProductById(sale.produto_id);
      if(!productData) return
      setProduct(productData);
    };

    getProduct();
  }, [navigate, sale.produto_id]);

  const handleEditButton = () => {
    navigate(`/sales/${key}/edit`)
  }

  const handleDeleteButton = () => {
    deleteSale(key)
    navigate('/sales')
  }

  return (
    <div>
      <Header />
      <main className="container text-center d-flex flex-column align-items-center mt-5">
        <section className=" d-flex flex-column align-items-center">
          <h2>Pedido: {sale.chave_nfe}</h2>
          <p className="my-2 fs-3">Produto:</p>
          <ProductCard noLink product={product} />
          <p className="fs-5 my-2">Quantidade: {sale.quantidade}</p>
          <p className="fs-5 my-2">Valor total: {sale.valor}</p>
          <p className="fs-5">Estado: {sale.estado}</p>
        </section>
        <div className="w-50 d-flex mt-3 justify-content-around">
          <button
            type="button"
            className="btn btn-primary btn-lg"
            onClick={handleEditButton}
          >
            Editar
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

export default Sale