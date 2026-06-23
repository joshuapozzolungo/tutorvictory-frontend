import Header from "../components/Header";
import Footer from "../components/Footer";
import ".././globals.css";

export default function MainLayout({ children }: { children:
React.ReactNode }) {
  return (
    <>
      <Header/>
      {children}
      <Footer/>
    </>
  )
}
