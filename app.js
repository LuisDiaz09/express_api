// Usando objeto express
const express = require('express')
// App de Express
const app = express()
app.use(express.json()) // Indicamos que usaremos JSON
// Puerto en que vamos a ver nuestra app: localhost:3000
const port = 3000

//HTTP METHODS
//Creando un endpoint que regresa una lista de explorers, a partir del método GET
app.get('/v1/explorers', (req, res) => {
    console.log(`Api Explorers GET ALL requests ${new Date()}`)
    const explorer1 = {id: 1, name: "Luis"}
    const explorer2 = {id: 2, name: "Angel"}
    const explorer3 = {id: 3, name: "Juan"}
    const explorer4 = {id: 4, name: "Miguel"}
    const explorers = [explorer1, explorer2, explorer3, explorer4]
    res.status(200).json(explorers)
  })

//Creando un endpoint que regresa un explorer con ID, a partir del método GET
app.get('/v1/explorers/:id', (req,res) =>{
    console.log(`Obteniendo explorer con ID: ${req.params.id}`)
    const explorer = {id: 1, name: "Luis"}
    res.status(200).json(explorer)
})

//Creando un endpoint que se encarga de crear un explorer, a partir del método POST
app.post('/v1/explorers', (req,res) => {
    console.log(`Api Explorers POST request ${new Date()}`)
    const requestBody = req.body //Parámetros de un cliente
    res.status(201).json({message: "Created"})
})

// Con esto inicializamos esta app
app.listen(port, () => {
 console.log(`Example app listening on port ${port}`)
})

