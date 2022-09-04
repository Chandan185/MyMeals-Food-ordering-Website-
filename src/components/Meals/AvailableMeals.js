import classes from "./AvailableMeals.module.css";
import Card from "../UI/Card";
import MealItem from "./Mealitem/MealItem";
import { useEffect, useState } from "react";

const AvailableMeals = () => {
  const [Meals, setMeals] = useState([]);
  const [isLoading, setisLoading] = useState(true);
  const [httperror, sethttperror] = useState();
  useEffect(() => {
    const fetchMeals = async () => {
      const response = await fetch(
        "https://mymeals-c6eae-default-rtdb.firebaseio.com/meals.json"
      );
      if (!response.ok) {
        throw new Error("something went wrong!");
      }
      const responseData = await response.json();
      const loadedMeals = [];
      for (const key in responseData) {
        loadedMeals.push({
          id: key,
          name: responseData[key].name,
          description: responseData[key].description,
          price: responseData[key].price,
        });
      }
      setMeals(loadedMeals);
      setisLoading(false);
    };
    fetchMeals().catch((error) => {
      setisLoading(false);
      sethttperror(error);
    });
  }, []);
  if (isLoading) {
    return (
      <section className={classes.Loading}>
        {isLoading && <p>Loading...</p>}
      </section>
    );
  }
  if (httperror) {
    return (
      <section className={classes.errorLoading}>
        <p>Failed to load! Try again later.</p>
      </section>
    );
  }
  const meallist = Meals.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      price={meal.price}
      description={meal.description}
    />
  ));
  return (
    <section className={classes.meals}>
      <Card>
        <ul>{meallist}</ul>
      </Card>
    </section>
  );
};
export default AvailableMeals;
