const mongoose = require("mongoose");

const uri =
  "";
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Banco de dados On!'))
  .catch((e) => {
    console.log("houve um erro ao conectar ao banco de dados");
  });
