import AuthLayout from "../../../Layout/AuthLayout";
import Inputs from '../../../components/Inputs';
import { Avatar, Box,Flex, Button, Text } from "@chakra-ui/react";
import { useState } from "react";
import { postData } from '../../../Utils/Request';
import { Link, useNavigate } from "react-router-dom";
import MainLogo from "../../../components/MainLogo";

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
                    navigate('/admin/home')
                  }, 1500)
               } 
        } catch ( error ) {
            
            setLoader(false)
        }

        
    }

    return (
        <>

            <AuthLayout>
                <Box w={['' , '80%']} mx={'auto'}>
                <Box>
                    <center>
                      <MainLogo/>
                    </center>

                    <Flex justifyContent={'center'} my={'2em'}>
                        <Avatar size={['lg','lg']}/>
                    </Flex>

                    <Text fontWeight={'bold'}>Hey, Yo, Welcome Back 👋</Text>
                   
                </Box>
                <form>
                    <Inputs type={'email'} placeholder={'Email'} onChange = { e => setEmail(e.target.value)}/>
                    <Inputs type={'password'} placeholder={'Password'} onChange = { e => setPassword(e.target.value)}/>

                    <center>
                    <Button isLoading={loader }
                    _hover={{}}
                    bg={'blue.500'} color={'white'}
                    px={'4em'} my={'1em'} py={'1.6em'} loadingText={'Loggin In...'} onClick={login}>
                        Login
                    </Button>
                    </center>
                   {/* <Link to={"/createAdmin"}>
                    <Text my={'1em'} textAlign={'center'} fontWeight={'bold'} color={'blue.500'} >Create An Admin</Text>
                   </Link> */}
                </form>
                </Box>
            </AuthLayout>
        
        </>
    )
}

export default AdminLogin;