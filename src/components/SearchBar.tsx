import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { setSearchQuery } from '../redux/contactsSlice.ts';

const SearchWrapper = styled.div`
  margin-bottom: 20px;

  input {
    width: 100%;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 16px;
  }
`;

const SearchBar: React.FC = () => {
  const dispatch = useDispatch();

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchQuery(e.target.value));
  };

  return (
    <SearchWrapper>
      <input
        type="text"
        placeholder="Localizar contato ...."
        onChange={handleSearch}
      />
    </SearchWrapper>
  );
};

export default SearchBar;
