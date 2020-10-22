const connection = require('../database/connection');
const crypto = require('crypto');


module.exports = {
    async index (req, res) {
        const ongs = await connection('ongs').select('*');
    
        return res.json(ongs);
    },

    async create(req,res){
        const {nome} = req.body;
    
        const id = crypto.randomBytes(4).toString('HEX');
        
        await connection('ongs').insert({
            id,
            nome
        });

        return res.json({ id });
    }
}