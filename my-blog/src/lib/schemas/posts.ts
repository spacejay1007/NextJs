import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
  // id: {
  //   type: Number,
  //   require: true,
  //   unique: true,
  // },
  title: {
    type: String,
    require: true,
  },
  // desc: {
  //   type: String,
  //   require: true,
  // },
  // category: {
  //   type: String,
  //   require: true,
  // },
});

const Post = mongoose.model("Posts", postSchema);

export default Post;
