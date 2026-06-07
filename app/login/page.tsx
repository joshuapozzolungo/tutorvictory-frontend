import Link from "next/link"
import "./login.css";

export default function LoginPage() {
  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-[#EFEAFF]">
      <div className="w-[40%] max-w-md">
        
        <div className="mb-6 text-center text-2xl font-semibold">
          <Link href="/">
            <span>Tutor Victory</span>
          </Link>
        </div>

        <div className="bg-white rounded-md  px-10 py-5 space-y-5">

          <h1 className="text-xl font-bold text-center">Sign In</h1>
          
          <div className="relative">
            <input 
              id="email"
              inputMode="email" 
              placeholder=" "
                   type="text" 
                   required 
                   autoComplete="email" 
                   autoCapitalize="none" 
                   spellCheck="false"
                   className="peer w-full px-2 py-3 focus:border-[#6D28FF] focus:ring-1 focus:ring-call-to-action border border-black/20 rounded-md"/>
            <label htmlFor="email" className="absolute bg-white text-sm left-1/20 top-1/2 -translate-y-1/2 transition-all duration-200 
                peer-focus:top-0 peer-focus:text-xs peer-focus:left-2 peer-[:not(:placeholder-shown)]:top-0 peer-[:not(:placeholder-shown)]:text-xs
                peer-[:not(:placeholder-shown)]:left-2">
              Email*
            </label>
          </div>

          <div className="relative">
            <input 
              id="password"
              inputMode="text" 
              placeholder=" "
                   type="text" 
                   required 
                   autoComplete="current-password" 
                   autoCapitalize="none" 
                   spellCheck="false"
                   className="peer w-full px-2 py-3 focus:ring-1 focus:ring-call-to-action border border-black/20 rounded-md"/>
            <label htmlFor="password" className="absolute bg-white text-sm left-1/20 top-1/2 -translate-y-1/2 transition-all duration-200 
                peer-focus:top-0 peer-focus:text-xs peer-focus:left-2 peer-[:not(:placeholder-shown)]:top-0 peer-[:not(:placeholder-shown)]:text-xs
                peer-[:not(:placeholder-shown)]:left-2 focus:border-call-to-action focus:outline-none ">
              Password*
            </label>
          </div>
          
          <a className="text-call-to-action text-medium text-sm hover:cursor-pointer hover:underline self-left">
            Forgot your password?
          </a>

          <button className="block bg-call-to-action p-3 rounded-md text-white text-sm text-medium hover:cursor-pointer w-full">
            Log In
          </button>

          <div className="or">
            <span>OR</span>
          </div>
        </div>
      </div>
    </div>
  )
}
