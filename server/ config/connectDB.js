const mongoose = require("mongoose");

const databaseName = "movies_web_siteDB";

const connectDB = () => {
  mongoose
    .connect(
      `mongodb+srv://galmarga10:MongoMarga@cluster0.looci2s.mongodb.net/${databaseName}?retryWrites=true&w=majority`
    )
    .then(() => console.log("Connected to MoviesDB"))
    .catch((error) => console.log(error));
};

module.exports = connectDB;
