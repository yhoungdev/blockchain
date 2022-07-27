import  { Button } from '@chakra-ui/react';


const Buttons =(  { value , isLoading , loadingText , onClick  } ) => {

    return (
        <>
        
            <Button 
            variant={'blue.300'}
            bg={'blue.500'} 
            color={'#fff'}
             py={'1.5em'} 
             px={"3em"}
             isLoading={isLoading}
             loadingText={loadingText}
             colorScheme={'blue'}
             onClick={onClick}
             
                _hover = {{
                        background:'blue.600',
                }}
             >
                {value}
            </Button>
        
        </>
    )

}


export default Buttons