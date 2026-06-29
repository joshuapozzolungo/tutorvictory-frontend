import Link from "next/link";
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import XIcon from '@mui/icons-material/X';

export default function Footer() {

  const footer_headings = [
      {main: "Content", submenus: [{heading: "Questions", url: "questions"}, {heading: "Courses", url: "courses"}, {heading: "Playlists", url: "playlists"}, {heading: "Learning", url: "learning"}]},
      {main: "Resources", submenus: [{heading: "Blog", url: "blog"}, {heading: "Frequently Asked Questions", url: "faqs"}, {heading: "Changelog", url: "changelog"}, {heading: "Book a Consultation", url: "book-a-consultation"}]},
      {main: "Company", submenus: [{heading: "About", url: "about"}, {heading: "Jobs", url: "jobs"}, {heading: "Contact", url: "contact"}, {heading: "Contribute", url: "contribute"}]},
      {main: "Careers", submenus: [{heading: "Book a Mentor", url: "book-a-mentor"}, {heading: "Become a Mentor", url: "become-a-mentor"}, {heading: "Recruitment", url: "recruitment"}, {heading: "Guides", url: "guides"}]},
      {main: "Community", submenus: [{heading: "Submit Questions", url: "submit-questions"}, {heading: "Affiliate Program", url: "affiliate-program"}, {heading: "Forums", url: "forums"}, {heading: "Feedback", url: "feedback"}]}
  ]

  return (
    <footer className="w-full min-h-120 flex flex-col justify-between border-t border-t-paragraph/20 bg-primary">

      { /* Top Half */}
      <div className="flex w-full px-15 pt-15">
        <div className="flex flex-col w-[80%] gap-y-5">
          <Link href="/" className="text-2xl whitespace-nowrap font-bold text-heading">Tutor Victory</Link>
          <p className="text-paragraph text-sm max-w-[60%]">Stay informed on feature releases, product roadmap, support, and cloud offerings!</p>

          <div className="flex gap-x-5 text-paragraph">
            <LinkedInIcon className="hover:text-heading hover:cursor-pointer"/>
            <YouTubeIcon className="hover:text-heading hover:cursor-pointer"/>
            <InstagramIcon className="hover:text-heading hover:cursor-pointer"/>
            <XIcon className="hover:text-heading hover:cursor-pointer"/> 
          </div>
        </div>

        <div className="grid grid-cols-3 w-full">
          {footer_headings.map((heading) => (
            <div key={heading} className="items-center justify-center text-heading font-bold text-sm">
              <h4 className="pb-3">{heading.main}</h4>
              <div className="flex flex-col gap-y-3 pb-10">
                {heading.submenus.map(submenu => (
                  <Link href={`/${submenu.url}`} className="footer-submenu-headings">{submenu.heading}</Link>
                ))}
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
