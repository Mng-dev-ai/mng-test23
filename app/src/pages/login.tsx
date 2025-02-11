import { LoginForm } from "@/components/auth/login-form"
import { AuthLayout } from "@/components/auth/auth-layout"

export default function LoginPage() {
  return (
    <AuthLayout
      title="Welcome Back"
      description="Log in to continue creating amazing websites"
    >
      <LoginForm />
    </AuthLayout>
  )
}