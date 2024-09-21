import express, { Request, Response } from "express";
import "reflect-metadata";
import cors from "cors";
import morgan from "morgan";
import estudiantesRoutes from "./routes/estudiantesRoutes";
import profesoresRoutes from "./routes/profesoresRoutes";
import cursosRoutes from "./routes/cursosRoutes";

const app = express();

app.use(morgan("dev"));
app.use(cors());
app.get("/", (req: Request, res: Response) => {
  console.log("Hola Mundo");
  res.send("Hola Mundo");
});

app.use("/estudiantes", estudiantesRoutes);
app.use("/profesores", profesoresRoutes);
app.use("/cursos", cursosRoutes);

export default app;
