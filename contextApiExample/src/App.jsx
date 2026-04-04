import './App.css'
import Login from './components/Login'
import Profile from './components/Profile'
import UserProvider from './context/UserProvider'


function App() {  
  

  return (
   <UserProvider>
    <div className='flex flex-col items-center justify-center mt-20'>
   <h1 className='text-3xl mb-6'>WELCOME</h1>
   <Login />
   <Profile />
   </div>
   </UserProvider>
  )
}

export default App
