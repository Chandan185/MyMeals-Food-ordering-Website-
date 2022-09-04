import React, { Fragment } from "react";
import Mealsimage from "../../assets/bg2image.avif";
import classes from "./Navbar.module.css";
import ButtonCart from "./cartButton";
const Navbar = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>MyMeals</h1>
        <ButtonCart onClick={props.onShowCart} />
      </header>
      <div className={classes["main-image"]}>
        <img src={Mealsimage} alt="img" />
        <div className={classes.brand}>
          <h1>MyMeals Welcomes you on board.</h1>
        </div>
      </div>
    </Fragment>
  );
};
export default Navbar;
