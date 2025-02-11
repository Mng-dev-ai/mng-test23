import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ModeToggle } from "@/components/mode-toggle"
import { Toaster } from "@/components/ui/toaster"
import { ProtectedRoute } from "@/components/protected-route"

// Pages
import LandingPage from "@/pages/landing"
import PricingPage from "@/pages/pricing"
import LoginPage from "@/pages/login"
import RegisterPage from "@/pages/register"

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background">
        <div className="fixed top-4 right-4 z-50">
          <ModeToggle />
        </div>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<LandingPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          
          {/* Protected Routes */}
          <Route element={<ProtectedRoute />}>
            {/* Add protected routes here, e.g. dashboard */}
            <Route path="/dashboard" element={<div>Dashboard</div>} />
          </Route>
        </Routes>
        <Toaster />
      </div>
    </Router>
  )
}

export default App