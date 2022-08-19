import { Box , Spinner, Text } from "@chakra-ui/react";

const NoItem = () => {
    return (
        <>

            <Box display={'flex'} mx={'auto'} flexDir={'column'} gap={'0.5em'} justifyContent={'center'} textAlign={'center'}>
               
                <Box justifyContent={'center'} my={'1em'} display={'flex'} fontWeight={'medium'} color={'gray'} gap={'1em'}>
                    <Text>Loading Projects</Text>
                    <Spinner color='red.500' />
                </Box>

            </Box>
        
        </>
    )
}

export default NoItem;