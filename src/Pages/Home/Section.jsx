import ContainerLayout from '../../Layouts/ContainerLayout.jsx/ContainerLayout';
import { Box  , Text , Flex , Image  } from '@chakra-ui/react';

const Section = () => {

    return (
        <>

           <Box h={'100vh'} bg={"#fcf3e0"} py={'5em'} >
           <ContainerLayout>
                <Box my={'2em'}>

                    <Text textAlign={'center'} 
                        fontWeight={'black'}
                        fontSize={['xl','3xl']}
                        fontFamily={'var(--primary-font)'}
                    > Parrot SmartBCH</Text>

                </Box>


                <Box>
                
                    <Flex flexDir={['column' , 'row']} gap={['2em' , '2em']}>

                        <Box>
                            <Text textAlign={['center' , 'left']}
                                my={'1em'}
                                fontWeight={'bold'}
                                fontSize={['xl' , '2xl']}
                            >Decentralization</Text>
                            <Text width={['100%' , '70%']}
                                fontSize={['md','xl']}
                                textAlign = {['center' , 'left']}
                            >
                               We are the first decentralized exchange (DEX) on the SmartBCH chaon. Our goal is to become one of the 
                                the leading DEXs on SmartBCH, as well as a one-stop service provider for all projects 
                            </Text>

                            <Text fontWeight={'bold'} my={'1em'}
                                color={'blue.500'}
                                textAlign={['center' , 'left']}
                            >
                                View Feeds 
                            </Text>
                        </Box>

                        <Box className='dangle'>

                            <Image src={'https://res.cloudinary.com/dhkccnvyn/image/upload/v1659285481/quick/Group_51_m2yiqe.svg'}

                            />
                        </Box>

                    </Flex>

                </Box>
            </ContainerLayout>
           </Box>
        
        </>
    )
}


export default Section; // export default Home;