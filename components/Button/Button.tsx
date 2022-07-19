import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';

interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {}

function Button({ ...props }: ButtonProps) {
  return (
    <button type="button" {...props}>Button</button>
  );
}

export default Button;
