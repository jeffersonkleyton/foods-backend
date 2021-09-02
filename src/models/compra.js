module.exports = app => {
    const compra = app.mongoose.model('Compra', {
        compra: Object   
    })
    return {compra}
}