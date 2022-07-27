import { Box , Text} from "@chakra-ui/react";
import Header from "../components/Headers";
import ContainerLayout from "../Layout/ContainerLayout";

const ProjectView = () => {
    return (
        <>

            
            <ContainerLayout>
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
            </ContainerLayout>

        </>
    )
}

export default ProjectView;