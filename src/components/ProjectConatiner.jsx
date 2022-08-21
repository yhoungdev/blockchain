import { Box , Image , Flex, Text, Button } from "@chakra-ui/react";
import {AiFillStar} from 'react-icons/ai'
import {FiExternalLink} from 'react-icons/fi'

const ProjectContainer =({name , image , rating , description ,tags, link, onClick}) => {
    return (
        <>


            <Box bg={'#fff'}
             px={'3em'} py={'2em'} width={['100' , '30%']}
             maxW={['100%','30%']}
             
             >
                
                <Box mb={'1em'} display={'flex'} justifyContent
                ={'center'}>
                 
                 <Image boxSize={['100px','200px']} maxW={'100%'} borderRadius={'0.5em'} src={image} alt='Dan Abramov' fallbackSrc="" />
                </Box>
                <Text fontWeight={'semi-bold'} my={'0.8em'}> {name}</Text>
                {/* <Box display={'flex'} alignItems={'center'} gap={'1em'}> <AiFillStar fill="#fdff0c"/><Text>{rating}</Text></Box> */}
                
                <Box>
                   
                    <Text>{description}</Text>

                    <Text fontWeight={'bold'} my={'0.5em'}>{tags}</Text>
                </Box>

                <Button my={'0.5em'} w={'100%'} py={'1.7em'}
                 onClick={onClick} bg={'#3db777'}
                  color={'#fff'} gap={'0.5em'} _hover={{bg:'green.600'}}> <FiExternalLink/>  <Text>View Project</Text></Button>
            </Box>
        
        </>
    )
}

export default ProjectContainer;