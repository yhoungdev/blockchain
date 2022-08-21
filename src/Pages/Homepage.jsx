import { Box , Text } from "@chakra-ui/react";
import Header from "../components/Headers";
import ProjectContainer from "../components/ProjectConatiner";
import ContainerLayout from "../Layout/ContainerLayout"
import { useEffect , useState} from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";
import NoItem from "./NotItem";
import axios from 'axios';
import { fetchData } from '../Utils/Request';


const Homepage = () => {

    const [data , setData ] = useState([]);

    //initilize the useAuth0 hook
    const navigate = useNavigate();
    const { user, isAuthenticated } = useAuth0();

    useEffect(()=> {
        // check if use is Authenticate 
        if(!isAuthenticated){

            //redirect to login page
            navigate('/');

        } else {
            //if user is Authenticated
        }
    },[])


    //make request to Api to get list of items 
    const getDatas = async  () => {

        const  response = await fetchData('/post/all')
        setData(response.posts)
        
        
        
       

    }

    useEffect(()=>{
        getDatas() 
      
    }, [])

    return (
        <>

             <Header />

            <ContainerLayout>
               
                <Box>

                    <Text fontWeight={'bold'} py={'1em'} fontSize={'1.5em'}>List of Dapps</Text>
                   
                </Box>
 
                <Box display={'flex'} 
                    gap={'1em'}
                    flexDir= {['column' , 'row']}
                    flexWrap = {'wrap'}
                    >
                    
                   

                     {
                        //check if item is empthy 
                        data.length > 0 ? (
                            <>
                                {data.map((item , index)=>{


                        return (
                                    <ProjectContainer key={index} item={item}
                                    image={item.imageUrl}
                                    description={item.description}
                                    tags={item.tags == 'undefined' ? '' : item.tags}
                                    onClick={ e => navigate (`/preview/${item._id}`)}
                                    />
                                    )
                                })
                            }   
                            </>
                            ) : (
                                <>
                                   <Box  w={['100%','100vw']}>
                                        
                                        <NoItem/>
                                   </Box>
                                </>
                            )
                     }
                </Box>

            </ContainerLayout>
        
        </>
    )
}

export default Homepage ;