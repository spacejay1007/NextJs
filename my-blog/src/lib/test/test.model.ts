import mongoose, { Schema, models } from "mongoose";

export const TestSchema = new Schema({
  testId: {
    type: Number,
  },
  title: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
  },
  image: {
    type: String,
  },
  category: {
    type: String,
    require: true,
  },
});

// {
//   "id": 3,
//   "title": "공부한 내용",
//   "desc": "2023년 동안 배운 기록",
//   "date": "2023-12-31",
//   "image": "nextjs.jpg",
//   "category": "nextjs"
// },
// {
//   "id": 2,
//   "title": "에러",
//   "desc": "2023년 동안 나온 에러 기록",
//   "date": "2023-12-30",
//   "image": "study.jpg",
//   "category": "study"
// },
// {
//   "id": 1,
//   "title": "다시 공부해야한다",
//   "desc": "2023년에 배웠지만 다시 복습해야 할 내용",
//   "date": "2023-12-29",
//   "image": "study.jpg",
//   "category": "study"
// }

// const Test = models?.Test || mongoose.model("Test", TestSchema);

export default Test;
