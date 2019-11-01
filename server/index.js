require("dotenv").config();
const express = require("express");
const massive = require("massive");
const ctrl = require("./controller");

const app = express();

const { SERVER_PORT, CONNECTION_STRING } = process.env;

app.use(express.json());


app.get('/api/inventory', ctrl.getInventory)
app.post('/api/product', ctrl.newProduct)


massive(CONNECTION_STRING)
.then(dbInstance => {
    app.set("db", dbInstance);
    app.listen(SERVER_PORT, () => {
        console.log(`Server is listening on port ${SERVER_PORT}.`)
    });
})
.catch(err => console.log(err));

