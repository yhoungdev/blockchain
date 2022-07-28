import { Box  , Text, Flex } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import Buttons from '../../components/Buttons';
import { useState } from 'react';
import Header from '../../components/Headers';

const NotAuthenticate = () => {

    const navigate = useNavigate();

    const [loading , setLoading ] = useState(false);





    const goBack = () => {

        setLoading(true);
        setTimeout (() => {
            navigate('/')
        }, 2000)
    }

    return (
        <>
        
          <Header />
          <Flex justifyContent={'center'} textAlign={'center'} h={'80vh'} alignItems={'center'}>
              <Box>




                <h2  > Sorry Something Went Wrong </h2>

                <Box my={'2em'}>
                    <Buttons value={'Reload'}
                    loadingText={'Reloading...'}
                    isLoading={loading} onClick={goBack}/>
                </Box>
            </Box>
          </Flex>

        </>
    )
}


export default NotAuthenticate;