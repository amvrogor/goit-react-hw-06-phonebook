import { useSelector } from 'react-redux';
import { getTasks } from '../../redux/selectors';
import { Text } from './TaskCounter.styled';

export const TaskCounter = () => {
  // Получаем массив задач из состояния Redux
  const tasks = useSelector(getTasks);
  // На базе состояния Redux получаем производные данные
  const count = tasks.reduce(
    (acc, task) => {
      if (task.completed) {
        acc.completed += 1;
      } else {
        acc.active += 1;
      }
      return acc;
    },
    { active: 0, completed: 0 }
  );
  return (
    <div>
      {' '}
      <Text>Active: {count.active}</Text>{' '}
      <Text>Completed: {count.completed}</Text>
    </div>
  );
};
