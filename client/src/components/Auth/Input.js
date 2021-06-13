const Input = ({ name, type, placeholder, autoFocus, handleChange }) => {
  return (
    <div className="auth__form-group">
      <label htmlFor={name}></label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        autoFocus={autoFocus}
        required
        onChange={handleChange}
      />
    </div>
  );
};

export default Input;
