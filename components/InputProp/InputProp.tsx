import { DetailedHTMLProps, InputHTMLAttributes } from 'react';

interface IInputProp extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {}

function InputProp({ ...props }: IInputProp) {
  return (
    <input {...props} />
  );
}

export default InputProp;
