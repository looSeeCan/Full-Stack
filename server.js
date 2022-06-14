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

app.post("/api", async(req, res) => {//this has to be an async     
    console.log("this is what fetch is calling when I click");
    console.log(req);
    // console.log("req.body:", req.body);
    // console.log("req.route:", req.route);
    // console.log(res);
    const result = await dbOperations.getEmployees(req.body.name);//because we have to wait for this operation to finish. Im not to clear on async and await yet. but getEmployees from dbOperations gets called
    console.log("result:", result);
    res.send(result.recordset);      
}); 

app.post("/quit", function(req, res) {
    console.log("called quit");
    res.send({result: "Good Bye"});
}); 

let Pam = new Employee(1002, "Pam", "Beazley", 29, "Female");
// console.log(Pam);    

// dbOperations.createEmployees(Pam);

app.listen(API_PORT, () => console.log(`Listening on port ${API_PORT}`));