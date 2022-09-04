import { useReducer } from "react";

import CartContext from "./cart-context";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    const existingCartitemindex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    const existingCartitem = state.items[existingCartitemindex];
    let updatedItems;
    if (existingCartitem) {
      const updatedItem = {
        ...existingCartitem,
        amount: existingCartitem.amount + action.item.amount,
      };
      updatedItems = [...state.items];
      updatedItems[existingCartitemindex] = updatedItem;
    } else {
      updatedItems = state.items.concat(action.item);
    }
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }
  if (action.type === "REMOVE") {
    const existingitemindex = state.items.findIndex(
      (item) => item.id === action.id
    );
    const existingitem = state.items[existingitemindex];
    const updatedAmount = state.totalAmount - existingitem.price;
    let updateditems;
    if (existingitem.amount === 1) {
      updateditems = state.items.filter((item) => item.id !== action.id);
    } else {
      const updatedItem = {
        ...existingitem,
        amount: existingitem.amount - 1,
      };
      updateditems = [...state.items];
      updateditems[existingitemindex] = updatedItem;
    }
    return {
      items: updateditems,
      totalAmount: updatedAmount,
    };
  }
  if (action.type === "CLEAR") {
    return defaultCartState;
  }
  return defaultCartState;
};

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addItemToCartHandler = (item) => {
    dispatchCartAction({ type: "ADD", item: item });
  };

  const removeItemFromCartHandler = (id) => {
    dispatchCartAction({ type: "REMOVE", id: id });
  };
  const clearCartHandler = () => {
    dispatchCartAction({ type: "CLEAR" });
  };
  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
    clearCart: clearCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
