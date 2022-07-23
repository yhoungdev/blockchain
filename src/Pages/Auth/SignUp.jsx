import AuthLayout from "../../Layout/AuthLayout";
import ContainerLayout from "../../Layout/ContainerLayout";
import Inputs from "../../components/Inputs";
import Buttons from "../../components/Buttons";
import { Box , Text } from "@chakra-ui/react";

const SignUp =() => {
    return (
        <>
        
            <ContainerLayout>
                <AuthLayout>
                <Box>
                         <Text fontWeight={'bold'}> Create An Account  </Text>
                         <Text> Enter your credentials </Text>


                        
                            <Box>

                                <Inputs type={'text'} placeholder={' Name '}/>
                                <Inputs type={'email'} placeholder={' Email  '}/>
                                <Inputs type={'password'} placeholder={' Password  '} type={'password'}/>

                                <center>
                                    <Buttons value={'Sign Up'}/>    
                                </center>

                                
                            </Box>
                         
                    </Box>
                </AuthLayout>
            </ContainerLayout>

        </>
    )
}

export default SignUp;