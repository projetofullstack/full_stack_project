const connection = require('./connection');

const create = async (dataCreate) => {
  const {
    id, email, name, password,
  } = dataCreate;

  try {
    const query = 'INSERT INTO user (user_id, user_email, user_name, user_password) VALUES(?, ?, ?, ?);';

    await connection.execute(query, [id, email, name, password]);

    return id;
  } catch (err) {
    const { error } = console;
    error(err);
    return {
      error: true,
    };
  }
};

const getUserByEmail = async (userEmail) => {
  const query = 'SELECT * FROM user WHERE user_email = ?';
  const [result] = await connection.execute(query, [userEmail]);
  if (Object.values(result).length === 0) return null;
  if (result === undefined) return null;
  return result;
};

const deleteById = async ({ id }) => {
  try {
    const query = 'DELETE FROM user WHERE user_id= ?';
    const [result] = await connection.execute(query, [id]);
    if (result.affectedRows === 1) return id;
    return null;
  } catch (err) {
    const { error } = console;
    error(err);
    return {
      error: true,
    };
  }
};

const deleteByEmail = async (userEmail) => {
  try {
    const resultGet = await getUserByEmail(userEmail);

    const resultDelete = await deleteById({ id: resultGet.user_id });
    return resultDelete;
  } catch (err) {
    const { error } = console;
    error(err);
    return {
      error: true,
    };
  }
};

module.exports = {
  deleteById,
  deleteByEmail,
  create,
  getUserByEmail,
};
