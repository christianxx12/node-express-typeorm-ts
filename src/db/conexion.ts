import { DataSource } from "typeorm";
import { Estudiante } from "../models/estudiantesModel";
import { Profesor } from "../models/profesoresModel";
import { Curso } from "../models/cursoModel";

export const AppDataSource = new DataSource({
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "christian",
  password: "123",
  database: "cursos",
  logging: true,
  synchronize: true,
  entities: [Estudiante, Profesor, Curso],
});
