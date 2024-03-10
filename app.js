const express = require("express");
const mysql = require("mysql2");
// const app = express();
const swaggerUi = require("swagger-ui-express");
const swaggerSpec = require("./docs/swaggerDefinition");
const authController = require("./controllers/authController");
const imageController = require("./controllers/imageController");
const { authenticateToken } = require("./middlewares/authMiddleware");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

const db = mysql.createConnection({
  host: "your-db-host",
  user: "your-db-username",
  password: "your-db-password",
  database: "your-db-name",
});

db.connect((err) => {
  if (err) {
    console.error("Error connecting to MySQL:", err);
    return;
  }
  console.log("Connected to MySQL database");
});

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use("/auth", authController);

// ... (rest of the setup)
