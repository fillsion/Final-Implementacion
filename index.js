/* import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import controlador from './MVC/Controlador.js'
import mySql from 'mysql' */

const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const controladorFactorial = require('./MVC/Factorial/ControladorFactorial.js')
const controladorFibonacci = require('./MVC/Fibonacci/ControladorFibonacci.js')
const controladorCirculo = require('./MVC/Circulo/ControladorCirculo.js')
const controladorTriangulo = require('./MVC/Triangulo/ControladorTriangulo.js')
const controladorRectangulo = require('./MVC/Rectangulo/ControladorRectangulo.js')
const app = express()

app.use(cors())

app.use(express.json())
app.use(bodyParser.urlencoded({extended: true}))



// en este metodo se obtienen los estudiantes de la base de datos y se remiten al frontend
app.listen(process.env.PORT || 3001,()=>{
    console.log('running on 3001')
})
app.get('/Fibonacci', (req, res) => {
    try{
        console.log("Fibonacci: ",req.query.Numero)
        const x = controladorFibonacci(req.query.Numero)
        const isNumero = x.isNumero
        const Lista = x.Lista
        res.send({isNumero,Lista}).status(200)
    } catch (error) {
        //throw error
        console.log(error)
        return res.send("bad request").status(400)
    }
})


app.get('/Factorial', (req, res) => {
    try{
        console.log("Factorial: ",req.query.Numero)
        const x = controladorFactorial(req.query.Numero)
        number = x.result
        res.send({number}).status(200)
    } catch (error) {
        //throw error
        console.log(error)
        return res.send("bad request").status(400)
    }
})




app.get('/Circulo', (req, res) => {
    try{
        console.log("Circulo: ",req.query.Numero)
        const x = controladorCirculo(req.query.Numero)
        number = x.result
        res.send({number}).status(200)
    } catch (error) {
        //throw error
        console.log(error)
        return res.send("bad request").status(400)
    }
})

app.get('/Rectangulo', (req, res) => {
    try{
        console.log("Rectangulo Lado1: ",req.query.Lado1)
        console.log("Rectangulo Lado2: ",req.query.Lado2)
        const x = controladorRectangulo(req.query.Lado1, req.query.Lado2)
        number = x.result
        res.send({number}).status(200)
    } catch (error) {
        //throw error
        console.log(error)
        return res.send("bad request").status(400)
    }
})


