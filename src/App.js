import Navbar from "./components/Navigation/Navbar";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";
import { useState } from "react";
function App() {
  const [cardIsshown, setcardIsshown] = useState(false);
  const showCartHandler = () => {
    setcardIsshown(true);
  };
  const hideCartHandler = () => {
    setcardIsshown(false);
  };
  return (
    <CartProvider>
      {cardIsshown && <Cart onClose={hideCartHandler} />}
      <Navbar onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
