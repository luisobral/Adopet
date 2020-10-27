const connection = require("../database/connection");

module.exports= {
    async index(req,res){
        const vacinas = await connection('vacinas').select('*');
    
        return res.json(vacinas);
    },  
    async create(req,res){
        const {nome_vacinas} = req.body;
        
        const [id] = await connection('vacinas').insert({
            nome_vacinas
        });

        return res.json({ id });

    },
    async delete(req,res){
        const {id} = req.params;

        await connection('vacinas').where('id', id).delete();

        return res.status(204).send();
    }
};