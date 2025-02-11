// import { CartProvider } from "@/contexts/CartContext";  // CartContext کو امپورٹ کریں
// import Cart from "../components/Cart";  // Cart کمپوننٹ کو امپورٹ کریں
// import ProductList from "../components/ProductList";  // پروڈکٹ لسٹ کو امپورٹ کریں
import ProductList from "./ProductList";
import Cart from "./cart/page";
import { CartProvider } from "@/app/CartContext";
function App() {
  return (
    <CartProvider>
      <div>
        <ProductList />
        <Cart />  
      </div>
    </CartProvider>
  );
}

export default App;
