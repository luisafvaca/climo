import './App.css'
// import SingIn from './pages/signIn';
import NavBar from './components/navBar';
import Dashboard from './pages/dashboard';

function App() {
  return (
    <>
      <NavBar />
      {/* <h1 className='font-openSans font-semibold text-center text-24 md:text-36 mt-xl'>{t('welcomeMessage')}</h1>
      <p className='font-lato text-center text-16 md:text-16 text-scarpa mb-lg'>{t('welcomeGoal')}</p> */}
      {/* <SingIn /> */}
      <Dashboard />
    </>
  )
}

export default App
