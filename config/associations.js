const {Producto} = require('./../models/producto');
const {Foto} = require('./../models/foto');

Producto.hasMany(Foto);
Foto.belongsTo(Producto);