type Props = {
  name: string;
  type: string;
  placeholder: string;
  autoFocus?: boolean;
  handleChange: React.ChangeEventHandler<HTMLInputElement>;
  //value: any;
};

const Input: React.FC<Props> = ({
  name,
  type,
  placeholder,
  autoFocus,
  handleChange,
  //value,
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
        //todo
        //value={value}
      />
    </div>
  );
};

export default Input;
