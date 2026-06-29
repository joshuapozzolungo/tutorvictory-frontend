import Link from "next/link";
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import XIcon from '@mui/icons-material/X';

export default function Footer() {

  const footer_headings = ["Content", "Resources", "Company", "Careers", "Community"]
  
  return (
    <footer className="w-full min-h-120 bg-primary flex flex-col justify-between">

      { /* Top Half */}
      <div className="flex w-full p-15">
        <div className="flex flex-col w-[60%] gap-y-3">
          <Link href="/" className="text-2xl whitespace-nowrap font-bold text-heading">Tutor Victory</Link>
          <p className="text-paragraph text-sm max-w-[70%]">Stay informed on feature releases, product roadmap, support, and cloud offerings!</p>

          <div className="flex gap-x-5 text-paragraph">
            <LinkedInIcon/>
            <YouTubeIcon/>
            <InstagramIcon/>
            <XIcon/> 
          </div>
        </div>

        <div className="grid grid-cols-3 w-full">
          {footer_headings.map((heading) => (
            <div className="items-center justify-center text-heading font-bold text-sm">
              <div>
                {heading}
              </div>
            </div>
          ))}
        </div>


      </div>

      { /* Bottom Half */}
      <div className="w-full">
        <div className="flex justify-between w-full h-[10%] text-sm bg-gray-50 p-15">
          <div className="text-paragraph"> © 2026 Tutor Victory, All Rights Reserved. </div>
          <div className="text-paragraph flex gap-x-5">
            <Link href="/cancellation-policy" className="hover:underline hover:cursor-pointer">Cancellation Policy</Link>
            <Link href="/terms-of-service" className="hover:underline hover:cursor-pointer">Terms of Service</Link>
            <Link href="/payment-policy" className="hover:underline hover:cursor-pointer">Payment Policy</Link>
            <Link href="/privacy-policy" className="hover:underline hover:cursor-pointer">Privacy Policy</Link>
          </div>
        </div>
      </div>

    </footer>
  )
}
