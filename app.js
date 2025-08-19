const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const sequelize = require('./config/database');

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

//rutas
app.use('/api/colaboradores', require('./routes/colaboradorRoutes'));
app.use('/api/herramientas', require('./routes/herramientasRoutes'));
app.use('/api/dotaciones', require('./routes/dotacionRoutes'));
app.use('/api/elementos-proteccion', require('./routes/dotacionRoutes'));


sequelize.sync().then(() => {
    console.log('Base de datos sincronizada');
    app.listen(process.env.PORT, () => {
        console.log(`Servidor corriendo en puerto ${process.env.PORT}`);
    });
}).catch((err) => {
    console.error('Error al conectar la base de datos:', err);
});