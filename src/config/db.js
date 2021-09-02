const mongoose = require("mongoose");

const uri =
  "mongodb+srv://jeff:1994@cluster0.mhh1g.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Banco de dados On!'))
  .catch((e) => {
    console.log("houve um erro ao conectar ao banco de dados");
  });
