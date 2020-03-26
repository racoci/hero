const connection = require("../database/connection");

module.exports = {
    async index(request, response) {
        const { page = 1, pageSize = 5 } = request.query;
        const [count] = await connection('incidents').count()
        const incidents = await connection('incidents')
            .limit(pageSize)
            .offset(pageSize*(page - 1))
            .select('*')

        response.header('X-Total-Count', count["count(*)"]);
        return response.json(incidents)
    },
    async create(request, response) {
        const {title, description, value} = request.body;
        const ong_id = request.headers.authorization;
        const [id] = await connection('incidents').insert({
            title,
            description,
            value,
            ong_id,
        });
        return response.json({
            id,
            title,
            description,
            value,
            ong_id,});
    },

    async delete(request, response) {
        const { id } = request.params;
        const ong_id = request.headers.authorization;
        const incident = await connection('incidents').where('id', id).select('ong_id').first()
        if(!incident) {
            return response.status(404).json({
                error: `No resource found with id ${id}`
            })
        }
        if(incident.ong_id !== ong_id) {
            return response.status(401).json({
                error: "Operation not permitted, you cannot delete an incident that is now from your own"
            })
        }

        await connection('incidents').where('id', id).delete()

        return response.status(204).send();
    }
}