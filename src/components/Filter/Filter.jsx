import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from '../../redux/actions';
import PropTypes from 'prop-types';
import { FilterField } from './Filter.styled';

export const Filter = () => {
  const dispatch = useDispatch();
  const value = useSelector(state => state.filter);
  const changeFilter = e => {
    dispatch(setFilter(e.currentTarget.value));
  };

  return (
    <FilterField>
      Find contacts by name
      <input type="text" value={value} onChange={changeFilter} />
    </FilterField>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
