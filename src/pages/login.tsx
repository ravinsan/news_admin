import { LoginForm } from "@/components/login-form"

export default function LogIn() {
  return (
    <div className="bg-gradient-to-r
from-[#0f172a]
to-[#334155] flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm">
        <LoginForm />
      </div>
    </div>
  )
}
