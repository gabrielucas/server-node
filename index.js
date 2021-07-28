const http = require('http'),
    express = require('express'),
    app = express()

app.get('/', (req, res) => {
    res.send('<h1>VOCÊ ESTÁ NA HOME PAGE!</h1>')
})    

app.listen(3000, 'localhost', () => console.log('O servidor está rodando...'))

// http.createServer((req, res) => {
//     res.end('Servidor funcionando!')
// }).listen(3000, 'localhost', () => console.log('O servidor está rodando...'))