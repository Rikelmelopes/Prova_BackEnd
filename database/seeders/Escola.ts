import BaseSeeder from "@ioc:Adonis/Lucid/Seeder";
import Escola from "App/Models/Escola";

export default class extends BaseSeeder {
  public async run() {
    await Escola.createMany([
      {
        cnpj: 88888888888888,
        nome: "escola classe 28",
        endereco: "CNN 02 Bl. D Lojas 01/07 Ceilândia Centro, Brasília - DF",
        uf: "Df",
        dataCriacao: new Date(2021, 7, 21),
        numero: 556184654655,
      },

      {
        cnpj: 22222222222222,
        nome: "escola classe 35",
        endereco: "CNN 03 Bl. D Lojas 01/07 Ceilândia norte, Brasília - DF",
        uf: "Df",
        dataCriacao: new Date(2021, 8, 22),
        numero: 556184654655,
      },

      {
        cnpj: 33333333333333,
        nome: "escola classe 26",
        endereco: "CNN 04 Bl. D Lojas 01/07 Ceilândia sul, Brasília - DF",
        uf: "Df",
        dataCriacao: new Date(2021, 9, 23),
        numero: 556184654655,
      },

      {
        cnpj: 44444444444444,
        nome: "escola classe 7",
        endereco: "CNN 06 Bl. D Lojas 01/07 Ceilândia leste, Brasília - DF",
        uf: "Df",
        dataCriacao: new Date(2021, 3, 24),
        numero: 556184654655,
      },

      {
        cnpj: 55555555555555,
        nome: "escola classe 2",
        endereco: "CNN 07 Bl. D Lojas 01/07 Ceilândia oeste, Brasília - DF",
        uf: "Df",
        dataCriacao: new Date(2021, 2, 25),
        numero: 556184654655,
      },
    ]);
  }
}
