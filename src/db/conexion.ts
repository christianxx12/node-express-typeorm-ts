import "dotenv/config";
import { DataSource } from "typeorm";
import { Estudiante } from "../models/estudiantesModel";
import { Profesor } from "../models/profesoresModel";
import { Curso } from "../models/cursoModel";

export const AppDataSource = new DataSource({
  type: "mysql",
  host: process.env.DB_HOST,
  port: process.env.DB_PORT ? parseInt(process.env.DB_PORT) : undefined,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: "cursos",
  logging: true,
  synchronize: true,
  entities: [Estudiante, Profesor, Curso],
});
