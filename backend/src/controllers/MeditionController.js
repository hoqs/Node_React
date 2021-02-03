const connection = require("../database/connection");

module.exports = {
  async index(request, response) {
    const order_id = request.headers.authorization;
    const showMeditions = await connection("meditions")
      .where("order_id", order_id)
      .select("*");
    response.json(showMeditions);
  },

  async create(request, response) {
    const order_id = request.headers.validation;
    const user_id = request.headers.authorization;
    const { data, hour, medition, temperature, bomb_state } = request.body;

    const newMedition = await connection("meditions").insert({
      order_id,
      data,
      hour,
      medition,
      temperature,
      bomb_state,
      user_id,
    });
    response.json(newMedition);
  },

  async delete(request, response) {
    // await connection("meditions").delete("*");
  },
};
