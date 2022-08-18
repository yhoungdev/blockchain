import { Box , Button,  Container , FormLabel, Input,Image ,  Text, Select, useDisclosure} from "@chakra-ui/react";
import Header from "../components/Headers";
import ContainerLayout from "../Layout/ContainerLayout";
import { useNavigate , useParams } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import NotAuthenticate from './NotFound/NotAuthenticated';
import { useState , useEffect } from "react";
import { fetchData } from "../Utils/Request";
import ReviewModal from "../components/Modals/ReviewModal";
import DisplayReview from "../components/DisplayReview";

const ProjectView = () => {

    const { isOpen , onClose , onOpen} = useDisclosure();

    const [loading , setLoadaing ] = useState(false)
    const [ description , setDescription  ] = useState('')
    const [ title , setTitle ] = useState('')
    const [ image , setImage ] = useState('')
    const [ contract , setContract ] = useState('')
    const [ link , setLink ] = useState('')
    const [loader , setLoader ] = useState(false )
    


    const {isAuthenticated, user} = useAuth0();

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

            <Header />
            <Container maxW={'100%'}>
              {
                //check if user is authenticated
                
                true ? (
                    <>

            <Box display={'flex'} width={['100%','60%']} mx={'auto'} flexDir={['column']} alignItems={'center'} justifyContent={'center'} h={'70vh'}>
              
                <Box py={'2em'} px={['', '10em']} w={['100%' , '85%']}
                bg={'#fff'} mx={'auto'}>
                    <Text fontWeight={'bold'}>Project contents and Items</Text>

                    <Box my={'2em'}>

                        <Box>
                            <Image src={image} />
                        </Box>

                       <Box my={'1em'}>
                           <Text fontWeight={'bold'}>
                                {title}
                            </Text>

                            <Text>
                                <b>Token Contract:</b> {contract}
                            </Text>
                            <Text>
                            {description}
                            </Text>
                       </Box>

                    </Box>

                    <Box my={'2em'}>
                        <DisplayReview/>
                    </Box>

                    <Button onClick={onOpen}> Add Review </Button>
                    <ReviewModal isOpen={isOpen} onClose={onClose} />
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