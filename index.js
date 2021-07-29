const http = require('http'),
    express = require('express'),
    app = express(),
    rotasProdutos = require('./routes/rotasProdutos'),
    port = 3000



app.get('/', (req, res) => {
    res.send('<h1>VOCÊ ESTÁ NA HOME PAGE!</h1>')
})    

app.get('/sobre', (req, res) => {
    res.send('<h1>VOCÊ ESTÁ NA PÁGINA SOBRE</h1>')
})

// app.get('/produto', (req,res) => {
//     res.send('<h1>VOCÊ ESTÁ NA PÁGINA DE PRODUTO</h1>')
// })

app.use('/produtos', rotasProdutos)

app.get('/objeto', (req,res) => {
    res.send({nome: "Lucas",
sobrenome: "Viana",
idade: 22,
profissao: "Analista de Sistemas"})
})

app.get('/json', (req,res) => {
    res.send({"array": [{nome: "Lucas",
    sobrenome: "Viana",
    idade: 22,
    profissao: "Analista de Sistemas"},

    {nome: "Pedro",
    sobrenome: "Viana",
    idade: 6,
    profissao: ""}]})
})

app.get('/usuarios/:nome?', (req, res) => {

    const {nome} = req.params
    res.send(nome ? `<h1>PÁGINA DO USUÁRIO ${nome.toUpperCase()}</h1>` : `<h1>PÁGINA DE USUÁRIOS</h1>`)

})

app.listen(port, 'localhost', () => console.log('O servidor está rodando...'))

// http.createServer((req, res) => {
//     res.end('Servidor funcionando!')
// }).listen(3000, 'localhost', () => console.log('O servidor está rodando...'))