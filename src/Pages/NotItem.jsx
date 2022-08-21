import { Box , Spinner, Button, Text } from "@chakra-ui/react";
import NoData from "../components/NoData";
import { useEffect, useState } from "react";

const NoItem = () => {

    const [loaded , setLoaded ] = useState('none')
    const [notLoading , setNotLoading ] = useState('block')

    //now check for the loading time 
    useEffect(() => {

        setTimeout(() => {
            setLoaded('block')
            setNotLoading('none')
        } , 3500)


    } , [])

    return (
        <>

            <Box display={'flex'} mx={'auto'} flexDir={'column'} gap={'0.5em'} justifyContent={'center'} textAlign={'center'}>
               
                <Box justifyContent={'center'} my={'1em'} display={'flex'} fontWeight={'medium'} color={'gray'} gap={'1em'}>
                    <Box display={notLoading}>
                        <Text>Loading Projects</Text>
                        <Spinner color='red.500' />
                    </Box>

                </Box>

                <center>
                    <Box display={loaded}>
                      <NoData/>
                      <Text my={'2em'} fontWeight={'medium'}>No Application Found  </Text>
                      <Button onClick={e => window.location.reload()}>Reload</Button>
                    </Box>
                </center>

            </Box>
        
        </>
    )
}

export default NoItem;