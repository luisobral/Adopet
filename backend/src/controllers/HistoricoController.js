const connection = require("../database/connection");

module.exports = {
    async index(req,res){
        const id_ong = req.headers.authorization;
        const id_historico = id_ong;
        console.log(id_historico);
        const historicos = await connection('historicos').where('id_historico',id_historico).select("*");

        return res.json(historicos);

    },
    async create(req,res){
        const id_ong = req.headers.authorization;

        const id_historico = id_ong;
        console.log(id_historico);
        const {id_vacinas} = req.body;
        const [id] = await connection('historicos').insert({
            id_vacinas,
            id_historico
        });

        return res.json({id});
    },
    async delete(req,res){
        const id_ong = req.headers.authorization;
        const id_animal = req.headers.animal;

        const id_historico = `${id_ong}${id_animal}`;
        await connection('historicos').where('id_historico', id_historico).delete();

        return res.status(204).send();
    }
}