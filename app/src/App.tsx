import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ModeToggle } from "@/components/mode-toggle"
import LandingPage from "@/pages/landing"
import PricingPage from "@/pages/pricing"

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background">
        <div className="fixed top-4 right-4 z-50">
          <ModeToggle />
        </div>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/pricing" element={<PricingPage />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App