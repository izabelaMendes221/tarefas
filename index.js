const express =  require('express')
const bp = require("body-parser")
const app = express()

app.use(bp.urlencoded())
app.use(bp.json())

app.listen(8080, () => {
    console.log("Servidor aberto na porta 8080")
} )

var listaDeTarefas = []

app.get("")

app.post("/cadastro", (req, res) => {

    console.log("Nova tarefa salva")

listaDeTarefas.push(req.body.tarefa)
res.send("Tarefa adcionada com sucesso")
})