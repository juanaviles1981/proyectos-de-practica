import ProductList from "../components/ProductList";
import productos from '../data/products'; 

function Store() {
  return (
    <div className="container mt-4">
      <h2 className="mb-4">Catálogo</h2>
      <ProductList products={productos} />
    </div>
  );
}

export default Store;