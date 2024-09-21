import app from "./app";
import { AppDataSource } from "./db/conexion";

async function main() {
  try {
    await AppDataSource.initialize();
    console.log("Database is connected");
    app.listen(6505, () => {
      console.log("Server is running on port 6505");
    });
  } catch (err) {
    if (err instanceof Error) {
      console.error(err.message);
    }
  }
}

main();
