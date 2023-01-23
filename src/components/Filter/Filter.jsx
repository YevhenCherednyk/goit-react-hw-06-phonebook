import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setQuery } from 'redux/filterSlice';
import { Label, Span, Input } from './Filter.styled';
import { selectFilter } from 'redux/selectors';

const Filter = () => {
  const dispatch = useDispatch();
  const query = useSelector(selectFilter);

  const onChange = query => {
    dispatch(setQuery(query));
  };

  return (
    <Label>
      <Span>Find contacts by name</Span>
      <Input
        type="text"
        value={query}
        onChange={evt => onChange(evt.target.value)}
      />
    </Label>
  );
};

export default Filter;
