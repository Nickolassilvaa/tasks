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
      <div>
        <Plus size={22} />
        <input
          value={task}
          required
          placeholder="Criar uma nova tarefa"
          onChange={(e) => setTask(e.target.value)}
        />
      </div>

      <Button type="submit" onClick={haldleClickButton} disabled={!task}>
        <Plus size={22} />
        Criar
      </Button>
    </Form>
  )
}
