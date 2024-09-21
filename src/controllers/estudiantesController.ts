import { Request, Response } from "express";

class EstudiantesController {
  constructor() {}

  consultar(req: Request, res: Response) {
    try {
      res.send("Consultar Estudiantes");
    } catch (err) {
      if (err instanceof Error) res.status(500).send(err.message);
    }
  }

  consultarDetalle(req: Request, res: Response) {
    const { id } = req.params;
    try {
      res.send("Consultar detalle de un Estudiante");
    } catch (err) {
      if (err instanceof Error) res.status(500).send(err.message);
    }
  }

  ingresar(req: Request, res: Response) {
    try {
      res.send("Ingresar Estudiantes");
    } catch (err) {
      if (err instanceof Error) res.status(500).send(err.message);
    }
  }

  actualizar(req: Request, res: Response) {
    const { id } = req.params;
    try {
      res.send("Actualizar un Estudiante");
    } catch (err) {
      if (err instanceof Error) res.status(500).send(err.message);
    }
  }

  borrar(req: Request, res: Response) {
    const { id } = req.params;
    try {
      res.send("Eliminar un Estudiante");
    } catch (err) {
      if (err instanceof Error) res.status(500).send(err.message);
    }
  }
}

export default new EstudiantesController();
