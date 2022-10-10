import { Plus } from 'phosphor-react'
import { useState } from 'react'
import { Button, Form } from './styles'

interface FormProps {
  CreateNewTask: (taskName: string) => void
}

export function FormCreateTask({ CreateNewTask }: FormProps) {
  const [task, setTask] = useState('')

  function haldleClickButton() {
    CreateNewTask(task)
    setTask('')
  }

  return (
    <Form>
      <label>
        <Plus size={20} />
        <input
          value={task}
          required
          placeholder="Criar uma nova tarefa"
          onChange={(e) => setTask(e.target.value)}
        />
      </label>

      <Button type="submit" onClick={haldleClickButton} disabled={!task}>
        <Plus size={16} />
        Criar
      </Button>
    </Form>
  )
}
