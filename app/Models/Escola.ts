import { DateTime } from "luxon";
import { BaseModel, column } from "@ioc:Adonis/Lucid/Orm";

export default class Escola extends BaseModel {
  @column({ isPrimary: true })
  public id: number;

  @column()
  public cnpj: number;

  @column()
  public nome: string;

  @column()
  public numero: number;

  @column()
  public endereco: string;

  @column()
  public uf: string;

  @column()
  public dataCriacao: Date;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime;
}
