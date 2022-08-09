import React, { useContext, useEffect, useState } from "react";
import CartIcon from "../Cart/CartIcon";
import classes from "./cartButton.module.css";
import CartContext from "../../store/cart-context";
const ButtonCart = (props) => {
  const [animatebtn, setanimatebtn] = useState(false);
  const cartctx = useContext(CartContext);
  const btnclasses = `${classes.button} ${animatebtn ? classes.bump : ""}`;
  const { items } = cartctx;
  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setanimatebtn(true);
    const timer = setTimeout(() => {
      setanimatebtn(false);
    }, 300);
    return () => {
      clearTimeout(timer);
    };
  }, [items]);
  const numberofCartitems = items.reduce((curr, item) => {
    return curr + item.amount;
  }, 0);
  return (
    <button className={btnclasses} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>YourCart</span>
      <span className={classes.badge}>{numberofCartitems}</span>
    </button>
  );
};

export default ButtonCart;
