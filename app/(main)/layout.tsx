import Header from "../components/Header";
import ".././globals.css";

export default function MainLayout({ children }: { children:
React.ReactNode }) {
  return (
    <>
      <Header/>
      {children}
    </>
  )
}
