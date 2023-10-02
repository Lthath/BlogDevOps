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

// routes 

const routes = require("./routes.js")
app.use("/api", routes)

// server 
app.listen(3000, () => {
    console.log("Server listening on port 3000")
})