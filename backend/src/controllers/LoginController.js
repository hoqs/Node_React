const connection = require("../database/connection");
const crypto = require("crypto");
const { response } = require("express");

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
      name,
      email,
      whatsapp,
      password,
    });
    return response.json({ id });
  },

  async login(request, response) {
    const { id, password } = request.body;
    const usuario = await connection("usuarios")
      .where("id", id)
      .select("name", "email", "whatsapp");
    const pass = await connection("usuarios").where("id", id).first("password");
    let result = await new Promise((resolve, reject) => {
      resolve(pass && pass.password === password);
    });
    if (result) response.json(usuario);
    else response.json("Senha Incorreta!");
  },
};
