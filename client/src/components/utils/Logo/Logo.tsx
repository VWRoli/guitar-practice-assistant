type Props = {
  preText?: string;
  accentText: any;
  postText?: string;
};

const Logo: React.FC<Props> = ({
  preText,
  accentText,
  postText,
}): JSX.Element => {
  return (
    <h1 className="logo">
      {preText}
      <span className="accent-clr">{accentText}</span> {postText}
    </h1>
  );
};

export default Logo;
