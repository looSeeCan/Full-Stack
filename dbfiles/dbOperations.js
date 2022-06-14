//an organinzed place to put our database specific commands into

const config                =require('./dbConfig'),//this is import
        sql                 =require('mssql');//this is import
// console.log("config:", config);
// console.log("sql", sql);

//quick function to get the employees from the database
const getEmployees = async(FirstName) => {
    try{
        console.log("FirstName:", FirstName);
        let pool = await sql.connect(config);
        let employees = await pool.request().query(`SELECT * from EmployeeDemographics WHERE FirstName ='${FirstName}'`);// a query
        // console.log(employees);
        return employees;
    }
    catch(error) {
        console.log(error);
    }
}

const createEmployees = async(Employee) => {
    try{
        let pool = await sql.connect(config);
        let employees = pool.request()
        .query(`INSERT INTO EmployeeDemographics VALUES
        (${Employee.EmployeeID}, '${Employee.FirstName}', '${Employee.LastName}', ${Employee.Age}, '${Employee.Gender}')
        `)
        return employees; 
    }
    catch(error) {
        console.log(error);
    }
}

module.exports = {//same as export
    getEmployees,
    createEmployees
}