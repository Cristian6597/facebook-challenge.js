const mongoose = require("mongoose");
const getHomepage = (req, res) => {
    Article.find().maxTimeMS(10000)
      .then((result) => {
        console.log(result);
        res.render("index", { result });
      })
      .catch((err) => console.log(err));
  };

const db = 'mongodb+srv://mrhycron:gGSK5XmhM7WWsNQf@test.pmznjoy.mongodb.net/?retryWrites=true&w=majority&appName=test';


mongoose.connect(db)
    .then(() => console.log("Connected to database"))
    .catch(err => console.error("Error connecting to database:", err));
