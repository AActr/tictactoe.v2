import express from "express";
import routes from "./router/routes.js";
import url from "url";
import path from "path";

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.use(express.static(path.join(__dirname, "public")));
app.use("/", routes);

app.listen(3000, ()=> {
    console.log("Server running on port 3000");
});