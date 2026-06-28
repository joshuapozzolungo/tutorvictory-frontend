import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/global.css";

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
