import { MongoClient } from "mongodb";
import mongoose from "mongoose";

const URI = process.env.MONGODB_URI;

// const options = {}
if (!URI) throw new Error("Please add your mongo URI");

const connect = () => {
  if (process.env.NODE_ENV !== "production") {
    mongoose.set("debug", true);
  }

  try {
    mongoose.connect(URI, {
      // dbName: "blog",
      // useNewUrlParser: true,
      // useUnifiedTopology: true,
      // useCreateIndex: true
    });
  } catch (err) {
    console.log(err);
  }
};

mongoose.connection.on("error", (err) => {
  console.error("mongo DB Error", err);
});

mongoose.connection.on("disconnected", (err) => {
  console.error("mongo DB disConnect. retry", err);
  connect();
});

export default connect;
// module.exports = connect;
