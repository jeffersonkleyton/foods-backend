module.exports = (app) => {
  const item = app.mongoose.model("Item", {
    item: String,
    descricao: String,
    valor: String,
    foto: String,
  });
  return { item };
};
