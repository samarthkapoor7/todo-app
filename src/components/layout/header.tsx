import { Search, Grid2X2 } from 'lucide-react'
import { Button } from '../ui/button'
import { useDispatch } from 'react-redux'
import { logout } from '../../store/authSlice'
import { ThemeToggle } from '../theme-toggle'

export default function Header() {
  const dispatch = useDispatch()

  return (
    <header className="flex items-center justify-between p-4 border-b bg-background">
      <div className="flex items-center space-x-4">
        <h1 className="text-2xl font-bold text-primary">DoIt</h1>
      </div>
      <div className="flex items-center space-x-4">
        <Button variant="ghost" size="icon">
          <Search className="w-5 h-5" />
        </Button>
        <Button variant="ghost" size="icon">
          <Grid2X2 className="w-5 h-5" />
        </Button>
        <ThemeToggle />
        <Button variant="outline" onClick={() => dispatch(logout())}>
          Logout
        </Button>
      </div>
    </header>
  )
}

