import { useEffect, useState } from 'react'
import { TaskProps } from './@types/Task'
import {
  Container,
  Content,
  ContentForm,
  CountContainer,
  Header,
} from './App.styles'
import { FormCreateTask } from './components/CreateTask'
import { TaskList } from './components/TasksList'
import { GlobalStyle } from './styles/global'

export function App() {
  const [list, setList] = useState<TaskProps[]>(() => {
    const existingList = localStorage.getItem('@tasks1.0.0')

    if (existingList) {
      return JSON.parse(existingList)
    }

    return []
  })

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

  function toggleTaskChecked(taskId: number) {
    setList((oldTasks) => {
      return oldTasks.map((task) => {
        if (task.id === taskId) {
          return {
            ...task,
            checked: !task.checked,
          }
        }

        return task
      })
    })
  }

  useEffect(() => {
    const stateJSON = JSON.stringify(list)

    localStorage.setItem('@tasks1.0.0', stateJSON)
  }, [list])

  const count = list.filter((task) => task.checked).length

  return (
    <Container>
      <GlobalStyle />
      <Header>Lista de Tarefas</Header>

      <ContentForm>
        <FormCreateTask CreateNewTask={handleCreateTask} />
        <Content>
          <CountContainer>
            <div>
              Tarefas: <span>{list.length}</span>
            </div>

            <div>
              Concluídas:{' '}
              <span>
                {count} {list.length > 0 ? `de ${list.length}` : ''}
              </span>
            </div>
          </CountContainer>
          {list.map((task) => {
            return (
              <TaskList
                key={task.id}
                item={task}
                removeTask={handleRemoveTask}
                toggleTaskChecked={toggleTaskChecked}
              />
            )
          })}
        </Content>
      </ContentForm>
    </Container>
  )
}
