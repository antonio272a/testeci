import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

function ProductCard({ product }) {
  return (
    <Link
      to={`/products/${product.id}`}
      style={{ width: "200px", heigth: "200px" }}
      className="text-decoration-none lead border border-2 border-secondary mx-2"
    >
      <div className="">{product.nome}</div>
      <p>{product.fornecedor}</p>
    </Link>
  );
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    nome: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    fornecedor: PropTypes.string.isRequired,
  }).isRequired,
}

export default ProductCard
