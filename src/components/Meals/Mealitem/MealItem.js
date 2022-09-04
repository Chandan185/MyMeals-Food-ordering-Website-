import { useContext } from "react";
import CartContext from "../../../store/cart-context";
import classes from "./MealItem.module.css";
import MealItemForm from "./Mealitemform";
const MealItem = (props) => {
  const cartctx = useContext(CartContext);
  const price = `$${props.price}`;

  const addToCartHandler = (Amount) => {
    cartctx.addItem({
      id: props.id,
      name: props.name,
      amount: Amount,
      price: props.price,
    });
  };
  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <MealItemForm id={props.id} onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
};
export default MealItem;
