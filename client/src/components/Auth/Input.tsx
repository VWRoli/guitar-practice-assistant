type Props = {
  name: string;
  type: string;
  placeholder: string;
  autoFocus?: boolean;
  handleChange: React.ChangeEventHandler<HTMLInputElement>;
  error?: string;
};

const Input: React.FC<Props> = ({
  name,
  type,
  placeholder,
  autoFocus,
  handleChange,
  error,
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
      {error && <small className="form-error-msg">{error}</small>}
    </div>
  );
};

export default Input;
