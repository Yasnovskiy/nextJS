type InputProps = {
  type?: 'text' | 'number';
};

function Input({ type }: InputProps) {
  return (
    <input type={type} />
  );
}

export default Input;
