const connection = require("../database/connection");


module.exports = {
    async index(req,res){
        const {page = 1} = req.query;
        
        const [count] = await connection('animals').count();

        const animals = await connection('animals')
        .join('ongs','ongs.id', '=','animals.id_ong')
        .limit(5)
        .offset((page - 1) * 5)
        .select(['animals.*','ongs.nome_ong']);

        res.header("X-Total-Count", count['count(*)']);

        return res.json(animals);
    },

    async create(req,res){
        const {
            nome_animal,
            idade,
            chipado,
            personalidade,
            id_categoria,
            id_raca} = req.body;

        const id_ong = req.headers.authorization;

        const [id] = await connection('animals').insert({
            nome_animal,
            idade,
            chipado,
            personalidade,
            id_ong,
            id_categoria,
            id_raca,
        });

        return res.json({id});
    },
    async delete(req,res){
        const {id} = req.params;
        const id_ong = req.headers.authorization;
    
        const animals = await connection('animals').where('id',id).select('id_ong').first();

        if(animals.id_ong !== id_ong){
            return res.status(401).json({error: "Operação Não permitida"});
        }

        await connection('animals').where('id', id).delete();

        return res.status(204).send();
    }
};