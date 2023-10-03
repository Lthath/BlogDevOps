const mongoose = require("mongoose");
mongoose.set("strictQuery", true); //securise le code

mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log("Connected to MongoDB"))
.catch((err) => console.error(err));


