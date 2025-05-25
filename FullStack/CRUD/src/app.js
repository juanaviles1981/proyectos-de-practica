import express from "express";
import { create } from "express-handlebars";
import indexRoutes from "./routes/index.routes";
import path from "path";
import morgan from "morgan";

const app = express();

// Configuración de vistas
app.set("views", path.join(__dirname, "views"));

// Configuración del motor de plantillas
const hbs = create({
  layoutsDir: path.join(app.get("views"), "layouts"),
  partialsDir: path.join(app.get("views"), "partials"), // Registro de parciales
  defaultLayout: "main",
  extname: ".hbs",
});


app.engine(".hbs", hbs.engine);
app.set("view engine", ".hbs");

// Middleware
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));

// Archivos estáticos
app.use(express.static(path.join(__dirname, "public")));

// Rutas
app.use(indexRoutes);

export default app;
