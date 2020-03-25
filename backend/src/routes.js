const express = require('express')
const connection = require('./database/connection')
const crypto = require('crypto');

const routes = express.Router();

routes.get('/ongs', async(request, response) => {
    const ongs = await connection('ongs').select('*')
    return response.json(ongs)
})

routes.post('/ongs', async (request, response) => {
    const resp = {
        params: {
            query: request.query,
            route: request.params
        },
        body: request.body
    }
    console.log(resp)
    const {name, email, whatsapp, city, uf} = resp.body
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
})

module.exports = routes;