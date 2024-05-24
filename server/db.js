const mysql = require('mysql');


const db = mysql.createPool({
    connectionLimit: 50,
    host: "localhost",
    user: "root",
    password: "",
    port: 3306,
    database: "Doctor"
})


module.exports = {
    connect: () => {
        db.getConnection((err, conn) => {
            if(err)
                console.log(err);
            else{
                console.log("Connected to Mysql......!");
                conn.release();
            }
        })
    },
    query: (sql, values) => new Promise((resolve, reject) => {
        db.query(sql, values, (error, result) => {
            if (error)
                reject(new Error(error));
            else
                resolve(result);
        })
    }),
    close: () => {
        db.end();
    }
}