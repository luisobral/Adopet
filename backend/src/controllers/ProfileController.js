const connection = require("../database/connection");

module.exports = {
    async index(req,res){
        const id_ong = req.headers.authorization;

        const animals = await connection('animals').where('id_ong',id_ong).select("*");

        return res.json(animals);

    }

}