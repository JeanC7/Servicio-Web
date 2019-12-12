import express, { json } from "express";
import morgan from "morgan";

// Importando Rutas
import projectRoutes from "./routes/projects";
import taskRoutes from "./routes/tasks";
// Inicializacion
const app = express();

//middlewares
app.use(morgan("dev"));
app.use(json());

// Rutas
app.use("/api/projects", projectRoutes);
app.use("/api/task", taskRoutes);

export default app;
