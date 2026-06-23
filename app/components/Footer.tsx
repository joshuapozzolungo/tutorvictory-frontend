import Link from "next/link";

export default function Footer() {

  const footer_headings = ["Product", "Resources", "Company", "Join our Community"]
  
  return (
    <div className="w-full min-h-120 bg-[#151515] flex flex-col justify-between px-30 pt-20">
     
      <div className="flex h-[90%]">
        <div className="w-full flex gap-x-30">
          {footer_headings.map((heading) => (
            <div className="text-white font-bold">
              {heading}
            </div>
          ))}

          <div className="flex flex-col gap-y-5">
            <Link href="/" className="text-2xl whitespace-nowrap font-bold text-white">Tutor Victory</Link>
            <p className="text-paragraph text-sm">Stay informed on feature releases, product roadmap, support, and cloud offerings!</p>
            <form className="relative bg-[#1C1C1A] rounded-md text-sm">
              <input type="email" placeholder="Enter your email" className="p-3 w-full pr-10 text-paragraph outline-none"/>
              <button className="px-4 py-2 rounded-md bg-call-to-action hover:cursor-pointer hover:bg-bg-primary/80 absolute right-2 top-1/2 -translate-y-1/2">Sign Up</button>
            </form>
          </div>
        </div>
      </div>

      <div className="border-paragraph/20 border-t-1 flex justify-between w-full h-[10%] p-10 text-sm">
        <div className="text-paragraph"> © 2026 Tutor Victory, All Rights Reserved. </div>
        <div className="text-paragraph flex gap-x-5">
          <Link href="/cancellation-policy" className="hover:underline hover:cursor-pointer">Cancellation Policy</Link>
          <Link href="/terms-of-service" className="hover:underline hover:cursor-pointer">Terms of Service</Link>
          <Link href="/payment-policy" className="hover:underline hover:cursor-pointer">Payment Policy</Link>
          <Link href="/privacy-policy" className="hover:underline hover:cursor-pointer">Privacy Policy</Link>
        </div>
      </div>
    </div>
  )
}
