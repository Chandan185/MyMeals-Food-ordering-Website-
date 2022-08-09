import classes from "./Mealitemform.module.css";
import Input from "../../UI/Input";
import { useState, useRef } from "react";
const MealItemForm = (props) => {
  const [amountIsvalid, setamountIsvalid] = useState(true);
  const amountinputref = useRef();
  const submitHandler = (event) => {
    event.preventDefault();
    const enteredAmount = amountinputref.current.value;
    const enteredAmountnumber = +enteredAmount;
    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountnumber < 1 ||
      enteredAmountnumber > 5
    ) {
      setamountIsvalid(false);
      return;
    }
    props.onAddToCart(enteredAmountnumber);
  };
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={amountinputref}
        label="Amount"
        input={{
          id: "amount",
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button className={classes.button}>+ Add</button>
      {amountIsvalid === false && <p>Please Enter a Valid Amount [1-5]</p>}
    </form>
  );
};
export default MealItemForm;
