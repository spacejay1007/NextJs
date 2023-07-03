// import mongoose from "mongoose";

// const postSchema = new mongoose.Schema({
//   // id: {
//   //   type: Number,
//   //   require: true,
//   //   unique: true,
//   // },
//   title: {
//     type: String,
//     require: true,
//   },
//   // desc: {
//   //   type: String,
//   //   require: true,
//   // },
//   // category: {
//   //   type: String,
//   //   require: true,
//   // },
// });

// const Post = mongoose.model("Posts", postSchema);

// export default Post;

import Sequelize from "sequelize";

export const posts = (Sequelize: any) => {
  console.log(Sequelize);
  const SeqPosts = Sequelize.define(
    "posts",
    {
      title: {
        type: Sequelize.STRING(20),
        allowNull: false,
        unique: true,
      },
      desc: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      category: {
        type: Sequelize.STRING(20),
        allowNull: false,
        unique: true,
      },
      date: {
        type: Sequelize.DATE, // DATETIME , MySQL DATE > squelize DateOnly
        allowNull: false,
        defaultValue: Sequelize.NOW,
      },
    },
    {
      timestamps: false,
      underscored: false,
      modelName: "User",
      tableName: "users",
      paranoid: false,
      charset: "utf8mb4",
      collate: "utf8mb4_general_ci",
    }
  );

  SeqPosts.associate = function (db: any) {
    db.User.hasMany(db.Comment, { foreignKey: "commenter", sourceKey: "id" });
  };

  return posts;
};
