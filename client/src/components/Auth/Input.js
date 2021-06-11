const Input = ({ name, type, placeholder, autoFocus }) => {
  return (
    <div className="auth__form-group">
      <label htmlFor={name}></label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        autoFocus={autoFocus}
        required
      />
    </div>
  );
};

export default Input;
