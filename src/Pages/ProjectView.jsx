import { Box , Button, Input, Text} from "@chakra-ui/react";
import Header from "../components/Headers";
import ContainerLayout from "../Layout/ContainerLayout";
import { useNavigate , useParams } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import NotAuthenticate from './NotFound/NotAuthenticated';
import { useState , useEffect } from "react";
import axios from 'axios';
import { fetchData } from "../Utils/Request";

const ProjectView = () => {

    const [loading , setLoadaing ] = useState(false)

    const {isAuthenticated, user} = useAuth0();

    const navigate = useNavigate();


    //get items from URl
    const { id } = useParams();

    //function to handle get 
    const getProject = async () => {
        
        const  response = await fetchData(`/post/all/${id}`)
    }


    useEffect(()=>{
        getProject()
    }, [] )


    return (
        <>

            <Header />
            <ContainerLayout>
              {
                //check if user is authenticated
                !isAuthenticated ? (
                    <>

            <Box display={'flex'} width={'70%'} mx={'auto'} flexDir={['column']} alignItems={'center'} justifyContent={'center'} h={'70vh'}>
              
                <Box py={'2em'} px={['', '10em']} w={['100%' , '85%']}
                bg={'#fff'} mx={'auto'}>
                    <Text fontWeight={'bold'}>Project contents and Items</Text>

                    <Box my={'2em'}>

                        <Text fontWeight={'bold'}>
                            This is the title 
                        </Text>

                        <Text>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique voluptas nulla possimus eligendi laudantium corporis error exercitationem obcaecati, cupiditate et, natus consequatur esse molestias illum fugit est suscipit perferendis quibusdam.
                        </Text>

                    </Box>

                    <Box my={'2em'}>
                        <Input type={'text'} py={'1.5em'} variant={'filled'} placeholder={'Add Comment'} />
                        <Button my={'1em'} py={'1.5em'} bg={'blue.500'} color={'#fff'}
                        isLoading={loading } loadingText={'Adding Comment...'}>Add Comment </Button>
                    </Box>
                </Box>
              </Box>
                    
                    </> 
                ) : (
                    <>
                        <NotAuthenticate/>
                    </>
                )
              }
            </ContainerLayout>

        </>
    )
}

export default ProjectView;