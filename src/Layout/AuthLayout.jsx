import { Box } from "@chakra-ui/react";
import ContainerLayout from "./ContainerLayout";

const AuthLayout = ({children}) => {
    return (
        <>
        
            <ContainerLayout>
                <Box padding={'2em'} bg={'#fff'}>
                    {children}
                </Box>
            </ContainerLayout>
        
        </>
    )
}

export default AuthLayout ;