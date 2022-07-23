import { Box, Flex } from "@chakra-ui/react";
import Buttons from "./Buttons";

const Header = () => {
    return (
        <>

            <Flex justifyContent={'space-between'} py={'1em'}>
                
                
                <Box>
                    Logo
                </Box>


                <Box>
                    <Buttons value={'Log out '} /> 
                </Box>

            </Flex>

        </>
    )
}


export default Header;