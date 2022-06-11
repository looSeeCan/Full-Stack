import './App.css';
import React, {useState} from "react";

//made a change in the package.json file: "proxy": localhost 5000
function App() {
  const [returnedData, setReturnedData] = useState(["Nyob Zoo"]);  
  
  //capture the input fields below as they are being typed
  const [employee, setEmployee] = useState({EmployeeID: 0, FirstName: "", LastName: "",  Age: 0, Gender: ""});
  // console.log(employee);
  
  const setInput = (e) => {//we have to make sure that fields that require a number in our database actually get sent as a number
    //by default as we package this up, by default it is sent as a string
    const {name, value} = e.target;
    // console.log(name);
    // console.log(value);
    // console.log(e.target);
    if (name === "EmployeeID" || name === "Age") {//if these two then 
      setEmployee(prevState => ({
        ...prevState,
        [name]: parseInt(value)//parseInt. takes a string and cnverts it to a number
      }));
      return;//return early. you no longer need the else statement. if the condition is true then the return. Nothing else executes after return
    }
    setEmployee(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  const fetchData = async() => {
    console.log(employee);
    const newData = await fetch('/api', {
      method: "Post",//all we are doing is grabbing from the back end and making it appear on the front end
      headers: {//headers help us tell the response how we are sending and accepting data
        "content-type": "aplication/json",
        "Accept": "application/json"//we are accepting the data in a json format
      }
    })
    .then(res => res.json());
    console.log(newData);
    //So how do we make the api call, store that value in returned data, then produce that change on the UI
    setReturnedData(newData.result);
  };
  
  return (
    <div className="App">
      <input 
        type= "number"//attribute to only accept numbers
        name='EmplyoyeeID'
        placeholder='EmployeeID'
        onChange={setInput}></input>
      
      <input
      name='FirstName'
      placeholder='FirstName'
      onChange={setInput}></input>
      
      <input
      name='LastName'
      placeholder='LastName'
      onChange={setInput}></input>

      <input
      type= "number"
      name='Age'
      placeholder='Age'
      onChange={setInput}></input>
      
      <input
      name='Gender'
      placeholder='Gender'
      onChange={setInput}></input>

      <button onClick={() => fetchData()}>Click</button>
      <button onClick={() => fetchData("/quit")}>Create</button>
      <p>EmployeeID: {returnedData.EmployeeID}</p>
      <p>FirstName: {returnedData.FirstName}</p>
      <p>LastName: {returnedData.LastName}</p>
      <p>Age: {returnedData.Age}</p>
      <p>Gender: {returnedData.Gender}</p>
      {returnedData}
    </div>
  );
}

export default App;
