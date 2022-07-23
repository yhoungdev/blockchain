import { Box , Text } from "@chakra-ui/react";
import Header from "../components/Headers";
import ContainerLayout from "../Layout/ContainerLayout"

const Homepage = () => {
    return (
        <>


            <ContainerLayout>
                <Header />

                <Box my={'2em'}>

                    <Text fontWeight={'bold'} fontSize={'1.5em'}>List of Dapps</Text>
                    <Text my={'0.5em'}> Project contents and Items  </Text>
                </Box>

            </ContainerLayout>
        
        </>
    )
}

export default Homepage ;