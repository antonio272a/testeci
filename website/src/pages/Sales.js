import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Header from '../components/Header'
import SaleCard from '../components/SaleCard';
import { getAllSales } from '../services/sales';

function Sales() {
  
  const [sales, setSales] = useState([]);

  useEffect(() => {
    const getSales = async () => {
      const productsData = await getAllSales();
      setSales(productsData);
    };
    getSales();
  }, []);

  return (
    <div>
      <Header />
      <main className="container d-flex flex-column align-items-center text-center">
        <div className='d-flex flex-column'>
          <p className="fs-3 fw-bold my-3">Pedidos</p>
          <Link className="btn btn-primary mb-3" to="/products/new">
            Novo Pedido
          </Link>
        </div>
        <section
          className="d-flex flex-wrap justify-content-around border boder-2 border-dark p-4 mx-2 align-items-start w-100"
          style={{ minHeight: "100vh" }}
        >
          {sales.map((sale) => (
            <SaleCard key={`sale-${sale.chave_nfe}`} sale={sale} />
          ))}
        </section>
      </main>
    </div>
  );
}

export default Sales