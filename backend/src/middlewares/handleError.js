// eslint-disable-next-line no-unused-vars
const handleError = (err, _req, res, _next) => {
  // if que verifica se já um statusCode criado manualemnte por nós
  if (err.statusCode !== undefined) {
    return res.status(err.statusCode).json({ message: err.message });
  }
  // if que identifica se o error possui a
  // propriedade message igual a msg padrão de (conexão recusada)
  if (err.message === 'connect ECONNREFUSED 127.0.0.1:3306') {
    return res.status(500).json({ message: 'Banco OffLine' });
  }
  // aqui todo erro genérico de qualquer bibliotéca
  // e funções vão parar aqui e será mostrado pelo console.error os detalhes.
  console.error('Gerado pelo middleware de error', err);
  return res.status(500).json({ message: 'Internal Server Error' });
};

module.exports = handleError;

// console.error detalha o erro.
