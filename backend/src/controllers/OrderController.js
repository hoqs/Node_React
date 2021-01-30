const connection = require("../database/connection");

module.exports = {
    async index (request, response){
        const token = request.header.authorization;
        const { user_id } = request.body;

    }


}