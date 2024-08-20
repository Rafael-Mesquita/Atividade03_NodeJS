const express = require("express")

const app = express()

app.get('/', (req, res) => {
    const html1 = `
        <h1>
            Título da página
        </h1>
    `
    res.send(html1)
})

app.get('/sobre', (req, res) => {
    const html2 = `
    <p>
        TEXTO GRANDE
    </p>
`

    res.send(html2)
})

app.get('/contato', (req, res) => {

    const html3 = 
    `
        <form action='/enviar-formulario'>
            <label for="nome">Nome:</label><br>
            <input type="text" id="nome" name="nome" required>
            <br><br>

            <label for="mensagem">Ano de nascimento:</label><br>
            <input id="nascimento" name="nascimento" rows="4" cols="50" required>
            <br><br>

            <button>Enviar</button>
        </form>
    `
    res.send(html3)
})

app.get('/enviar-formulario', (req, res) => {
    const nome = req.query.nome
    
    const nascimento = req.query.nascimento

    const ano = new Date().getFullYear()

    const idadepessoa = ano-nascimento

    const html4 = `
        Olá ${nome}<br>
        Sua idade é: ${idadepessoa}
    ` 

    res.send(html4)
})

app.get("/idade/:ano", (req, res) => {

    const ano = req.params.ano

    const anoAtual = new Date().getFullYear()

    const idadepessoa = anoAtual - ano
    res.send("Idade: " + idadepessoa)
})

app.listen(3000, () => {
    console.log("Servidor está escutando...")
})