import "./App.css";
import React, { useEffect } from "react";
import axios from "axios";
import { InlineWidget } from "react-calendly";

function App() {
  console.log("in get calendar");

  // Example Axios request (replace with your actual request)
  // useEffect(() => {
  //   console.log("inside the response");

  //   axios

  //     .get("/api/calendar") // Replace with the actual relative path
  //     .then((response) => {
  //       console.log(response);
  //     })
  //     .catch((error) => {
  //       console.log("error in GET:", error);
  //     });
  // }, []); // UseEffect to run the request once when the component mounts

  let getGif = () => {

    console.log("in get Gif")
    axios

      .get("/api/calendar") // Replace with the actual relative path
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log("error in GET:", error);
      });
      
  };

  return (
    <div className="App">
      <header className="App-header">{/* Your other content */}</header>

      <InlineWidget url="https://calendly.com/dontyellwillcry" />
      <h3>CALANDLY</h3>
      <button onClick={getGif}>Get Gif</button>
    </div>
  );
}

export default App;
