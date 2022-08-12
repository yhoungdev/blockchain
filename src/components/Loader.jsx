import { Box } from "@chakra-ui/react";
const Loader = () => {
    return (
        <>
        
        <Box bg={'#000000de'} display={'flex'} justifyContent={'center'} h={'100vh'} alignItems={'center'} position={'fixed'} right={0} left={0} top={0} bottom={0} zIndex={'100'}>
        
            <span className="loader"></span>

        </Box>
        
        </>
    )
}

export default Loader;