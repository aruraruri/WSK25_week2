async function fetchData(url, options) {
  const response = await fetch(url, options);
  const json = await response.json();
  return json;
}

let restaurants;

await fetchData(
  "https://media2.edu.metropolia.fi/restaurant/api/v1/restaurants"
).then((data) => {
  restaurants = data;
});

const taulukko = document.querySelector("table");
const modal = document.querySelector("#modal");

// restaurants aakkosjärjestykseen
restaurants.sort(function (a, b) {
  return a.name.toUpperCase() > b.name.toUpperCase() ? 1 : -1;
});

// Options for retrieving location information (optional)
const options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0,
};

function success(pos) {
  const crd = pos.coords;

  // muista geoJSON, long ensin
  const alkupiste = [crd.longitude, crd.latitude];

  console.log(alkupiste);

  // restaurants aakkosjärjestykseen
  restaurants.sort(function (a, b) {
    return a.name.toUpperCase() > b.name.toUpperCase() ? 1 : -1;
  });

  console.log(restaurants);

  for (const restaurant of restaurants) {
    // rivi
    const tr = document.createElement("tr");

    tr.addEventListener("click", async () => {
      for (let elem of document.querySelectorAll(".highlight")) {
        elem.classList.remove("highlight");
      }
      tr.classList.add("highlight");

      let dailyMenu;
      await fetchData(
        `https://media2.edu.metropolia.fi/restaurant/api/v1/restaurants/daily/${restaurant._id}/fi`
      ).then((data) => {
        dailyMenu = data;
      });

      dailyMenu;

      // construct daily menu
      const menuh3 = document.createElement("h3");

      // construct modal
      modal.innerHTML = "";
      // nimi h3
      const nameh3 = document.createElement("h3");
      nameh3.innerText = restaurant.name;
      // osoite p
      const addressP = document.createElement("p");
      addressP.innerText = restaurant.address;
      // kaupunki
      const cityP = document.createElement("p");
      cityP.innerText = restaurant.city;
      // phone
      const phoneP = document.createElement("p");
      phoneP.innerText = restaurant.phone;
      // postiosoite
      const postal = document.createElement("p");
      postal.innerText = "Postal code: " + restaurant.postalCode;
      // yrityksen nimi
      const compName = document.createElement("p");
      compName.innerText = restaurant.company;

      modal.append(nameh3, compName, addressP, cityP, postal, phoneP, menuh3);

      console.log(dailyMenu);
      for (let menuItem of dailyMenu["courses"]) {
        const meal = document.createElement("p");
        meal.innerText = menuItem.name;
        modal.appendChild(meal);
      }

      modal.showModal();
    });
    // nimi solu
    const nameTd = document.createElement("td");
    nameTd.innerText = restaurant.name;
    // osoite solu
    const addressTd = document.createElement("td");
    addressTd.innerText = restaurant.address;
    // kaupunki solu
    const cityTd = document.createElement("td");
    cityTd.innerText = restaurant.city;
    // listaan lisäys
    tr.append(nameTd, addressTd, cityTd);
    taulukko.appendChild(tr);
  }
}

// Function to be called if an error occurs while retrieving location information
function error(err) {
  console.log(err.message);
}

navigator.geolocation.getCurrentPosition(success, error, options);
