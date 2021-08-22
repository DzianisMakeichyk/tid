import styled from 'styled-components';

export const StyledDropdown = styled.div`
  display: ${({ isOpen }: { isOpen: boolean }) => (isOpen ? 'flex' : 'none')};
  flex-direction: column;
  position: relative;
  font-size: 18px;
  line-height: 22px;
  color: var(--lightGray);
  background: var(--grayWhite);
  cursor: pointer;
  padding: 20px;
  margin-top: 10px;
  border-radius: 2px;

  ul {
    margin-left: 25px;
    list-style: none;
    padding: 0;
    max-height: 300px;
    overflow: scroll;
  }

  li {
    width: 100%;
    padding: 5px 0;
    position: relative;
    color: var(--lightGray);
    transition: color 0.4s ease;

    &:hover {
      color: var(--vividCyan);
    }
  }

  p {
    margin: 0;
  }
`;

export const HeaderDropdownItem = styled.div`
  white-space: nowrap;
  font-size: 16px;
  line-height: 22px;
  color: var(--dark);
  padding: 13px 19px 14px 11px;
`;
