import { FC, useState } from 'react';

import './styles.scss';

type TInput = {
  label: string;
  type: string;
  placeholder: string;
};

export const Input: FC<TInput> = ({ label, type, placeholder }) => {
  const [value, setValue] = useState('');

  return (
    <label className="label">
      {label}
      <input
        className="input"
        onBlur={e => (e.target.placeholder = placeholder)}
        onChange={e => setValue(e.target.value)}
        onFocus={e => (e.target.placeholder = '')}
        type={type}
        placeholder={placeholder}
        value={value}
      />
    </label>
  );
};
