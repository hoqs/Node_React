const express = require("express");
require("dotenv").config();
const app = express();
const port = process.env.PORT || 3333;
const routes = require("./routes");
const cors = require("cors");

app.use(cors());
app.use(express.json());
app.use(routes);
app.listen(port);
