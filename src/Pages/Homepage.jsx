import { Box , Text } from "@chakra-ui/react";
import Header from "../components/Headers";
import ProjectContainer from "../components/ProjectConatiner";
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

                <Box display={'flex'} 
                    gap={'1em'}
                    flexDir= {['column' , 'row']}
                    flexWrap = {'wrap'}
                >
                    {
                        [1,2,3,4,6,7,8].map(items => {
                            return (
                                <>

                                     <ProjectContainer/>
                                
                                </>
                            )
                        })
                    }
                </Box>

            </ContainerLayout>
        
        </>
    )
}

export default Homepage ;