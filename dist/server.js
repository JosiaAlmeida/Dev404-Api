require("dotenv/config");
const express = require('express');
require('reflect-metadata');
const cors = require('cors');
const server = express();
server.use(cors());
server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.get('/', (req, res) => {
    res.send("Dev404-API");
});
server.listen(process.env.PORT || 3000, () => console.log("Dev404-API"));
//# sourceMappingURL=server.js.map