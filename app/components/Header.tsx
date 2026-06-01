export default function Header() {
  return (
    <header className="w-full h-30 border-b-2 border-b-black/10">
      <div className="flex w-full h-30 px-20 justify-between items-center">
        
        <div className="flex">
          Logo
        </div>

        <div className="flex">
          Menu Items
        </div>
        <div className="flex gap-x-5">
          <button className="px-4 py-2 rounded-md hover:cursor-pointer hover:bg-bg-primary-hover">Log In</button>
          <button className="px-4 py-2 rounded-md bg-bg-primary text-white hover:cursor-pointer hover:bg-bg-primary/80">Sign Up</button>
        </div>

      </div>
    </header>
  )
}
