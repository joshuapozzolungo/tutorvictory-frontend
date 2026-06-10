import Link from "next/link";
import Image from "next/image"

const passwordRequirements = [{label: "at least eight characters", test: (p:string) => p.length >= 8},
                              {label: "one uppercase letter", test: (p:string) => /[A-Z]/.test(p)},
                              {label: "one lowercase letter", test: (p:string) => /[a-z]/.test(p)},
                              {label: "one number", test: (p:string) => /[0-9]/.test(p)},
                              {label: "one special character", test: (p:string) => /\W/.test(p)},
]

export default function RegisterPage() {

  return (
    <div className="w-full min-h-screen grid grid-cols-2">
      <div className="bg-bg-primary-hover">First Col</div>
      
      <div className="flex flex-col items-center justify-center bg-bg-base">

        <div className="flex flex-col gap-y-3 w-[55%] h-[50%] rounded-md p-5">
          
          <h1 className="text-xl font-bold text-center">Create your account</h1>
          
          <div className="flex flex-col gap-y-6">
            
            <div className="relative">
              <input 
                id="name"
                inputMode="text" 
                placeholder=" "
                     type="text" 
                     required 
                     autoComplete="name" 
                     autoCapitalize="none" 
                     spellCheck="false"
                     className="peer w-full px-2 py-2 focus:border-[#6D28FF] focus:ring-1 focus:ring-call-to-action border border-black/20 rounded-md"/>
              <label htmlFor="email" className="absolute bg-white text-sm left-1/20 top-1/2 -translate-y-1/2 transition-all duration-200 
                  peer-focus:top-0 peer-focus:text-xs peer-focus:left-2 peer-[:not(:placeholder-shown)]:top-0 peer-[:not(:placeholder-shown)]:text-xs
                  peer-[:not(:placeholder-shown)]:left-2">
                Name*
              </label>
            </div>

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
                     className="peer w-full px-2 py-2 focus:border-[#6D28FF] focus:ring-1 focus:ring-call-to-action border border-black/20 rounded-md"/>
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
                     type="password" 
                     required 
                     autoComplete="current-password" 
                     autoCapitalize="none" 
                     spellCheck="false"
                     className="peer w-full px-2 py-2 focus:ring-1 focus:ring-call-to-action border border-black/20 rounded-md"/>
              <label htmlFor="password" className="absolute bg-white text-sm left-1/20 top-1/2 -translate-y-1/2 transition-all duration-200 
                  peer-focus:top-0 peer-focus:text-xs peer-focus:left-2 peer-[:not(:placeholder-shown)]:top-0 peer-[:not(:placeholder-shown)]:text-xs
                  peer-[:not(:placeholder-shown)]:left-2 focus:border-call-to-action focus:outline-none ">
                Password*
              </label>
            </div>
          </div>
          
          <button className="block bg-call-to-action p-2 rounded-md text-white text-sm font-medium hover:cursor-pointer hover:bg-call-to-action/80 w-full">
           Sign Up 
          </button>

          <button className="block p-2 flex justify-center items-center gap-x-2 
            rounded-md text-white text-sm font-medium hover:cursor-pointer w-full 
            border border-black/20 rounded-md hover:bg-black/2">
            <span>
              <Image src="/google.svg" width={20} height={20} alt="google"/>
            </span>
            <span className="text-black font-medium">Sign up with Google</span>
          </button>

        </div>

        <p className="font-medium text-sm">Already have an account?
          <Link href="/login" className="font-bold text-sm text-call-to-action pl-1 hover:underline">Sign In</Link>
        </p>
      </div>
    </div>
  )
}
