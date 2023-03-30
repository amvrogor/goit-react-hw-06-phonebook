import { useSelector, useDispatch } from 'react-redux';
import { Button } from 'components/Button/Button';
import { statusFilters } from '../../redux/constants';
import { getStatusFilter } from '../../redux/selectors';
import { setStatusFilter } from '../../redux/actions';
import { Wrapper } from './StatusFilter.styled';

export const StatusFilter = () => {
  // Получаем ссылку на функцию отправки экшенов
  const dispatch = useDispatch();
  const filter = useSelector(getStatusFilter);
  // Вызываем генератор экшена и передаём значение фильтра
  // Отправляем результат - экшен изменения фильтра
  const handleFilterChange = filter => dispatch(setStatusFilter(filter));
  return (
    <Wrapper>
      <Button
        selected={filter === statusFilters.all}
        onClick={() => handleFilterChange(statusFilters.all)}
      >
        All
      </Button>
      <Button
        selected={filter === statusFilters.active}
        onClick={() => handleFilterChange(statusFilters.active)}
      >
        Active
      </Button>
      <Button
        selected={filter === statusFilters.completed}
        onClick={() => handleFilterChange(statusFilters.completed)}
      >
        Completed
      </Button>
    </Wrapper>
  );
};
