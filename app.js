const express = require("express");
const app = express();

const mongoose = require("mongoose");

const mongoURL =
  "mongodb+srv://paulkobena:Bio03129431.@paul.qpty8hf.mongodb.net/?retryWrites=true&w=majority";

mongoose
  .connect(mongoURL, {
    useNewUrlParser: true,
  })
  .then(() => console.log("Connexion réussie à MongoDB"))
  .catch(() => console.log("Failed to connect to MongoDB"));

app.use(express.json());

// app.post("/post", async (req, res) => {
//   console.log(req.body);

//   const { data } = req.body;

//   try {
//     if (data == "kobe") {
//       res.send({ status: "ok" });
//     } else return res.send({ status: "User not found" });
//   } catch {
//     res.send({ status: "error" });
//   }
// });

require("./userDetails");

const User = mongoose.model("userInfo");
app.post("/register", async (req, res, next) => {
  const { name, email, phone } = req.body;

  try {
    await User.create({
      uname: name,
      email: email,
      phone: phone
    });
    res.status({status : "ok"})
  } catch (error){
    res.send({status : "error"})
  }
});

app.listen(5000, () => {
  console.log("Server starting...");
});
