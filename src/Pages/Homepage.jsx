import { Box , Text } from "@chakra-ui/react";
import Header from "../components/Headers";
import ProjectContainer from "../components/ProjectConatiner";
import ContainerLayout from "../Layout/ContainerLayout"
import { useEffect , useState} from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";

const Homepage = () => {

    const dapps = [
        {
            name: 'GalacticOps',
            description: 'An Network for NFT collections and findings ',
            rating: 4.5,
            image: 'https://nft-page-nine.vercel.app/assets/nft.e11acf46.gif',
            route: '/home/galacticops'
        } ,

        {
            name: 'GalacticOps',
            description: 'An Network for NFT collections and findings ',
            rating: 4.5,
            image: 'https://nft-page-nine.vercel.app/assets/nft.e11acf46.gif',
            route: '/home/galacticops'
        } ,
        

        {
            name: 'GalacticOps',
            description: 'An Network for NFT collections and findings ',
            rating: 4.5,
            image: 'https://nft-page-nine.vercel.app/assets/nft.e11acf46.gif',
            route: '/home/galacticops'
        } ,
        
        {
            name: 'GalacticOps',
            description: 'An Network for NFT collections and findings ',
            rating: 4.5,
            image: 'https://nft-page-nine.vercel.app/assets/nft.e11acf46.gif',
            route: '/home/galacticops'
        } ,
        

        {
            name: 'GalacticOps',
            description: 'An Network for NFT collections and findings ',
            rating: 4.5,
            image: 'https://nft-page-nine.vercel.app/assets/nft.e11acf46.gif',
            route: '/home/galacticops'
        } ,
        

        {
            name: 'GalacticOps',
            description: 'An Network for NFT collections and findings ',
            rating: 4.5,
            image: 'https://nft-page-nine.vercel.app/assets/nft.e11acf46.gif',
            route: '/home/galacticops'
        } ,
        

        {
            name: 'GalacticOps',
            description: 'An Network for NFT collections and findings ',
            rating: 4.5,
            image: 'https://nft-page-nine.vercel.app/assets/nft.e11acf46.gif',
            route: '/home/galacticops'
        } ,
        
        
        
    ]

    //initilize the useAuth0 hook
    const navigate = useNavigate();
    const { user, isAuthenticated } = useAuth0();

    useEffect(()=> {
        //check if use is Authenticate 
        if(!isAuthenticated){

            //redirect to login page
            navigate('/');

        } else {
            //if user is Authenticated
        }
    },[])

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
                    {
                        dapps.map(items => {
                            return (
                                <>

                                     <ProjectContainer name={items.name} rating={items.rating}
                                        description={items.description} image={items.image} route={items.route} 
                                     
                                     />
                                
                                </>
                            )
                        })
                    }
                </Box>

            </ContainerLayout>
        
        </>
    )
}

export default Homepage ;