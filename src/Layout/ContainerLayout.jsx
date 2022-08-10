import { Box, Container } from "@chakra-ui/react";

const ContainerLayout = ( { children } ) => {
    return (
        <>
        
            <Box width={['100%']} h={'120vh'} bg={'var(--primary)'}>
             
             
                <Container maxW={['100%' , '80%']}>
                    {children}
                </Container>
            
            
            </Box>

        </>
    )
}


export default ContainerLayout ;