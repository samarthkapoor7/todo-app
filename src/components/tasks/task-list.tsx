'use client'

import { useSelector } from 'react-redux'
import { RootState } from '../../store/store'
import TaskItem from './task-item'
import { Button } from '../ui/button'
import { Bell, RotateCcw, Calendar } from 'lucide-react'
import AddTaskDialog from './add-task-dialog'

export default function TaskList() {
  const todos = useSelector((state: RootState) => state.todos.todos)
  const pendingTodos = todos.filter(todo => !todo.completed)
  const completedTodos = todos.filter(todo => todo.completed)

  return (
    <div className="flex-1 p-4 md:p-6 overflow-y-auto">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg md:text-xl font-semibold">Add A Task</h2>
        <div className="flex space-x-2">
          <Button variant="ghost" size="icon" className="hidden md:inline-flex">
            <Bell className="w-5 h-5" />
          </Button>
          <Button variant="ghost" size="icon" className="hidden md:inline-flex">
            <RotateCcw className="w-5 h-5" />
          </Button>
          <Button variant="ghost" size="icon" className="hidden md:inline-flex">
            <Calendar className="w-5 h-5" />
          </Button>
          <AddTaskDialog />
        </div>
      </div>

      <div className="space-y-4">
        {pendingTodos.map(todo => (
          <TaskItem key={todo.id} todo={todo} />
        ))}
        
        {completedTodos.length > 0 && (
          <>
            <h3 className="text-lg font-semibold mt-8 mb-4">Completed</h3>
            {completedTodos.map(todo => (
              <TaskItem key={todo.id} todo={todo} />
            ))}
          </>
        )}
      </div>
    </div>
  )
}

