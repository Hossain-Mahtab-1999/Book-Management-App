import mysql from "mysql";

export let db= mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "Talentpro123456",
        database: "test"
    })