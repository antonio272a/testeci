import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import ProductCard from '../components/ProductCard';
import { getAllProducts } from '../services/products'

function Products() {
  
  const [products, setProducts] = useState([]);
  
  useEffect(() => {
    const getProducts = async () => {
      const productsData = await getAllProducts()
      setProducts(productsData);
    }
    getProducts();
  }, [])
  console.log(products);
  return (
    <div>
      <Header />
      <main className=' container d-flex flex-column align-items-center text-center'>
        <p className='fs-3 fw-bold my-3'>Produtos</p>
        <section 
          className='d-flex flex-wrap justify-content-around border boder-2 border-dark p-4 mx-2 align-items-start'
          style={{minHeight: '100vh'}}
        >
        {products.map((product) => (
          <ProductCard key={`product-${product.id}`} product={product} />
          ))}
        </section>
      </main>
    </div>
  )
}

export default Products