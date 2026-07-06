import { Custombtn } from "./Button.styles";
const Button = ({ children, onClick }) => {
  return (
    <Custombtn onClick={onClick}>
      {children}
    </Custombtn>
  );
};

export default Button;
