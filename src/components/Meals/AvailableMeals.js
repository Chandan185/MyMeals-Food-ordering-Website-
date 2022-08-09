import classes from "./AvailableMeals.module.css";
import Card from "../UI/Card";
import MealItem from "./Mealitem/MealItem";
const Meals = [
  {
    id: "1",
    name: "Veg Burger",
    description: "Healthy and leafy",
    price: 120,
  },
  {
    id: "2",
    name: "Chicken Burger",
    description: "Roasted Chicken patti",
    price: 160,
  },
  {
    id: "3",
    name: "Pizza",
    description: "Onion,corn",
    price: 200,
  },
  {
    id: "4",
    name: "Veg Noodles",
    description: "served with gravy",
    price: 190,
  },
  {
    id: "5",
    name: "Dosa",
    description: "served with sambhar",
    price: 90,
  },
];
const AvailableMeals = () => {
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
