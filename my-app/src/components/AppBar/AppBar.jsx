import { StatusFilter } from 'components/StatusFilter/StatusFilter';
import { TaskCounter } from 'components/TaskCounter/TaskCounter';
import { Header, Section, Title } from './AppBar.styled';

export const AppBar = () => {
  return (
    <Header>
      <Section>
        <Title>Tasks</Title>
        <TaskCounter />
      </Section>
      <Section>
        <Title>Filter by status</Title>
        <StatusFilter />
      </Section>
    </Header>
  );
};
