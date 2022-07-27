import AuthLayout from "../../Layout/AuthLayout";
import ContainerLayout from "../../Layout/ContainerLayout";
import {Box , Text , Button, Input} from "@chakra-ui/react";
import Inputs from "../../components/Inputs";
import Buttons from "../../components/Buttons";
import LoginButton from "./AuthLogin";

const SignIn =() => {
    return (
        <>
        
            <ContainerLayout>
                <AuthLayout>
                    <Box>
                         <Text fontWeight={'bold'}> Welcome Back </Text>
                         <Text> Enter your credentials </Text>


                        
                            <Box>

                                
                                <Inputs type={'email'} placeholder={' Email  '}/>
                                <Inputs placeholder={' Password  '} type={'password'}/>

                                <center>
                                    <Buttons value={'Sign In'}
                                        isLoading={false}
                                        loadingText={'Logging In...'}
                                    
                                    />    

                                    <Text my={'1em'}>Or </Text>
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