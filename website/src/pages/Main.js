import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";

function Main() {
  return (
    <div>
      <Header />
      <main className="container d-flex justify-content-around">
        <div
          className="w-25 border border-3 border dark d-flex justify-content-center align-items-center mt-5"
          style={{ minHeight: "100px" }}
        >
          <Link to="/products">Produtos</Link>
        </div>
        <div
          className="w-25 border border-3 border dark d-flex justify-content-center align-items-center mt-5"
          style={{ minHeight: "100px" }}
        >
          <Link
            to="/sales"
          >
            Pedidos
          </Link>
        </div>
      </main>
    </div>
  );
}

export default Main;
