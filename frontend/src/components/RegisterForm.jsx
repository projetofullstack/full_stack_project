import React, { useState } from 'react';
import { signUp as signUpService } from '../services/apiFullStack';

const defaultForm = {
  email: '',
  name: '',
  password: '',
};

function RegisterForm() {
  // const navigate = useNavigate();
  const [dataRegister, setDataRegister] = useState(defaultForm);

  const signIn = async () => {
    const { email, name, password } = dataRegister;
    const response = await signUpService({ email, password, name });
    if (response.error === true) {
      return global.alert(response.message);
    }

    const { token } = response;
    return global.alert(token);
    // localStorage.setItem('tokenFullStack', token);
    // return navigate('/main');
  };

  return (
    <form>
      <label htmlFor="email">
        Email:
        <input
          type="email"
          id="email"
          name="email"
          value={dataRegister.email}
          onChange={
            (e) => setDataRegister({ ...dataRegister, email: e.target.value })
          }
        />
      </label>
      <label htmlFor="name">
        Nome
        <input
          type="text"
          id="name"
          name="name"
          value={dataRegister.name}
          onChange={
            (e) => setDataRegister({ ...dataRegister, name: e.target.value })
          }
        />
      </label>
      <label htmlFor="password">
        Senha
        <input
          type="text"
          id="password"
          name="password"
          value={dataRegister.password}
          onChange={
            (e) => setDataRegister({ ...dataRegister, password: e.target.value })
          }
        />
      </label>
      <button type="button" onClick={signIn}>Cadastrar</button>
    </form>
  );
}

export default RegisterForm;
