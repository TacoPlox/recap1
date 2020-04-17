// Importar librería Sequelize
const Sequelize = require('sequelize');

// Crear conexión con base de datos
const sequelize = new Sequelize('productos', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql'
});

// Probar conexión
sequelize
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });


// Exportar
module.exports = { sequelize };