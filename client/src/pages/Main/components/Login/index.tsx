import { MouseEvent, useState } from 'react';

import { loginUser } from '../../../../store/auth/actionCreators';
import { useAppDispatch } from '../../../../store';

import { Input } from '../Input';

import './styles.scss';

export const Login = () => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useAppDispatch();

  const submitForm = (e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => {
    e.preventDefault();
    dispatch(loginUser({ login, password }));
  };

  return (
    <div className="authForm">
      <h1 className="authForm__title -main">CRUD OPERATIONS</h1>
      <h3 className="authForm__title">Sign In</h3>
      <p className="authForm__subtitle">Enter your credentials to access your account</p>
      <form className="authForm__form">
        <Input
          label="Login"
          type="text"
          placeholder="Enter your login"
          value={login}
          onchange={setLogin}
        />
        <Input
          label="Password"
          type="password"
          placeholder="Enter your password"
          value={password}
          onchange={setPassword}
        />
        <button className="authForm__btn" onClick={e => submitForm(e)} type="submit">
          SIGN IN
        </button>
      </form>
      <p className="authForm__caption">Forgot your password? Reset Password</p>
    </div>
  );
};
