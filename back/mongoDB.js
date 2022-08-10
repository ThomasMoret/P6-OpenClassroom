const mongoose = require("mongoose");

const password = process.env.DB_PASSWORD;
const username = process.env.DB_USERNAME;

mongoose
  .connect(
    `mongodb+srv://${username}:${password}@cluster0.ptsd2on.mongodb.net/?retryWrites=true&w=majority`
  )
  .then(() => console.log("Connexion à MongoDB réussie !"))
  .catch(() => console.log("Connexion à MongoDB échouée !"));

module.exports = mongoose;
