import './App.css';
import React, {useState} from "react";

//made a change in the package.json file: "proxy": localhost 5000
function App() {
  const [returnedData, setReturnedData] = useState(["Nyob Zoo"]);  
  const getData = async(url) => {
    const newData = await fetch(url, {
      method: "GET",//all we are doing is grabbing from the front end and making it appear on the front end
      headers: {//headers help us tell the response how we are sending and accepting data
        "content-type": "aplication/json",
        "Accept": "application/json"//we are accepting the data in a json format
      }
    })
    .then(res => res.json());
    console.log(newData);
  };
  
  getData("/api");
  return (
    <div className="App">
      {returnedData}
    </div>
  );
}

export default App;
