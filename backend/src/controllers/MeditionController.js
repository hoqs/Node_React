const connection = require("../database/connection");

module.exports={
    
    async index (request, response){
        const order_id = request.header.authorization;
        const showMeditions = await connection("meditions").where("order_id", order_id).select("*");
        response.json(showMeditions);
    },

    async create (request, response){
        const order_id = request.header.authorization;
        const { data, hour, medition, temperature, bomb_state, employee } = request.body;

        const newMedition = await connection("meditions")
        .insert(
            order_id,
            data, 
            hour, 
            medition, 
            temperature, 
            bomb_state, 
            employee);
            response.json(newMedition);
    },

    async delete (request, response){
        const order_id = request.header.authorization;
        const id = request.params;

        const orderMedition = await connection("meditions").where("id", id).select("order_id").first();

        if(orderMedition.order_id =! order_id){
            return response.status(401).json({ error: 'Operation not permitted.'});
        }

        await connection("meditions").where("id", id).delete();
    }
}
