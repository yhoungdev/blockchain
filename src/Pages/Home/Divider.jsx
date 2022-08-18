import { Box , Image , Text , Button,  Flex } from "@chakra-ui/react";
import ContainerLayout from "../../Layouts/ContainerLayout.jsx/ContainerLayout";
import { Link } from 'react-router-dom';

const Divider = () => {
    return (
        <>
        

            <ContainerLayout>
            <Box my={'2em'} className={'dangle'}>
                <Image 
                width={['40%','20%']}
                mx={'auto'}
                boxShadow={''}
                borderRadius={'2em'}
                src={'https://res.cloudinary.com/dhkccnvyn/image/upload/v1657319726/secuWallet/Group_28_zlvsir.svg'} />
            </Box>


            <Box my={['1em' , '5em']}>


                <Text fontWeight={'bold'} 
                    fontSize={['1.2em', '2em']}
                    width={['60%' , '40%']}
                    mx={'auto'}
                    textAlign={'center'}
                    fontFamily={'var(--primary-font)'}
                >
                       Leading Dexs on Smart BCH
                    
                </Text>

               <center>
               <Box my={'3em'} >

                    <Link to='/login'>
                    <Button bg={'black'} color={"#fff"} py={'1.5em'}
                        _hover = {{
                            backdround: ' black'
                        }}
                     >
                        Get Started
                    </Button>
                    </Link>

               </Box>
               </center>

               

            </Box>
            </ContainerLayout>


        </>
    )
}

export default Divider ;