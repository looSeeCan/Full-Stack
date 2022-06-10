//in this config file, we will make some basic congigurations so we connect really easy to my sql server

const config = {
    user: 'CodingWithLucy',
    password: 'lucy',
    // server: 'DESKTOP-BL6QON1',
    server: 'DESKTOP-BL6QON1',
    database: 'SQL_Tutorial',
    options: {
        trustServerCertificate: true,
        trustedConnection: false,
        enableArithAbort: true,
        instancename: 'SQLEXPRESS',
    },
    port: 1433
}

module.exports = config;//export