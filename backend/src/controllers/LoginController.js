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
    const usuario = await connection("usuarios").where("id", id).select("*");
    const pass = await connection("usuarios")
      .where("id", id)
      .select("password");
    const validation = new Promise((resolve, reject) => {
      resolve(pass === password);
    });

    validation.then(response.json("certo"), response.json("errado"));
  },
};
