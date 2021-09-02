module.exports = app => {
    const compraModel = app.src.models.compra.compra
    const salvarCesta = async(req, res) => {
        const compra = new compraModel({...req.body})
        await compra.save().then(_ => res.status(200).send('compra adicionada a cesta')).catch(e => alert('erro ao salvar compra'))
    }

    const getCesta = async(req, res) => {
        const compras = await compraModel.find({}).then(resultado => res.status(200).json(resultado))
        return compras
    }

    return {salvarCesta, getCesta}
}