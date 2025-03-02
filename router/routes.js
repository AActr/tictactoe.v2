import express from "express";
import url from "url";
import path from "path";

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const router = express.Router();

//render HTML
router.get("/play", (req, res) => {
    res.sendFile(path.join(__dirname, "..", "public", "html", "play.html"));
});

export default router;