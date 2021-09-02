module.exports = (app, io) => {
  const item_model = app.src.models.item.item;

  const cadastrar = async (req, res) => {
    const item = new item_model({ ...req.body });

    await item
      .save()
      .then((_) => res.status(200).send("salvo com sucesso"))
      .send("item salvo")
      .catch((e) => res.status(400).send(e));
  };

  const pegarItems = async (req, res) => {
    io.on("connection", (socket) => {
      console.log("socket items");
      const msg = 'em andamento'
      socket.emit("status", msg);
    });
 
    const lista = await item_model
      .find({})
      .then((resultado) => res.status(200).json(resultado))
      .catch((e) => res.status(400));
    return lista;
  };

  return { cadastrar, pegarItems };
};
