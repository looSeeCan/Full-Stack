//an organinzed place to put our database specific commands into

const config                =require('./dbConfig'),
        sql                 =require('mssql');

//quick function to get the employees from the database
const getEmployees = async() => {
    try{
        let pool = await sql.connect(config);
        let employees = pool.request().query('SELECT * from EmployeeDemographics')
        console.log(employees);
        return employees;
    }
    catch(error) {
        console.log(error);
    }
}

module.exports = {
    getEmployees
}