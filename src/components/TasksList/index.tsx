import { Trash } from 'phosphor-react'
import { useState } from 'react'
import { TaskProps } from '../../@types/Task'
import { Container } from './styles'

interface ListProps {
  item: TaskProps
  removeTask: (id: number) => void
}

export function TaskList({ item, removeTask }: ListProps) {
  const [isChecked, setIsChecked] = useState(item.checked)

  function handleCheckbox() {
    setIsChecked(!isChecked)
  }

  function handleClickButton() {
    removeTask(item.id)
  }

  return (
    <Container check={isChecked}>
      <input type="checkbox" checked={isChecked} onChange={handleCheckbox} />
      <label>{item.name}</label>
      <button onClick={handleClickButton}>
        <Trash size={22} />
      </button>
    </Container>
  )
}
