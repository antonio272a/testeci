import { Route, Routes } from "react-router-dom";
import Products from "./pages/Products";
import Product from "./pages/Product";
import "bootstrap/dist/css/bootstrap.min.css";
import ProductEdit from "./pages/ProductEdit";
import Sales from "./pages/Sales";
import Sale from "./pages/Sale";
import SalesEdit from "./pages/SalesEdit";
import Main from "./pages/Main";
import NotFound from "./pages/NotFound";
import SalesAdd from "./pages/SalesAdd";
import ProductsAdd from "./pages/ProductsAdd";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/products/new" element={<ProductsAdd />} />
        <Route path="/products/:id/edit" element={<ProductEdit />} />
        <Route path="/products/:id" element={<Product />} />
        <Route path="/products" element={<Products />} />
        <Route path="/sales/new" element={<SalesAdd />} />
        <Route path="/sales/:key/edit" element={<SalesEdit />} />
        <Route path="/sales/:key" element={<Sale />} />
        <Route path="/sales" element={<Sales />} />
        <Route path="/" element={<Main />} />
        <Route exact path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
