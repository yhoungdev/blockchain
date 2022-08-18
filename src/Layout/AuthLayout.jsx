import { Box } from "@chakra-ui/react";
import ContainerLayout from "./ContainerLayout";

const AuthLayout = ({children}) => {
    return (
        <>
        
            <ContainerLayout>
               <Box display={'flex'} alignItems={'center'} h={'100vh'}>
                <Box padding={'2em'} bg={'#fff'} 
                    width={['100%' , '60%']}
                    mx={'auto'}
                    
                    >
                        {children}
                        
                    </Box>
               </Box>

            </ContainerLayout>
        
        </>
    )
}

export default AuthLayout ;