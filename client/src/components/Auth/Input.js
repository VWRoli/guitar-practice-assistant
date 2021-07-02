const Input = ({ name, type, placeholder, autoFocus, handleChange, value }) => {
  return (
    <div className="auth__form-group">
      <label htmlFor={name}></label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        autoFocus={autoFocus}
        onChange={handleChange}
        value={value}
      />
    </div>
  );
};

export default Input;
