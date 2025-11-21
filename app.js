//Importando as dependencias
import express from 'express';
import cors from 'cors';
import colors from 'colors';
import dotenv from 'dotenv';

//Importando os Verificações

//Importando as Rotas

//Configurações
dotenv.config();
const PORT = process.env.PORT || 3000;
const app = express();


//Configurar os Middlewares
app.use(express.json());
app.use(cors());

//Rotas Internas
app.get('/ping', (req, res) => {res.send("Ping")});

//Rotas Externas

//Iniciando o Servidor
app.listen(PORT, () => {
    console.log("API desenvoldida por Deivid Roberto".cyan);

    setTimeout(() => {
        console.log(`Servidor iniciado na porta: ${PORT}`.blue)
    }, 2000)
})