const express       = require('express'),//define express. require it
    dbOperations    = require('./dbfiles/dbOperations')
    cors           = require('cors');//define cors. require it

// const API_PORT = process.env.PORT || 5000;//define a port || this is or
// const app = express();

// app.use(cors());//allows us to connect our front end to our backend

// app.get("/api", function(req, res) {    
//     console.log("called");
//     res.send({result: "Helloooo"});
// }); 

// app.get("/quit", function(req, res) {
//     console.log("called quit");
//     res.send({result: "Good Bye"});
// }); 

dbOperations.getEmployees().then(res => {
    console.log(res);
})

// app.listen(API_PORT, () => console.log(`Listening on port ${API_PORT}`));