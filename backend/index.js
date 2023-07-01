require("dotenv").config();
require("./config/passport.google");

const cors = require("cors");
const express = require("express");
const response = require("./schemas/response");

const app = express();
const PORT = process.env.PORT || 3000;

const authRoutes = require("./routes/routes.auth");
const dbRoutes = require("./routes/routes.db");
const db = require("./scripts/db");

app.use(express.json());
app.use(cors());
db.connect();

app.get("/", (req, res) => {
  response(res, {}, "server running successfully", true, 200);
});

app.use("/auth", authRoutes);
app.use("/db", dbRoutes);

app.listen(PORT, () => {
  console.log("🚀 Server Ready! at port:", PORT);
  console.log("Goto http://localhost:" + PORT);
});
