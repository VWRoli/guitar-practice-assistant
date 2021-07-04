type Props = {
  name: string;
  type: string;
  placeholder: string;
  autoFocus?: boolean;
  handleChange: React.ChangeEventHandler<HTMLInputElement>;
};

const Input: React.FC<Props> = ({
  name,
  type,
  placeholder,
  autoFocus,
  handleChange,
}): JSX.Element => {
  return (
    <div className="auth__form-group">
      <label htmlFor={name}></label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        autoFocus={autoFocus}
        onChange={handleChange}
      />
    </div>
  );
};

export default Input;
