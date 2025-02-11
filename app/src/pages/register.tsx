import { RegisterForm } from "@/components/auth/register-form"
import { AuthLayout } from "@/components/auth/auth-layout"

export default function RegisterPage() {
  return (
    <AuthLayout
      title="Create an Account"
      description="Start your website-building journey"
    >
      <RegisterForm />
    </AuthLayout>
  )
}