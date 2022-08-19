import { Box, Container } from "@chakra-ui/react";

const ContainerLayout = ( { children } ) => {
    return (
        <>
        
            <Box width={['100%']}  bg={'#fefaf4'}>
             
             
                <Container maxW={['100%' , '80%']}>
                    {children}
                </Container>
            
            
            </Box>

        </>
    )
}


export default ContainerLayout ;