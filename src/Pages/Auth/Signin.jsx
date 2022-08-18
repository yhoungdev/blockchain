import AuthLayout from "../../Layout/AuthLayout";
import ContainerLayout from "../../Layout/ContainerLayout";
import {Box , Text , Button, Input} from "@chakra-ui/react";
import Inputs from "../../components/Inputs";
import Buttons from "../../components/Buttons";
import LoginButton from "./AuthLogin";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";

const SignIn =() => {

    const navigate = useNavigate();

    const { user, isAuthenticated } = useAuth0();
    
    if(isAuthenticated){
        navigate('/home');
    }

    

    return (
        <>
        
            <ContainerLayout>
                <AuthLayout>
                    <Box>
                         <Text fontWeight={'bold'}> Welcome Back </Text>
                         <Text> Enter your credentials </Text>


                        
                            <Box>

                                
                               

                                <center>
                                    {/* <Buttons value={'Sign In'}
                                        isLoading={false}
                                        loadingText={'Logging In...'}
                                    
                                    />     */}

                                
                                    <LoginButton />
                                </center>


                            </Box>
                         
                    </Box>
                </AuthLayout>
            </ContainerLayout>

        </>
    )
}

export default SignIn;