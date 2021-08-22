import React, { useState, useRef, SyntheticEvent, useEffect } from 'react';

import useOnClickOutside from '../../hooks/useOnClickOutside';

import { StyledDropdown } from './styles';

interface DropdownComponentProps {
  finished: boolean;
  onClick: (el: number) => void;
  options: any[];
  label: string;
}

const Dropdown = ({ options, label, finished, onClick }: DropdownComponentProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef();

  const handleToggleDropdown = (e: SyntheticEvent) => {
    e.stopPropagation();
    setIsOpen(!isOpen);
  };

  useOnClickOutside(ref, () => setIsOpen(false));

  const handleSelectItem = (e: SyntheticEvent, id: number) => {
    e.stopPropagation();
    setIsOpen(false);
    onClick(id);
  };

  useEffect(() => setIsOpen(finished), [finished]);

  return (
    <StyledDropdown
      isOpen={isOpen}
      onClick={handleToggleDropdown}
      // @ts-ignore
      ref={ref}
    >
      <p>{label}</p>
      <ul>
        {options.map(({ id, name }) => (
          <li key={id} onClick={(e) => handleSelectItem(e, id)}>
            {name}
          </li>
        ))}
      </ul>
    </StyledDropdown>
  );
};

export default Dropdown;
