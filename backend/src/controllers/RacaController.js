const connection = require('../database/connection');


module.exports = {
    async index (req, res) {
        const racas = await connection('racas').select('*');
    
        return res.json(racas);
    },

    async create(req,res){
        const {nome,id_categoria} = req.body;
        
        const [id] = await connection('racas').insert({
            nome,
            id_categoria
        });

        return res.json({ id });
    },
    async delete(req,res){
        const {id} = req.params;
    
        await connection('racas').where('id', id).delete();

        return res.status(204).send();
    }
}