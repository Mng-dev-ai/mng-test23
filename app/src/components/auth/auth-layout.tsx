import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import { Github, Google } from "lucide-react"

interface AuthLayoutProps {
  title: string
  description: string
  children: React.ReactNode
  showSocialLogin?: boolean
}

export function AuthLayout({ 
  title, 
  description, 
  children, 
  showSocialLogin = true 
}: AuthLayoutProps) {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background p-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        <CardContent>
          {children}
          
          {showSocialLogin && (
            <>
              <div className="flex items-center my-6">
                <Separator className="flex-grow" />
                <span className="px-4 text-muted-foreground text-sm">
                  Or continue with
                </span>
                <Separator className="flex-grow" />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <Button variant="outline">
                  <Google className="mr-2 h-4 w-4" />
                  Google
                </Button>
                <Button variant="outline">
                  <Github className="mr-2 h-4 w-4" />
                  GitHub
                </Button>
              </div>
            </>
          )}
        </CardContent>
      </Card>
    </div>
  )
}