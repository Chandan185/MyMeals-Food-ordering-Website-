import classes from "./Checkoutform.module.css";
import { useRef, useState } from "react";
const Checkout = (props) => {
  const nameinputref = useRef();
  const streetinputref = useRef();
  const postalinputref = useRef();
  const cityinputref = useRef();
  const isEmpty = (value) => value.trim() === "";
  const isNotfivechars = (value) => value.trim().length !== 5;
  const [forminputValidity, setforminputValidity] = useState({
    name: true,
    street: true,
    city: true,
    postal: true,
  });

  const confirmHandler = (event) => {
    event.preventDefault();
    const enteredName = nameinputref.current.value;
    const enteredStreet = streetinputref.current.value;
    const enteredPostal = postalinputref.current.value;
    const enteredCity = cityinputref.current.value;

    const enteredNameisvalid = !isEmpty(enteredName);
    const enteredStreetisvalid = !isEmpty(enteredStreet);
    const enteredPostalisvalid = !isEmpty(enteredCity);
    const enteredcityisvalid = isNotfivechars(enteredPostal);
    setforminputValidity({
      name: enteredName,
      street: enteredStreet,
      postal: enteredPostal,
      city: enteredCity,
    });
    const formisValid =
      enteredNameisvalid &&
      enteredStreetisvalid &&
      enteredPostalisvalid &&
      enteredcityisvalid;
    if (!formisValid) {
      return;
    }
    props.onConfirm({
      name: enteredName,
      street: enteredStreet,
      postal: enteredPostal,
      city: enteredCity,
    });
  };
  const namecontrolclasses = `${classes.control} ${
    forminputValidity.name ? "" : classes.invalid
  }`;
  const streetcontrolclasses = `${classes.control} ${
    forminputValidity.street ? "" : classes.invalid
  }`;
  const postalcontrolclasses = `${classes.control} ${
    forminputValidity.postal ? "" : classes.invalid
  }`;
  const citycontrolclasses = `${classes.control} ${
    forminputValidity.city ? "" : classes.invalid
  }`;
  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div className={namecontrolclasses}>
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" ref={nameinputref} />
        {!forminputValidity.name && <p>!Please enter a valid name</p>}
      </div>
      <div className={streetcontrolclasses}>
        <label htmlFor="street">Street</label>
        <input type="text" id="street" ref={streetinputref} />
        {!forminputValidity.street && <p>!Please enter a valid street</p>}
      </div>
      <div className={postalcontrolclasses}>
        <label htmlFor="postal">Postal Code</label>
        <input type="text" id="postal" ref={postalinputref} />
        {!forminputValidity.postal && <p>!Please enter a valid postal code</p>}
      </div>
      <div className={citycontrolclasses}>
        <label htmlFor="city">City</label>
        <input type="text" id="city" ref={cityinputref} />
        {!forminputValidity.city && <p>!Please enter a valid city</p>}
      </div>
      <div className={classes.actions}>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button className={classes.submit} onClick={props.OnConfirm}>
          Confirm
        </button>
      </div>
    </form>
  );
};

export default Checkout;
