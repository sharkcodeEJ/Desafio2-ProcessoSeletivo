const express = require('express')
const server = express()

server.set('views', 'src/views')
server.set('view engine', 'ejs')
server.use(express.static('public'))

server.get("/", (req,res) => {
    res.redirect('/home')
})

server.get("/home", (req,res) => {
    res.render('home')
})

server.listen(5000, ()=> {
    console.log("server is running...")
})