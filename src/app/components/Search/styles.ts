import styled from 'styled-components';

export const StyledSearchWrapper = styled.div`
  display: inline-flex;
  width: 100%;

  button {
    margin-left: 25px;
  }
`;

export const StyledSearchInput = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: start;
  width: 100%;
  border-radius: 2px;
  background-color: var(--grayWhite);
  color: var(--lightGray);
  font-size: 18px;

  input {
    background: transparent;
    border: none;
    padding: 20px;
    width: 100%;
    color: var(--vividCyan);
  }
`;
