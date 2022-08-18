import AuthLayout from "../../../Layout/AuthLayout";
import Inputs from '../../../components/Inputs';
import { Box, Button, Text } from "@chakra-ui/react";
import { useState } from "react";
import { postData } from '../../../Utils/Request';
import { MdLocalGasStation } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import MainLogo from '../../../components/MainLogo';


const CreateAdmin = () => {

    const navigate = useNavigate()

    const [loader , setLoader ] = useState(false);
    const [email , setEmail ] = useState('');
    const [password , setPassword ] = useState('');
    const [name , setName ] = useState()
    const [confirmPassword , setConfirmPassword ] = useState()

    const payload = {
        name:name,
        email : email,
        password : password ,
        confirmPassword: confirmPassword
    }

    const login = async () => {
        setLoader(true);

        try {
           
            const response =  await postData('/admin/signup', payload );
            setLoader(false);
               //check if status is sucess 
               if(response.response._id) {
                  //set item to localStorage 
                  navigate('/user/admin/login')
               } 
        } catch ( error ) {
            
            setLoader(false)
        }

        
    }

    return (
        <>

            <AuthLayout>
               
                <Box w={['' , '90%']} mx={'auto'}>
                <center><MainLogo/></center>
                <Box>
                    <Text fontWeight={'bold'}>Create Admin 👋</Text>
                </Box>
                <form>
                    <Inputs type={'text'} placeholder={'Name'} onChange = { e => setName(e.target.value)}/>
                    <Inputs type={'email'} placeholder={'Email'} onChange = { e => setEmail(e.target.value)}/>
                    <Inputs type={'password'} placeholder={'Password'} onChange = { e => setPassword(e.target.value)}/>
                    <Inputs type={'password'} placeholder={'Confirm Password'} onChange = { e => setConfirmPassword(e.target.value)}/>

                    <center>
                    <Button isLoading={loader }
                    _hover={{}}
                    bg={'blue.500'} color={'white'}
                    px={'4em'} py={'1.6em'} loadingText={'Loggin In...'} onClick={login}>
                        Create Admin
                    </Button>
                    </center>
                    <Text my={'1em'} textAlign={'center'} onClick={()=> navigate('/user/admin/login')}>Login Admin</Text>
                </form>
                </Box>
            </AuthLayout>
        
        </>
    )
}

export default CreateAdmin;