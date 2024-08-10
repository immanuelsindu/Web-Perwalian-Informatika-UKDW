const express = require("express");
const router = require("./router/router");
const bodyParser = require("body-parser");

const app = express();
var cors = require("cors");
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(router);

const port = 3000;

app.listen(port, () => {
    console.log(`START ON PORT ${port}`);
});
