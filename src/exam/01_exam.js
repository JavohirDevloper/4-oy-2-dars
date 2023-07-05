const categories = [
  {
    id: 1,
    name: "Oqtepa Lavash",
  },
  {
    id: 2,
    name: "Nomdor osh somsa",
  },
  {
    id: 3,
    name: "Rayhon",
  },
];

const meals = [
  {
    id: 1,
    name: "Lag'mon",
    price: 25000,
    quantity: 4,
    category_id: 1,
  },
  {
    id: 2,
    name: "Somsa{tovuqli :)}",
    price: 6000,
    quantity: 1,
    category_id: 2,
  },
  {
    id: 3,
    name: "Sendvich",
    price: 32000,
    quantity: 6,
    category_id: 3,
  },
  {
    id: 4,
    name: "Burger",
    price: 17000,
    quantity: 5,
    category_id: 4,
  },
  {
    id: 5,
    name: "Osh",
    price: 27000,
    quantity: 13,
    category_id: 5,
  },
];

const resolvers = {
  Query: {
    meals: () => meals,
    categories: () => categories,
  },
  Meal: {
    category: (parent) => {
      return categories.find((category) => category.id === parent.category_id);
    },
  },
  Category: {
    meals: (parent) => {
      return meals.filter((meal) => meal.category_id === parent.id);
    },
  },
};

export default resolvers;
