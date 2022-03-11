import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { getProductById } from "../services/products";
import { Link, useNavigate } from "react-router-dom";
import ProductCard from "./ProductCard";

function SaleCard({ sale }) {
  const navigate = useNavigate();
  const [product, setProduct] = useState({});

  useEffect(() => {
    const getProduct = async () => {
      const productData = await getProductById(sale.produto_id);
      setProduct(productData);
    };

    getProduct();
  }, [navigate, sale.produto_id]);

  return (
    <Link
      to={`/sales/${sale.chave_nfe}`}
      className="d-flex flex-column align-items center border boder-3 border-dark p-1 text-decoration-none"
      style={{color: 'black'}}
    >
      <p>NF-e: {sale.chave_nfe}</p>
      <p>Produto:</p>
      <ProductCard noLink product={product} />
      <p>Quantidade: {sale.quantidade}</p>
      <p>valor total: {sale.valor}</p>
    </Link>
  );
}

SaleCard.propTypes = {
  sale: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default SaleCard;
