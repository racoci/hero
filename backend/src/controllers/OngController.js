const connection = require("../database/connection");
const crypto = require('crypto');

module.exports = {
    async index(request, response) {
        const ongs = await connection('ongs').select('*')
        return response.json(ongs)
    },
    async create(request, response) {
        const {name, email, whatsapp, city, uf} = request.body
        const id = crypto.randomBytes(6).toString('BASE64');
        const newRow = {
            id,
            name,
            email,
            whatsapp,
            city,
            uf
        }
        await connection('ongs').insert(newRow)
        return response.json(newRow)
    }
}