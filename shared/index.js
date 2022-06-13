const ativos = require('./ativos.json');
const carteira = require('./carteira.json');
const watchlist = require('./watchlist.json');


module.exports = () => ({
  ativos: ativos,
  carteira: carteira,
  watchlist: watchlist
});