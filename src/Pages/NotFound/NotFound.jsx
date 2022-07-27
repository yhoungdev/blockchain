import { Box, Flex , Text} from '@chakra-ui/react';
import { Navigate } from 'react-router-dom';
import Buttons from '../../components/Buttons';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {

    const navigate = useNavigate();
    const goBack = () => {

        navigate('/')

    }

    return (
        <>

            <Flex justifyContent={'center'} h={'80%'} alignItems={'center'}
                alignContent={'center'}
                my={'10em'}
            >
                <Box>
                    <iframe src="https://embed.lottiefiles.com/animation/84918"></iframe>
                    
                    <Text my={'2em'}>
                      The site you are looking for is not found
                    </Text>

                    <center>
                      <Buttons value={'Go back '}
                        onClick={goBack}
                      />
                    </center>



                </Box>
            </Flex>
        
        </>
    )

}

export default NotFound;