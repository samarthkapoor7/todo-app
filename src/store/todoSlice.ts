import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface Todo {
  id: string
  title: string
  completed: boolean
  priority: 'low' | 'medium' | 'high'
  dueDate?: string
  reminder?: string
  notes?: string
  steps?: { id: string; title: string; completed: boolean }[]
}

interface TodoState {
  todos: Todo[]
  loading: boolean
  error: string | null
}

const initialState: TodoState = {
  todos: [],
  loading: false,
  error: null,
}

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<Omit<Todo, 'id'>>) => {
      state.todos.push({
        ...action.payload,
        id: Date.now().toString(),
      })
    },
    toggleTodo: (state, action: PayloadAction<string>) => {
      const todo = state.todos.find(todo => todo.id === action.payload)
      if (todo) {
        todo.completed = !todo.completed
      }
    },
    deleteTodo: (state, action: PayloadAction<string>) => {
      state.todos = state.todos.filter(todo => todo.id !== action.payload)
    },
    updateTodo: (state, action: PayloadAction<Partial<Todo> & { id: string }>) => {
      const index = state.todos.findIndex(todo => todo.id === action.payload.id)
      if (index !== -1) {
        state.todos[index] = { ...state.todos[index], ...action.payload }
      }
    },
  },
})

export const { addTodo, toggleTodo, deleteTodo, updateTodo } = todoSlice.actions
export default todoSlice.reducer

