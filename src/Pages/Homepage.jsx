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

    const dapps = [
        {
            name: 'GalacticOps',
            description: 'An Network for NFT collections and findings ',
            rating: 4.5,
            image: 'https://ik.imagekit.io/bayc/assets/ape1.png',
            route: '/home/galacticops'
        } ,

        {
            name: 'GalacticOps',
            description: 'An Network for NFT collections and findings ',
            rating: 4.5,
            image: 'https://ik.imagekit.io/bayc/assets/ape1.png',
            route: '/home/galacticops'
        } ,
        

        {
            name: 'GalacticOps',
            description: 'An Network for NFT collections and findings ',
            rating: 4.5,
            image: 'https://ik.imagekit.io/bayc/assets/ape1.png',
            route: '/home/galacticops'
        } ,
        
        {
            name: 'GalacticOps',
            description: 'An Network for NFT collections and findings ',
            rating: 4.5,
            image: 'https://ik.imagekit.io/bayc/assets/ape1.png',
            route: '/home/galacticops'
        } ,
        

        {
            name: 'GalacticOps',
            description: 'An Network for NFT collections and findings ',
            rating: 4.5,
            image: 'https://ik.imagekit.io/bayc/assets/ape1.png',
            route: '/home/galacticops'
        } ,
        

        {
            name: 'GalacticOps',
            description: 'An Network for NFT collections and findings ',
            rating: 4.5,
            image: 'https://ik.imagekit.io/bayc/assets/ape1.png',
            route: '/home/galacticops'
        } ,
        

        {
            name: 'GalacticOps',
            description: 'An Network for NFT collections and findings ',
            rating: 4.5,
            image: 'https://ik.imagekit.io/bayc/assets/ape1.png',
            route: '/home/galacticops'
        } ,
        
        
        
    ]

    //initilize the useAuth0 hook
    const navigate = useNavigate();
    const { user, isAuthenticated } = useAuth0();

    useEffect(()=> {
        //check if use is Authenticate 
        // if(!isAuthenticated){

        //     //redirect to login page
        //     navigate('/');

        // } else {
        //     //if user is Authenticated
        // }
    },[])


    //make request to Api to get list of items 
    const getDatas = async  () => {

        const  response = await fetchData('/post/all' , {
            headers : {
                'Authorization' : `Bearer ${localStorage.getItem('auth-token')}`
            }
        })
        
       

    }

    useEffect(()=>{
        getDatas() 
      
    }, [])

    return (
        <>

             <Header />

            <ContainerLayout>
               
                <Box my={'2em'}>

                    <Text fontWeight={'bold'} fontSize={'1.5em'}>List of Dapps</Text>
                    <Text my={'0.5em'}> Project contents and Items  </Text>
                </Box>
 
                <Box display={'flex'} 
                    gap={'1em'}
                    flexDir= {['column' , 'row']}
                    flexWrap = {'wrap'}
                >
                    
                    <NoItem/>
                </Box>

            </ContainerLayout>
        
        </>
    )
}

export default Homepage ;