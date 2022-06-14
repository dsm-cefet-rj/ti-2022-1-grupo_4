const ativos = require('./ativos.json');
const carteira = require('./carteira.json');
const watchlist = require('./watchlist.json');
const usuarios = require('./usuarios.json');

module.exports = () => ({
  ativos: ativos,
  carteira: carteira,
  watchlist: watchlist,
  usuarios: usuarios
});