'use client'

import { useSelector } from 'react-redux'
import { RootState } from '../store/store'
import Header from '../components/layout/header'
import Sidebar from '../components/layout/sidebar'
import TaskList from '../components/tasks/task-list'
import LoginForm from '../components/auth/login-form'

export default function Home() {
  const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated)

  if (!isAuthenticated) {
    return <LoginForm />
  }

  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <TaskList />
      </div>
    </div>
  )
}

