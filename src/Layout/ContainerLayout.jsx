import { Box } from "@chakra-ui/react";

const ContainerLayout = ( { children } ) => {
    return (
        <>
        
            <Box width={['100%' , '80%']}>
                {children}
            </Box>

        </>
    )
}


export default ContainerLayout ;