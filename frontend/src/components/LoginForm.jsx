/* eslint-disable no-alert */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './loginForm.css';

import { singIn as singInService } from '../services';

function LoginForm() {
  const navigate = useNavigate();
  const [dataLogin, setDataLogin] = useState({ email: '', password: '' });

  const singIn = async () => {
    const { email, password } = dataLogin;
    const response = await singInService(email, password);
    if (response.error === true) {
      return alert(response.message);
    }

    const { token } = response;
    localStorage.setItem('tokenFullStack', token);
    return navigate('/main');
  };

  return (
    <form>
      <label htmlFor="email" className="forms">
        Email:
        <input
          className="forms"
          type="email"
          id="email"
          name="email"
          value={dataLogin.email}
          onChange={(e) => setDataLogin({ ...dataLogin, email: e.target.value })}
        />
      </label>
      <label htmlFor="password" className="forms">
        Senha:
        <input
          className="forms"
          type="password"
          id="password"
          name="password"
          value={dataLogin.password}
          onChange={(e) => setDataLogin({ ...dataLogin, password: e.target.value })}
        />
        <button
          className="forms"
          type="button"
          onClick={singIn}
        >
          Logar

        </button>
      </label>
    </form>
  );
}

export default LoginForm;
