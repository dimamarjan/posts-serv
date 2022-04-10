const express = require("express");
const logger = require("morgan");
const cors = require("cors");
const helmet = require("helmet");
const ratelimit = require("express-rate-limit");

const errorHandler = require("./utils/errorHandler/errorHandler");
require("dotenv").config();

const { JSON_SIZE_LIMIT } = process.env;

const rateLimitOptions = require("./config/rateLimitOptions");

const app = express();

const formatsLogger = app.get("env") === "development" ? "dev" : "short";

app.use(helmet());
app.use(express.json({ limit: JSON_SIZE_LIMIT }));
app.use(logger(formatsLogger));
app.use(cors());

app.use("/api/", ratelimit(rateLimitOptions));

app.use("/api/", require("./routes/api"));

app.use((err, req, res, next) => {
  return errorHandler(err, res);
});

process.on("unhandledRejection", (reason, promise) => {
  console.log("Unhandled Rejection at:", promise, "reason:", reason);
});

module.exports = app;
