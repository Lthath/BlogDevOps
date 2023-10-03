// express
const express = require("express");
const app = express();

// cors
const cors = require("cors");

const corsOptions = {
    origin: 'http://localhost:5173',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    optionsSuccessStatus: 204,
    credentials: true,
    preflightContinue: false,
    allowedHeaders: 'Content-Type, sessionid', // Autorise les en-têtes spécifiés
    exposedHeaders: 'sessionid', // Expose l'en-tête sessionid aux requêtes du frontend
  };
  
  app.use(cors(corsOptions));

// dotenv

require("dotenv").config({path: "./.env"});

// db connect

require("./config/database.js");

const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// routes 

const routes = require("./routes/routes.js")
app.use("/", routes);

// server 
app.listen(process.env.PORT, () => {
    console.log(`Server listening on port ${process.env.PORT}`);
})