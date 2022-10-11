import { Trash } from 'phosphor-react'
import { createContext, useState } from 'react'
import { TaskProps } from '../../@types/Task'
import { Button, Container } from './styles'

interface ListProps {
  item: TaskProps
  removeTask: (id: number) => void
  toggleTaskChecked: (id: number) => void
}

export function TaskList({ item, removeTask, toggleTaskChecked }: ListProps) {
  function handleClickButton() {
    removeTask(item.id)
  }

  function checkedToggle() {
    toggleTaskChecked(item.id)
  }

  return (
    <Container check={item.checked}>
      <input type="checkbox" checked={item.checked} onChange={checkedToggle} />
      <label>{item.name}</label>
      <Button onClick={handleClickButton}>
        <Trash size={22} />
      </Button>
    </Container>
  )
}
