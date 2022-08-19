import { Box , Button, Flex,  Container , FormLabel, Input,Image ,  Text, Select, useDisclosure, UnorderedList, ListItem} from "@chakra-ui/react";
import Header from "../components/Headers";
import ContainerLayout from "../Layout/ContainerLayout";
import { useNavigate , useParams } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import NotAuthenticate from './NotFound/NotAuthenticated';
import { useState , useEffect } from "react";
import { fetchData } from "../Utils/Request";
import ReviewModal from "../components/Modals/ReviewModal";
import DisplayReview from "../components/DisplayReview";
import {BiCommentError} from 'react-icons/bi';
import { FaEye } from "react-icons/fa";
import {BsGlobe} from 'react-icons/bs';
import {BiCoinStack} from 'react-icons/bi';
import {FaTwitter} from 'react-icons/fa';

const ProjectView = () => {

    const { isOpen , onClose , onOpen} = useDisclosure();

    const [loading , setLoadaing ] = useState(false)
    const [ description , setDescription  ] = useState('')
    const [ title , setTitle ] = useState('')
    const [ image , setImage ] = useState('')
    const [ contract , setContract ] = useState('')
    const [loader , setLoader ] = useState(false )
    const [tags , setTags ] = useState('')
    const [socialLink , setSocialLink ] = useState('')
    const [links , setLinks ] = useState('')
    const [tokenContract , setTokenContract ] = useState('')    
    const [hide , setHide ] = useState('none')   
    


    const {isAuthenticated, user} = useAuth0();

    //function to toggle more 
    const toggle = () => {
        if(hide === 'none'){
            setHide('block')
        } else {
            setHide('none')
        }
    }

    const navigate = useNavigate();


    //get items from URl
    const { id } = useParams();

    //function to handle get 
    const getProject = async () => {
        
        const  response = await fetchData(`/post/${id}`)
        const data = response.post

        setImage(data.imageUrl);
        setDescription(data.description);
        setContract(data.tokenContract);
        setTitle(data.title);
        setTags(data.tags);
        setSocialLink(data.socialLink);
        setLinks(data.links);
        setTokenContract(data.tokenContract);


    }

    //create review 
    const createReview = async () => {
        setLoader(true)
        setTimeout(() => {
            setLoader(false )
        } , 2500 )

    }


    useEffect(()=>{
        getProject()
    }, [] )


    return (
        <>

            <Box  position={'sticky'} left={0} top={0} right={0} zIndex={999}>
                <Header />
            </Box>
            <Container maxW={['100%']}  bg={'#fdf0e0'}>
              {
                //check if user is authenticated
                
                true ? (
                    <>

            <Box display={'flex'} py={'1em'} width={['100%','75%']} mx={'auto'} flexDir={['column']} alignItems={'center'} justifyContent={'center'} >
              
                <Box py={'2em'} px={['1em', '3em']} w={['100%' , '85%']}
                bg={'#fff'} mx={'auto'} borderRadius={'1em'}>
                    

                    <Flex  gap={'1em'} my={'1em'} flexDir={['column','row']}>
                        <Box >
                            <Image boxSize={['100px','150px']} maxW={'150px'} borderRadius={'0.5em'} src={image} alt='Dan Abramov' fallbackSrc="" />
                        </Box>
                        <Box>
                            <Text fontWeight={'bold'} py={'1em'} fontSize={'1.2em'}>{title}</Text>
                            <Text fontSize={'1em'}>{description}</Text>
                            <Text my={'0.5em'} fontWeight={'bold'} >{tags}</Text>

                           <Box display={'flex'} onClick={toggle} cursor={'pointer'} alignItems={"center"} flexDir={'row'} gap={'0.5em'}> <FaEye/> <Text fontWeight={'bold'}>  View More </Text></Box>
                            
                            <Box my={'1em'} display={hide}>
                               <UnorderedList listStyleType={'none'} mx={0}>
                                    <ListItem>{socialLink}</ListItem>
                                    <ListItem display={'flex'} alignItems={'center'} gap={'0.5em'}> <BiCoinStack/> {tokenContract}</ListItem>
                                    <ListItem fontWeight={'bold'} color={'blue.600'} display={'flex'} gap={'0.2em'} alignItems={'center'}> <FaTwitter/> <a href={socialLink} fontWeight={'bold'} color={'blue.500'}>{links}</a> </ListItem>
                                    <ListItem fontWeight={'bold'} color={'blue.600'} display={'flex'} gap={'0.2em'} alignItems={'center'}> <BsGlobe/> <a href={links} fontWeight={'bold'} color={'blue.500'}>{links}</a> </ListItem>
                               </UnorderedList>
                            </Box>
                        </Box>
                    </Flex>

                    
                    
                 

                    <Button onClick={onOpen} w={['100%','30%']} bg={'#ffa00a'}
                     _hover={{bg:'yellow.500'}} color={'#fff'} py={'1.5em'} gap={'0.5em'} > <BiCommentError/> Add Review </Button>
                    <ReviewModal isOpen={isOpen} onClose={onClose} />
                </Box>

                
                <Box my={'2em'} overflow={''} bg={'#fdf0e0'} 
                w={['100%','85%']} p={'1.5em'} borderRadius={'0.5em'}>

                    <Text fontWeight={'bold'}py={'1em'} > Project Reviews </Text>
                        
                        <DisplayReview/>

                </Box>
                
              </Box>

                    
                    </> 
                ) : (
                    <>
                        <NotAuthenticate/>
                    </>
                )
              }
              
            </Container>

        </>
    )
}

export default ProjectView;