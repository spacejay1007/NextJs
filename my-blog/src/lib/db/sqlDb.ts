// import { posts } from "lib/schemas/posts";
// import { createConnection } from "mysql2";

// // const connection = mysql.
// export const connection = createConnection({
//   host: "localhost",
//   // host: '127.0.0.1', for MAC
//   user: process.env.SQL_USER,
//   password: process.env.SQL_PW,
//   database: "nodejs",
// });

// let db;

// try {
//   db = createConnection({
//     host: "localhost",
//     // host: '127.0.0.1', for MAC
//     user: process.env.SQL_USER,
//     password: process.env.SQL_PW,
//     database: "nodejs",
//   }).query("SELECT * FROM nodejs.posts", function (err: any, result: any) {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log(result);
//       result.json(result);
//     }
//   });
// } catch (err) {
//   console.error(err);
// }

// export default db;

// const mysql = require("mysql");
import { createConnection } from "mysql2";

const connection = createConnection({
  host: "localhost",

  // host: process.env.MYSQL_HOST,
  // port: process.env.MYSQL_PORT,
  user: process.env.SQL_USER,
  password: process.env.SQL_PW,
  database: "nodejs",
});

export default async function excuteQuery({
  query,
  values,
}: {
  query: any;
  values: any;
}) {
  try {
    const results = await connection.query(query, values);
    await connection.end();
    return results;
  } catch (error) {
    return { error };
  }
}
