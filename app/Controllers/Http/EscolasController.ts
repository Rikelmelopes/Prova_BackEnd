// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Escola from "App/Models/Escola";

export default class EscolasController {
  index() {
    return Escola.all();
  }
  store({ request }) {
    const dados = request.only([
      "cnpj",
      "nome",
      "numero",
      "endereco",
      "uf",
      "data_criacao",
    ]);
    return Escola.create(dados);
  }
}
