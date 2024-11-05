import axios from "axios";

// axios.defaults.baseURL = process.env.REACT_APP_SERVER_DOMAIN;

/** register user function */
export async function registerUser(credentials: any) {
  try {
    console.log("REGISTER", "called");
    //  const response = await axios.post(
    //     "https://farm-city-be.onrender.com/api/v1/user-mgmt/signup",
    //     credentials
    //   );
    // const reponse = fetch(
    //   "https://farm-city-be.onrender.com/api/v1/user-mgmt/signup"
    // );
    // const response = await fetch(
    //   "https://farm-city-be.onrender.com/api/v1/user-mgmt/signup",
    //   {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(credentials),
    //   }
    // );

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

    // if (!response.ok) {
    //   throw new Error(`HTTP error! Status: ${response.status}`);
    // }

    const responseJson = await response.json();
    console.log("Response:", responseJson);
    
    // console.log("REGISTER", response);

    // let { username, email } = credentials;

    // /** send email */
    // if (status === 201) {
    //   await axios.post("/api/registerMail", {
    //     username,
    //     userEmail: email,
    //     text: msg,
    //   });
    // }

    return responseJson;
  } catch (error) {
    throw { error };
  }
}
