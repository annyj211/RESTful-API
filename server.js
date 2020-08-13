// ejercicio clase del 12 de Agosto del 2020
const express = require("express"); //importar express
const bodyparser = require("body-parser"); //importar bodyparser
const { Recoverable } = require("repl");
const app = express(); //inicializar express a una constante
const autores = [
{
    id:1,
    nombre:"Jorge Luis",
    apellido: "Borges",
    fechaDeNacimiento: "24/08/1899",
    libros: [
        {
            id:1,
            titulo:"Ficciones",
            descripcion: "Se trata de uno de sus más...",
            anioPublicación: 1944
        },
        {
            id:2,
            titulo: "El Aleph",
            descripcion: "Otra recopilación de cuentos...",
            anioPublicación:1949
        }
    ]
},
{
    id:4,
    nombre:"Jorge Luis",
    apellido: "Borges",
    fechaDeNacimiento: "24/08/1899",
    libros: [
        {
            id:5,
            titulo:"Ficciones",
            descripcion: "Se trata de uno de sus más...",
            anioPublicación: 1944
        },
        {
            id:6,
            titulo: "El Aleph",
            descripcion: "Otra recopilación de cuentos...",
            anioPublicación:1949
        }
    ]
}
];
app.get("/autores",(req,res,next)=>{
    res.json({
        data:autores
    })
})
app.post("/autores",(req,res,next)=>{
       let autor= autores.find((autor)=>{
       return autor.nombre==req.body.nombre && autor.apellido== req.body.apellido;
    })
    if(autor){
        res.status(409);
        res.json({mensaje:"El usuario ya existe"})
    }    
        let lastAutor = autores[autores.length-1];
        // autores.push(req.body); Agregar los datos que el cliente nos envia
        autores.push({id:lastAutor+1,nombre:req.body.nombre,apellido:req.body.apellido,fechaDeNacimiento:req.body.fechaDeNacimiento});
        res.status(201);
        res.json({mensaje:"El usuario fue agregado"})
        info:req.body
    });

app.listen(3000, () => {
    console.log("Escuchando en http://localhost:3000/");
});
