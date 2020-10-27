const connection = require('../database/connection');


module.exports = {
    async index (req, res) {
        const categorias = await connection('categorias').select('*');
    
        return res.json(categorias);
    },

    async create(req,res){
        const {nome_categoria} = req.body;
        
        const [id] = await connection('categorias').insert({
            nome_categoria
        });

        return res.json({ id });
    },
    async delete(req,res){
        const {id} = req.params;
    
        await connection('categorias').where('id', id).delete();

        return res.status(204).send();
    }
}