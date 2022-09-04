import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import CartContext from "../../store/cart-context";
import React, { useContext, useState } from "react";
import CartItem from "./CartItem";
import Checkoutform from "./Checkoutform";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasitems = cartCtx.items.length > 0;
  const [isOrdered, setisOrdered] = useState(false);
  const [isSubmitting, setisSubmitting] = useState(false);
  const [didSubmit, setdidSubmit] = useState(false);
  const cartItemaddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };
  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };
  const orderclickHandler = (event) => {
    event.preventDefault();
    setisOrdered(true);
  };
  const submitorderHandler = async (data) => {
    setisSubmitting(true);
    await fetch(
      "https://mymeals-c6eae-default-rtdb.firebaseio.com/myorders.json",
      {
        method: "POST",
        body: JSON.stringify({
          user: data,
          ordereditems: cartCtx.items,
        }),
      }
    );
    setisSubmitting(false);
    setdidSubmit(true);
    cartCtx.clearCart();
  };
  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemaddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );
  const Actions = (
    <div className={classes.actions}>
      <button className={classes["button--alt"]} onClick={props.onClose}>
        Close
      </button>
      {hasitems && (
        <button className={classes.button} onClick={orderclickHandler}>
          Order
        </button>
      )}
    </div>
  );
  const Modalcontent = (
    <React.Fragment>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      {isOrdered && (
        <Checkoutform onConfirm={submitorderHandler} onCancel={props.onClose} />
      )}
      {!isOrdered && Actions}
    </React.Fragment>
  );
  const placed = (
    <React.Fragment>
      <p>Successfully placed your order.</p>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onClose}>
          Close
        </button>
      </div>
    </React.Fragment>
  );
  return (
    <Modal onClose={props.onClose}>
      {!isSubmitting && !didSubmit && Modalcontent}
      {isSubmitting && <p>Placing Your Order...</p>}
      {!isSubmitting && didSubmit && placed}
    </Modal>
  );
};

export default Cart;
