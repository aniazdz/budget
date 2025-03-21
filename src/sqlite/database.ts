import { DatabaseSync } from "node:sqlite";

const db = new DatabaseSync("./raw.db");

const sql = `CREATE TABLE transactions(id INTEGER PRIMARY KEY, title, money_spent, notes)`;


// const query = db.prepare("select 'Hello world' as message;");
// // console.log(query.all());
// query.get(); // => { message: "Hello world" }