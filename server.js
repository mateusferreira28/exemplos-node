const express = require('express')
const axios = require('axios')

const app = express()

app.use(express.json())

app.get('/ping', (req, res) => {
    res.send('pong')
})

app.get('/address/:cep', ensureAuthenticated, async (req, res) => {
    const cep = req.params.cep
    const addressData = await getAddress(cep)
    res.status(200).json(addressData)
})

async function getAddress(cep) {
    const res = await axios.get(`https://viacep.com.br/ws/${cep}/json/`)
    
    return res.data
}

// middlewares
function ensureAuthenticated(req, res, next) {
    const authHeader = req.headers['authorization']
    console.log(authHeader)
    if (!authHeader) {
        res.sendStatus(401)
        return
    }

    next()
}

app.listen(3000, () => console.log('servidor rodando na porta 3000'))