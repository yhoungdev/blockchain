import { useState } from 'react'
import { BrowserRouter as Router  , Route , Routes  } from 'react-router-dom'

import './App.css'
import UploadProject from './Pages/Admin/UploadProject';
import SignIn from './Pages/Auth/Signin';
import SignUp from './Pages/Auth/SignUp';
import Homepage from './Pages/Homepage';
import ProjectView from './Pages/ProjectView';
import NotFound from './Pages/NotFound/NotFound';
import { useAuth0 } from '@auth0/auth0-react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from 'react';
import AdminLogin from './Pages/Admin/Admins Auth/AdminLogin';
import CreateAdmin from './Pages/Admin/Admins Auth/AdminSignup';
import AdminHome from './Pages/Admin/AdminHome';
import Loader from './components/Loader';
import { Box } from '@chakra-ui/react';

function App() {
  
  const [loaded , setLoaded ] = useState()

  useEffect(() => {
    
    setTimeout(() => {
      setLoaded('none')
    }, 1500)

  }, [])
  return (
    <div className="App">
        <Box display={loaded}>
          <Loader/>
        </Box>
        <ToastContainer/>  

        <Router>
          <Routes>
            <Route path="/" element={<SignIn />} />
            <Route path="/signup" element={< SignUp />} />
            <Route path='/home' element={<Homepage/>} />
            <Route path='/preview/:id' element={<ProjectView/>} />
            <Route path='*' element={<NotFound/>} />

            <Route path='/user/admin/upload' element={<UploadProject />} />
            <Route path='/admin/home' element={<AdminHome />} />
            <Route path='/user/admin/login' element={<AdminLogin />} />
            <Route path='/createAdmin' element={<CreateAdmin />} />
          </Routes>
        </Router>


    </div>
  )
}

export default App
