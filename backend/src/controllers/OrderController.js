const connection = require("../database/connection");

module.exports = {
  async index(request, response) {
    const user_id = request.headers.Authorization;
    const showOrders = await connection("orders").select("*");

    console.log(user_id);
    response.json(showOrders);
  },

  async create(request, response) {
    // const user_id = request.headers.authorization;
    const { id, data, costumer, first_medition, user_id } = request.body;

    const newOrder = await connection("orders").insert({
      id,
      data,
      costumer,
      first_medition,
      user_id,
    });
    response.json(newOrder);
  },

  async delete(request, response) {
    const id = request.params;

    const orderDelete = await connection("orders")
      .where("id", id)
      .select("id")
      .first();

    if ((orderDelete.id = !id)) {
      return response.status(401).json({ error: "Operation not permitted." });
    }

    await connection("orders").where("id", id).delete();
  },
};
