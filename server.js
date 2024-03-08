const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res) =>{
const file = fs.readFile('index.html', (err, data)=>{
    if (err) throw err
    res.write(data)
    res.end
}) 
})

server.listen(8000)
console.log("SERVER IS WORKING!")