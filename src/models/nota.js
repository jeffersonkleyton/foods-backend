module.exports = app => {
    const pedido = app.mongoose.model('Pedido', {
        cliente: Object,
        carrinho: Object,
    })

    return {pedido}
}