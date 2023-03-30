import { useDispatch } from 'react-redux';
import { addTask } from '../../redux/actions';
import { Button } from 'components/Button/Button';
import { Form, Field } from './TaskForm.styled';

export const TaskForm = () => {
  // Получаем ссылку на функцию отправки экшенов
  const dispatch = useDispatch();
  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;
    // Вызываем генератор экшена и передаем текст задачи для поля payload
    // Отправляем результат - экшен создания задачи
    dispatch(addTask(form.elements.text.value));
    form.reset();
  };
  return (
    <Form onSubmit={handleSubmit}>
      <Field type="text" name="text" placeholder="Enter task text..." />
      <Button type="submit">Add task</Button>
    </Form>
  );
};
