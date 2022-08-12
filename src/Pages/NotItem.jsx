import { Box , Text} from "@chakra-ui/react";

const NoItem = () => {
    return (
        <>

            <Box display={'flex'} justifyContent={'center'} textAlign={'center'}>
                <Text>No Items Available Yet </Text>
            </Box>
        
        </>
    )
}

export default NoItem;