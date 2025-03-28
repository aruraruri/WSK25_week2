import { constructRestaurantList } from "./components.js";
import { alphabeticSort, fetchData } from "./utils.js";
import { restaurantsUrl } from "./variables.js";

let restaurants;
await fetchData(restaurantsUrl).then((data) => {
  restaurants = data;
});
console.log(restaurants);

const main = () => {
  // restaurants aakkosjärjestykseen
  alphabeticSort(restaurants);

  constructRestaurantList(restaurants);
};

main();
