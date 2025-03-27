"use strict";
const fetchUser = async () => {
  try {
    const response = await fetch("https://reqres.in/api/users/1");
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log(error.message);
  }
};

fetchUser();

// fetchUser().then((data) => {
//   console.log(data);
// });
