import styled from 'styled-components';

export const StyledButton = styled.button`
  cursor: pointer;
  display: block;
  font-size: 16px;
  font-weight: 500;
  max-width: 100%;
  text-transform: uppercase;
  border-width: 1px;
  border-style: solid;
  transition: background 0.4s ease, border-color 0.4s ease, color 0.4s ease;
  white-space: nowrap;
  color: var(--black);
  border-color: var(--black);
  background: var(--vividCyan);
  border-radius: 2px;
  padding: 20px 15px;

  &:hover {
    color: var(--vividCyan);
    border-color: var(--vividCyan);
    background: var(--black);
  }
`;

export { StyledButton as default };
