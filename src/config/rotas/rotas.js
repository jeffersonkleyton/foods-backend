module.exports = (app) => {
  app
    .route("/item")
    .post(app.src.api.item.cadastrar)
    .get(app.src.api.item.pegarItems);

  app
    .route("/cesta")
    .post(app.src.api.compra.salvarCesta)
    .get(app.src.api.compra.getCesta);
};
