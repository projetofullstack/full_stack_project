import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3001',
});

const { log } = console;

async function singIn(email, password) {
  try {
    const { data } = await api.post('/login', { email, password });
    log(data);
    return data;
  } catch (err) {
    log(err.response.status);
    log(err.response.data.message);
    log(err);
    return {
      error: true,
      status: err.response.status,
      message: err.response.data.message,
    };
  }
}

async function singUp() {
  return null;
}

export { singIn, singUp };
