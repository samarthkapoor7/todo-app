'use client'

import { Checkbox } from '../ui/checkbox'
import { Star, Trash2 } from 'lucide-react'
import { useDispatch } from 'react-redux'
import { toggleTodo, updateTodo, deleteTodo, Todo } from '../../store/todoSlice'
import { Button } from '../ui/button'
import { format } from 'date-fns'

interface TaskItemProps {
  todo: Todo
}

export default function TaskItem({ todo }: TaskItemProps) {
  const dispatch = useDispatch()

  return (
    <div className="flex items-center justify-between p-4 border rounded-lg hover:bg-accent/50 transition-colors">
      <div className="flex items-center space-x-4 flex-1">
        <Checkbox
          checked={todo.completed}
          onCheckedChange={() => dispatch(toggleTodo(todo.id))}
        />
        <div className="flex flex-col">
          <span className={`${todo.completed ? 'line-through text-muted-foreground' : ''}`}>
            {todo.title}
          </span>
          {todo.dueDate && (
            <span className="text-sm text-muted-foreground">
              Due: {format(new Date(todo.dueDate), 'MMM d, yyyy')}
            </span>
          )}
        </div>
      </div>
      <div className="flex items-center space-x-2">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => dispatch(updateTodo({ 
            id: todo.id, 
            priority: todo.priority === 'high' ? 'low' : 'high' 
          }))}
        >
          <Star
            className={`w-5 h-5 ${todo.priority === 'high' ? 'fill-yellow-400 text-yellow-400' : ''}`}
          />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => dispatch(deleteTodo(todo.id))}
          className="text-destructive hover:text-destructive"
        >
          <Trash2 className="w-5 h-5" />
        </Button>
      </div>
    </div>
  )
}

