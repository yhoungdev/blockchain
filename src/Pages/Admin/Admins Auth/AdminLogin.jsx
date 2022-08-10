import AuthLayout from "../../../Layout/AuthLayout";
import Inputs from '../../../components/Inputs';
import { Box, Button, Text } from "@chakra-ui/react";
import { useState } from "react";
import { postData } from '../../../Utils/Request';
import { Link, useNavigate } from "react-router-dom";

const AdminLogin = () => {
    const navigate = useNavigate()

    const [loader , setLoader ] = useState(false);
    const [email , setEmail ] = useState('');
    const [password , setPassword ] = useState('');

    const payload = {
        email : email,
        password : password 
    }

    const login = async () => {
        setLoader(true);

        try {
           
            const response =  await postData('/admin/login', payload );
            setLoader(false);
               //check if status is sucess 
               if(response.response.token) {
                  //set item to localStorage 
                  localStorage.setItem('auth-token',response.response.token)
                  //set Time out
                  setTimeout(()=>{
                    navigate('/home')
                  }, 1500)
               } 
        } catch ( error ) {
            
            setLoader(false)
        }

        
    }

    return (
        <>

            <AuthLayout>
                <Box w={['' , '90%']} mx={'auto'}>
                <Box>
                    <Text fontWeight={'bold'}>Hey, Welcome Back</Text>
                    <Text fontWeight={'bold'}>Log in your details</Text>
                </Box>
                <form>
                    <Inputs type={'email'} placeholder={'Email'} onChange = { e => setEmail(e.target.value)}/>
                    <Inputs type={'password'} placeholder={'Password'} onChange = { e => setPassword(e.target.value)}/>

                    <center>
                    <Button isLoading={loader }
                    _hover={{}}
                    bg={'blue.500'} color={'white'}
                    px={'4em'} py={'1.6em'} loadingText={'Loggin In...'} onClick={login}>
                        Login
                    </Button>
                    </center>
                   <Link to={"/createAdmin"}>
                    <Text my={'1em'} textAlign={'center'} >Create An Admin</Text>
                   </Link>
                </form>
                </Box>
            </AuthLayout>
        
        </>
    )
}

export default AdminLogin;