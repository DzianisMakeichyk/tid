import React, { ChangeEvent, useState } from 'react';

import Button from '../Button';

import { StyledSearchWrapper, StyledSearchInput } from './styles';

interface SearchProps {
  placeholder: string;
  buttonLabel: string;
  onSearch: (el: string) => void;
}

const Search = ({ placeholder, buttonLabel, onSearch }: SearchProps) => {
  const [searchValue, setSearchValue] = useState('');

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    setSearchValue(value);
    onSearch(value);
  };

  const onChange = () => onSearch(searchValue);

  const handleKeyEvent = (event: any) => {
    if (event.keyCode !== 13 || !searchValue) return;

    onSearch(searchValue);
  };

  return (
    <StyledSearchWrapper>
      <StyledSearchInput>
        <input
          value={searchValue}
          type="text"
          placeholder={placeholder}
          autoComplete="off"
          onChange={handleChange}
          onKeyUp={handleKeyEvent}
        />
      </StyledSearchInput>
      <Button onClick={onChange}>{buttonLabel}</Button>
    </StyledSearchWrapper>
  );
};

export default Search;
