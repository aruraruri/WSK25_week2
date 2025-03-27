async function postUserData() {
  const url = "https://reqres.in/api/users";
  const userData = {
    name: "Jonathan Joestar",
    job: "Adventurer Extraordinaire",
  };

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const responseData = await response.json();
    console.log("Response data:", responseData);

    return responseData;
  } catch (error) {
    console.error("Error posting user data:", error);
  }
}

// Call the function
postUserData();
