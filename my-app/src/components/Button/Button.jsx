import { ButtonStyled } from './Button.styled';

export const Button = ({
  selected = false,
  type = 'button',
  children,
  ...otherProps
}) => {
  return (
    <ButtonStyled isSelected={selected} type={type} {...otherProps}>
      {children}
    </ButtonStyled>
  );
};
