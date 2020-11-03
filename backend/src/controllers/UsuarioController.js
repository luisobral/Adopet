const connection = require('../database/connection');
const crypto = require('crypto');



module.exports = {
    async index (req, res) {
        const User = await connection('User').select('*');
    
        return res.json(User);
    },

    async create(req,res){
        const {nome_User,email_User,
            whatsApp_User,
            city_User,
            uf_User} = req.body;
    
        const id_User = crypto.randomBytes(4).toString('HEX');
        
        const [id] = await connection('User').insert({
            id_User,
            nome_User,
            email_User,
            whatsApp_User,
            city_User,
            uf_User,
            
        });

        return res.json({ id });

    },
    //fazer alert
    async delete(req,res){
        const {id_User} = req.params;
        

    
        const User = await connection('User').where('id_User').select('id_User').first();

        

        await connection('User').where('id_User', id_User).delete();

        return res.status(204).send();
    }
}