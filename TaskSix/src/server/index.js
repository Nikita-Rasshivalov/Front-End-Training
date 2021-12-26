const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const fs = require("fs");
const stringify = require('node-stringify');

const PORT = process.env.PORT || 5600

const app = express()
app.use(cors())

app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())


//start server 
app.listen(PORT, () => {
    console.log("server started");
})

//Processing request
app.post("/api", (req, res) => {
    let pizzaJson = req.body;
    pizzaJson.time =  new Date().toLocaleString();
    fs.writeFile("pizza.txt", stringify(pizzaJson) , function (error) {

        if (error) console.log(error); 
        console.log("Good");
        let data = fs.readFileSync("pizza.txt", "utf8");
        console.log(data);  
    });

});



