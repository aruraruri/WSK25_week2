"use strict";
const url = "https://reqres.in/api/unknown/23";

const fetchUser = async () => {
  try {
    const response = await fetch(url);
    const data = await response.json();

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    console.log(data);
    return data;
  } catch (error) {
    console.log(error.message);
  }
};

fetchUser().then(() => {
  console.log("Code execution still works!");
});

async function deleteUser(userId) {
  const url = `https://reqres.in/api/users/${userId}`;

  try {
    const response = await fetch(url, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    // A successful DELETE request returns a 204 (No Content)
    if (response.status === 204) {
      console.log(`User with ID ${userId} deleted successfully.`);
      return { success: true, status: response.status };
    }
  } catch (error) {
    console.error("Error deleting user:", error);
    return { success: false, error: error.message };
  }
}

deleteUser();
