const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const path = require('path')
const fs = require("fs");
const stringify = require('node-stringify');


const PORT = process.env.PORT || 5600

const app = express()
app.use(cors())

app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())
app.use(express.static(__dirname + '/public'));


//start server 
app.listen(PORT, () => {
    console.log("server started");
})

app.put("/api", (req, res) => {
    let object = req.body;
    let file = req.body.objFile
    switch (file) {
        case "rasshivalov_data1.json":
            updateFile(file, object)
            break;
        case "rasshivalov_data2.json":
            updateFile(file, object)
            break;
        case "rasshivalov_data3.json":
            updateFile(file, object)
            break;
        default:
            console.log("error");
            break;
    }
});
//update file
async function updateFile(filePath, data) {
    let fullpath = path.join(__dirname, '../client/data/'+filePath);
    fs.writeFileSync(fullpath, JSON.stringify(data));;   
}