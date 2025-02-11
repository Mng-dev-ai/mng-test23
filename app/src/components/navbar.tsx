import React from 'react'
import { Link } from 'react-router-dom'
import { 
  Home, 
  DollarSign, 
  LogIn, 
  UserPlus, 
  User, 
  LogOut, 
  LayoutDashboard 
} from 'lucide-react'

import { Button } from '@/components/ui/button'
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuLabel, 
  DropdownMenuSeparator, 
  DropdownMenuTrigger 
} from '@/components/ui/dropdown-menu'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { ModeToggle } from './mode-toggle'
import { useAuthStore } from '@/stores/auth-store'

const NavLinks = [
  { 
    name: 'Home', 
    path: '/', 
    icon: Home 
  },
  { 
    name: 'Pricing', 
    path: '/pricing', 
    icon: DollarSign 
  }
]

export function Navbar() {
  const { user, isAuthenticated, logout } = useAuthStore()

  const renderAuthButtons = () => {
    if (isAuthenticated && user) {
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="relative h-8 w-8 rounded-full">
              <Avatar className="h-8 w-8">
                <AvatarImage 
                  src={user.avatar || `https://picsum.photos/seed/${user.email}/200/200`} 
                  alt={user.name}
                />
                <AvatarFallback>{user.name.slice(0,2).toUpperCase()}</AvatarFallback>
              </Avatar>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56" align="end">
            <DropdownMenuLabel>
              <div className="flex flex-col space-y-1">
                <p className="text-sm font-medium leading-none">{user.name}</p>
                <p className="text-xs leading-none text-muted-foreground">
                  {user.email}
                </p>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem asChild>
              <Link to="/dashboard" className="flex items-center">
                <LayoutDashboard className="mr-2 h-4 w-4" />
                Dashboard
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link to="/profile" className="flex items-center">
                <User className="mr-2 h-4 w-4" />
                Profile
              </Link>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem 
              onSelect={(e) => {
                e.preventDefault()
                logout()
              }} 
              className="text-destructive focus:text-destructive"
            >
              <LogOut className="mr-2 h-4 w-4" />
              Log out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    }

    return (
      <div className="flex items-center space-x-2">
        <Button asChild variant="outline" size="sm">
          <Link to="/login" className="flex items-center">
            <LogIn className="mr-2 h-4 w-4" />
            Log In
          </Link>
        </Button>
        <Button asChild size="sm">
          <Link to="/register" className="flex items-center">
            <UserPlus className="mr-2 h-4 w-4" />
            Sign Up
          </Link>
        </Button>
      </div>
    )
  }

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center justify-between">
        {/* Logo */}
        <Link 
          to="/" 
          className="flex items-center space-x-2 font-bold text-lg"
        >
          WebCraft AI
        </Link>

        {/* Navigation Links */}
        <div className="flex items-center space-x-4">
          {NavLinks.map((link) => (
            <Link 
              key={link.path} 
              to={link.path} 
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors flex items-center"
            >
              <link.icon className="mr-2 h-4 w-4" />
              {link.name}
            </Link>
          ))}
        </div>

        {/* Right Side Actions */}
        <div className="flex items-center space-x-2">
          <ModeToggle />
          {renderAuthButtons()}
        </div>
      </div>
    </nav>
  )
}