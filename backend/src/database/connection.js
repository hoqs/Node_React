const knex = require('knex');//importando o knex
const configuration = require('../../knexfile');//buscando as configuracoes do banco

const connection = knex(configuration.development);// fazendo a conexao e passando pra ele a configuracao de development

module.exports = connection;//exportando conexao com o banco