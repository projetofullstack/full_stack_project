const connection = require('./connection');
const { parseCalmeCase } = require('../utils');

const login = async (dataLogin) => {
  try {
    const { email } = dataLogin;

    const query = 'SELECT * FROM user WHERE user_email = ?';

    const [[result]] = await connection.execute(query, [email]);

    if (result === undefined) return null;

    if (Object.values(result).length === 0) return null;

    return parseCalmeCase(result);
  } catch (err) {
    const { error } = console;
    error(err);
    return {
      error: true,
    };
  }
};
module.exports = login;
