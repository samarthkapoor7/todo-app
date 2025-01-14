import { ListTodo, Calendar, Star, Layout, Users } from 'lucide-react'
import { useSelector } from 'react-redux'
import { RootState } from '../../store/store'
import Image from 'next/image'

export default function Sidebar() {
  const user = useSelector((state: RootState) => state.auth.user)
  const todos = useSelector((state: RootState) => state.todos.todos)
  const pendingTasks = todos.filter(todo => !todo.completed).length

  return (
    <aside className="w-64 bg-background border-r h-screen p-4">
      <div className="flex items-center space-x-4 mb-8">
        {user?.avatar && (
          <Image
            src={user.avatar}
            alt="Profile"
            width={48}
            height={48}
            className="rounded-full"
          />
        )}
        <div>
          <h2 className="font-semibold">Hey, {user?.name}</h2>
        </div>
      </div>

      <nav className="space-y-2">
        <button className="flex items-center space-x-3 w-full p-2 rounded-lg hover:bg-accent">
          <ListTodo className="w-5 h-5" />
          <span>All Tasks</span>
        </button>
        <button className="flex items-center space-x-3 w-full p-2 rounded-lg bg-accent">
          <Calendar className="w-5 h-5" />
          <span>Today</span>
        </button>
        <button className="flex items-center space-x-3 w-full p-2 rounded-lg hover:bg-accent">
          <Star className="w-5 h-5" />
          <span>Important</span>
        </button>
        <button className="flex items-center space-x-3 w-full p-2 rounded-lg hover:bg-accent">
          <Layout className="w-5 h-5" />
          <span>Planned</span>
        </button>
        <button className="flex items-center space-x-3 w-full p-2 rounded-lg hover:bg-accent">
          <Users className="w-5 h-5" />
          <span>Assigned to me</span>
        </button>
      </nav>

      <div className="mt-8">
        <h3 className="text-sm font-medium mb-2">Today Tasks</h3>
        <div className="text-3xl font-bold">{pendingTasks}</div>
      </div>
    </aside>
  )
}

