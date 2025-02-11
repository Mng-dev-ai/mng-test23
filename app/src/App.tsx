import { ModeToggle } from "@/components/mode-toggle"
import LandingPage from "@/pages/landing"

function App() {
  return (
    <div className="min-h-screen bg-background">
      <div className="fixed top-4 right-4 z-50">
        <ModeToggle />
      </div>
      <LandingPage />
    </div>
  )
}

export default App