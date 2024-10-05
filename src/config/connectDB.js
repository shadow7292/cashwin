const mysql = require('mysql2/promise');

const connection = mysql.createPool({
    host: '85.195.73.202',
    user: 'win1209_cashwin',
    password: '729288@Rishav$',
    database: 'win1209_cashwinclub',
});

export default connection;
