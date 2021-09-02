module.exports = app => {
    const cliente = app.mongoose.model('Cliente', {
        nome: String,
        endereco: String,
        contato: String
    })

    return {cliente}
}