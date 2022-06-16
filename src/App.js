import './App.css';
import React, {useState} from "react";

function App() {
  const [returnedData, setReturnedData] = useState(['Welcome to my Project']);
  const [employee, setEmployee] = useState({EmployeeID: 0, FirstName: '', LastName: '', Age: 0, Gender: ''})

  const setInput = (e) => {
    const {name, value} = e.target;
    console.log(value);
    if(name === 'EmployeeID' || name === 'Age'){
      setEmployee(prevState => ({
        ...prevState,
        [name]: parseInt(value)
      }));
      return;
    }
    setEmployee(prevState => ({
      ...prevState,
      [name]: value
    }));
}

const fetchData = async () => {
  const newData = await fetch('./api', {
    method: 'POST',
    headers: {
      'content-type':'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify({
      name: employee.FirstName
    })
  })
  .then(res => res.json())
  console.log(newData);
  setReturnedData(newData[0])
};

const createEmployees = async () => {
  const newData = await fetch('./hello', {
    method: 'POST',
    headers: {
      'content-type':'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify({
      ...employee//something about the "name" was not here thats why we have to (req.body.FirstName) in the "/hello"
    })
  })
  .then(res => res.json())
  console.log(newData);
  setReturnedData(newData[0])
};

  
  return (
    <div className="App">
      <input 
        type= "number"//attribute to only accept numbers
        name='EmployeeID'
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
      <button onClick={() => createEmployees()}>Create</button>
      <p>EmployeeID: {returnedData.EmployeeID}</p>
      <p>FirstName: {returnedData.FirstName}</p>
      <p>LastName: {returnedData.LastName}</p>
      <p>Age: {returnedData.Age}</p>
      <p>Gender: {returnedData.Gender}</p>
    </div>
  );
}

export default App;
