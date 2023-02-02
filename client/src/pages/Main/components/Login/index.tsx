import { MouseEvent } from 'react';

import { Input } from '../Input';

import './styles.scss';

export const Login = () => {
  const submitForm = (e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => {
    e.preventDefault();
  };

  return (
    <div className="authForm">
      <h1 className="authForm__title -main">CRUD OPERATIONS</h1>
      <h3 className="authForm__title">Sign In</h3>
      <p className="authForm__subtitle">Enter your credentials to access your account</p>
      <form className="authForm__form">
        <Input label="Email" type="email" placeholder="Enter your email" />
        <Input label="Password" type="password" placeholder="Enter your password" />
        <button className="authForm__btn" onClick={e => submitForm(e)} type="submit">
          SIGN IN
        </button>
      </form>
      <p className="authForm__caption">Forgot your password? Reset Password</p>
    </div>
  );
};
