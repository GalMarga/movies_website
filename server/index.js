//index.js
const express = require("express");
const cors = require("cors");
const connectDB = require("../server/ config/connectDB")
const bodyParser = require("body-parser");
const usersController = require('../server/Controllers/routerUsers');
const moviesController = require('../server/Controllers/routerMovies');
const subscriptionsController = require('../server/Controllers/routerSubscriptions');
const membersController = require('../server/Controllers/RouterMembers');
const routerLogin = require('./Controllers/RouterLogIn');


const PORT = 3000;
const app = express();

connectDB();

app.use(bodyParser.json());


app.use(express.json());
app.use(cors());

app.use("/users", usersController);
app.use("/movies", moviesController);
app.use("/subscriptions", subscriptionsController);
app.use("/members", membersController);
app.use('/users', routerLogin);


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});