import { useDispatch } from 'react-redux';
import { MdClose } from 'react-icons/md';
import { deleteTask, toggleCompleted } from '../../redux/actions';
import { Wrapper, Text, Button, Checkbox } from './Task.styled';

export const Task = ({ task }) => {
  // Получаем ссылку на функцию отправки экшенов
  const dispatch = useDispatch();
  // Вызываем генератор экшена и передаём идентификатор задачи
  // Отправляем результат - экшен удаления задачи
  const handleDelete = () => dispatch(deleteTask(task.id));
  // Вызываем генератор экшена и передаём идентификатор задачи
  // Отправляем результат - экшен переключения статуса задачи
  const handleToggle = () => dispatch(toggleCompleted(task.id));
  return (
    <Wrapper>
      <Checkbox
        type="checkbox"
        onChange={handleToggle}
        checked={task.completed}
      />
      <Text>{task.text}</Text>
      <Button type="button" onClick={handleDelete}>
        {/* Delete */}
        <MdClose size={24} />
      </Button>
    </Wrapper>
  );
};
