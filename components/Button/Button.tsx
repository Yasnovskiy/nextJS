import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';

interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {}

function Button({ type, ...props }: ButtonProps) {
  return (
    // eslint-disable-next-line react/button-has-type
    <button type={type} {...props}>Button</button>
  );
}

export default Button;
