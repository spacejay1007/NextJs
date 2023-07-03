import { createConnection } from "mysql2";

export const connection = createConnection({
  host: "localhost",
  // host: '127.0.0.1', for MAC
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
  } catch (err) {
    console.log(err);
  }
}
