import React, { SyntheticEvent } from 'react';

import StyledButton from './styles';

interface ButtonComponentProps {
  children: string;
  onClick?: (el: SyntheticEvent) => void;
}

const Button = ({ children, onClick = () => null }: ButtonComponentProps) => (
  <StyledButton onClick={onClick}>{children}</StyledButton>
);

export default Button;
