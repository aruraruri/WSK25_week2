import { constructRestaurantList } from "./components.js";
import { fetchData } from "./fetchData.js";
import { alphabeticSort } from "./utils.js";

let restaurants;
await fetchData(
  "https://media2.edu.metropolia.fi/restaurant/api/v1/restaurants"
).then((data) => {
  restaurants = data;
});
console.log(restaurants);

const main = () => {
  // restaurants aakkosjärjestykseen
  alphabeticSort(restaurants);

  constructRestaurantList(restaurants);
};

main();
