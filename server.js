const express       = require('express'),//define express. require it
    dbOperations    = require('./dbfiles/dbOperations'),//import
    cors           = require('cors'),//define cors. require it
    Employee        =require("./dbfiles/employee");

const API_PORT = process.env.PORT || 5000;//define a port || this is or
const app = express();

//define some variables for mongoDB
let client;
let session;
app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

app.post("/api", function(req, res) {    
    console.log("called");
    res.send({result: "Helloooo"});
}); 

app.post("/quit", function(req, res) {
    console.log("called quit");
    res.send({result: "Good Bye"});
}); 

let Pam = new Employee(1002, "Pam", "Beazley", 29, "Female");
// console.log(Pam);    

// dbOperations.getEmployees().then(res => {
//     console.log(res.recordset);//an array of objects. our only object now though is jim halpert
// });

// dbOperations.createEmployees(Pam);

app.listen(API_PORT, () => console.log(`Listening on port ${API_PORT}`));