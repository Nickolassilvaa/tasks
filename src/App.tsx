import { useState } from 'react'
import { TaskProps } from './@types/Task'
import { Container, Content, ContentForm, Header } from './App.styles'
import { FormCreateTask } from './components/CreateTask'
import { TaskList } from './components/TasksList'
import { GlobalStyle } from './styles/global'

export function App() {
  const [list, setList] = useState<TaskProps[]>([])

  function handleCreateTask(taskName: string) {
    const newTask = {
      id: Math.random(),
      name: taskName,
      checked: false,
    }

    setList([...list, newTask])
  }

  function handleRemoveTask(id: number) {
    const newTask = list.filter((item) => item.id !== id)

    setList(newTask)
  }

  return (
    <Container>
      <GlobalStyle />
      <Header>Lista de Tarefas</Header>

      <ContentForm>
        <FormCreateTask CreateNewTask={handleCreateTask} />

        <Content>
          {list.map((task) => {
            return (
              <TaskList
                key={task.id}
                item={task}
                removeTask={handleRemoveTask}
              />
            )
          })}
        </Content>
      </ContentForm>
    </Container>
  )
}
