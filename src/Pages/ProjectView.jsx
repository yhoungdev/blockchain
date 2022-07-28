import { Box , Text} from "@chakra-ui/react";
import Header from "../components/Headers";
import ContainerLayout from "../Layout/ContainerLayout";
import { useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import NotAuthenticate from './NotFound/NotAuthenticated';

const ProjectView = () => {

    const {isAuthenticated, user} = useAuth0();

    const navigate = useNavigate();

    return (
        <>

            
            <ContainerLayout>
              {
                //check if user is authenticated
                isAuthenticated ? (
                    <>

<Box>
              <Header />
                <Box py={'2em'} px={['', '10em']}>
                    <Text fontWeight={'bold'}>Project contents and Items</Text>

                    <Box my={'2em'}>

                        <Text>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur soluta hic ipsum nam, quaerat natus totam mollitia ex laudantium sit! Incidunt iusto ducimus vero, ullam dignissimos dolores aut quas sed.
                            Project contents and Items
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur soluta hic ipsum nam, quaerat natus totam mollitia ex laudantium sit! Incidunt iusto ducimus vero, ullam dignissimos dolores aut quas sed.
                            Project contents and Items
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur soluta hic ipsum nam, quaerat natus totam mollitia ex laudantium sit! Incidunt iusto ducimus vero, ullam dignissimos dolores aut quas sed.
                            Project contents and Items
                        </Text>

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