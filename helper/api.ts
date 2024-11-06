import axios from "axios";

// axios.defaults.baseURL = process.env.REACT_APP_SERVER_DOMAIN;

/** register user function */
export async function registerUser(credentials: any) {
  try {
    console.log("REGISTER", "called");

    const response = await fetch(
      "https://farm-city-be.onrender.com/api/v1/user-mgmt/signup",
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
      }
    );

    console.log("REGISTER", response);
    const responseJson = await response.json();
    console.log("Response:", responseJson);

    return responseJson;
  } catch (error) {
    throw { error };
  }
}

/** login user function */
export async function loginUser(credentials: any) {
  try {
    console.log("LOGIN", "called");

    const response = await fetch(
      "https://farm-city-be.onrender.com/api/v1/user-mgmt/login",
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
      }
    );

    console.log("LOGIN", response);
    const responseJson = await response.json();
    console.log("LOGINResponse:", responseJson);

    return responseJson;
  } catch (error) {
    throw { error };
  }
}