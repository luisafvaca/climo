import climLogo from '@/assets/climLogo.svg'

function NavBar() {
  return (
    <>
      <nav className='h-16 m-5'>
        <img src={climLogo} className="logo" alt="Vite logo" />
      </nav>
    </>
  )
}

export default NavBar