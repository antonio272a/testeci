import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import Header from '../components/Header'
import { getProductById } from '../services/products';

function Product() {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const [product, setProduct] = useState({});

  useEffect(() => {
    const getProduct = async () => {
      const productData = await getProductById(id);
      if (!productData) return navigate("/not-found"); 
      setProduct(productData);
    }
    
    getProduct()
  }, [id, navigate])

  return (
    <div>
      <Header />
      <main className='container d-flex flex-column align-items-center'>
      <div className='mt-3 text-center'>
        <p className='fs-2 fw-bold'>Produto: {product.nome}</p>
        <p className='fs-4'>Fornecedor: {product.fornecedor}</p>
        <p className='fs-6'>Preço: {product.preco}</p>
      </div>
      <button className='btn btn-primary' onClick={() => {navigate(`/products/${id}/edit`)}}>Editar</button>
      </main>
    </div>
  )
}

export default Product