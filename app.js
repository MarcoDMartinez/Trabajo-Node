//Esto es como un import
const express = require("express");

//Esto es como un require
const app = express();
const PORT = 3000;

//Esto es un arreglo de objetos
const games = [
    {
        id: 1,name: "Among Us", genre: "Party"
    },
    {
        id: 2,name: "Minecraft", genre: "Sandbox"
    },
    {
        id: 3,name: "Fortnite", genre: "Battle Royale"
    },
    {
        id: 4,name: "League of Legends", genre: "MOBA"
    }
];

//Esto es un endpoint
app.get("/games", (req, res) => {
    res.json(games);
});

//Esto es otro endpoint
app.get("/games2", (req, res) => {
    res.json(games);
});

app.listen(PORT, () => { //Esto es un callback
    console.log(`Servidor escuchando en el puerto ${PORT} :D`);
});