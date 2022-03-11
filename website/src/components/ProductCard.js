import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

function ProductCard({ product, noLink }) {
  const withLink = (
    <Link
      to={`/products/${product.id}`}
      className="text-decoration-none"
      style={{ width: "200px", heigth: "200px", color: "black" }}
    >
      <div className="">{product.nome}</div>
      <p>{product.fornecedor}</p>
    </Link>
  );

  const withoutLink = (
    <div>
      <div className="">{product.nome}</div>
      <p>{product.fornecedor}</p>
    </div>
  )

  return (
    <div
      style={{ width: "200px", heigth: "200px", color: "black" }}
      className="text-decoration-none lead border border-2 border-secondary mx-2"
    >
      {noLink ? withoutLink : withLink}
    </div>
  );
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    nome: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    fornecedor: PropTypes.string.isRequired,
  }).isRequired,
  noLink: PropTypes.bool
};

ProductCard.defaultProps = {
  noLink: false,
}

export default ProductCard
