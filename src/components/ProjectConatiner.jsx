import { Box , Image , Flex, Text, Button } from "@chakra-ui/react";
import {AiFillStar} from 'react-icons/ai'

const ProjectContainer =({name , image , rating , description , onClick}) => {
    return (
        <>


            <Box bg={'#fff'}
             px={'3em'} py={'2em'} width={['100' , '30%']}
             
             >
                
                <Box mb={'1em'}>
                 <Image src={image}  h={'40vh'} width={'100%'}/>
                </Box>
                <Text fontWeight={'bold'}> {name}</Text>
                <Box display={'flex'} alignItems={'center'} gap={'1em'}> <AiFillStar fill="#fdff0c"/><Text>{rating}</Text></Box>
                
                <Box>
                    <Text>{description}</Text>
                </Box>

                <Button my={'0.5em'} w={'100%'} py={'1.7em'} onClick={onClick}>View Project</Button>
            </Box>
        
        </>
    )
}

export default ProjectContainer;