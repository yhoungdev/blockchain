import  { Button } from '@chakra-ui/react';


const Buttons =(  { value  } ) => {

    return (
        <>
        
            <Button 
            variant={'blue.300'}
            bg={'blue.500'} 
            color={'#fff'}
             py={'1.5em'} 
             px={"3em"}
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