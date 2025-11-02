function Header() {
  {/* const [isOpen, setIsOpen] = React.useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  } */}

  return (
    <>
      <div className="navbar flex flex-start h-24 mx-auto px-4 w-full justify-between items-center">
        <div className="webtitle">
          <h1 className="w-full text-3xl font-bold text-">.Cozy</h1> 
        </div>
        <div className="navigation">
          <ul className="flex p-4 space-x-4 ">
            <li className="p-4">Home</li>
            <li className="p-4">About</li>
            <li className="p-4">Contact</li>
          </ul>
         
        </div>
      </div>
    </>
  )
}

export default Header
