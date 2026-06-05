import Link from "next/link"

export default function LoginPage() {
  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-blue-600">
      <div className="w-[50%] max-w-md">
        
        <div className="mb-6 text-center">
          <Link href="/">
            <span>Tutor Victory</span>
          </Link>
        </div>

        <div className="bg-yellow-300">
          <span>Sign In</span>

        </div>
      </div>
    </div>
  )
}
