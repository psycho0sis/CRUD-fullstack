import type { FC, Dispatch, SetStateAction } from 'react';

import './styles.scss';

type TInput = {
  label: string;
  type: string;
  placeholder: string;
  value: string;
  onchange: Dispatch<SetStateAction<string>>;
};

export const Input: FC<TInput> = ({ label, type, placeholder, value, onchange }) => {
  return (
    <label className="label">
      {label}
      <input
        className="input"
        onBlur={e => (e.target.placeholder = placeholder)}
        onChange={e => onchange(e.target.value)}
        onFocus={e => (e.target.placeholder = '')}
        type={type}
        placeholder={placeholder}
        value={value}
      />
    </label>
  );
};
