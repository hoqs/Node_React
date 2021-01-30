const connection = require("../database/connection");
const crypto = require("crypto");


module.exports = {
  async index(request, response) {
    const usuarios = await connection("usuarios").select("*");
    return response.json(usuarios);
  },

  async create(request, response) {
    const { name, email, whatsapp, password } = request.body;
    const id = crypto.randomBytes(4).toString("HEX");

    await connection("usuarios").insert({
      id,
      email,
      whatsapp,
      name,
      password,
    });
    return response.json({ id });
  },

  async login(request, response) {
    const { id, password } = request.body;
    const token = crypto.randomBytes(8).toString("HEX");
    const usuario = await connection("usuarios")
      .where("id", id)
      .select("name", "email", "whatsapp");
    const pass = await connection("usuarios").where("id", id).first("password");
    let result = await new Promise((resolve, reject) => {
      resolve(pass && pass.password === password);
    });
    if (result) response.json([...usuario , {token}]);
    else response.json("Senha Incorreta!");
  },
};
