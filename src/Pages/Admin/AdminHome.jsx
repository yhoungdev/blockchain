import { Box, Button, FormControl, FormLabel, Input } from "@chakra-ui/react";
import ContainerLayout from "../../Layout/ContainerLayout";
import { useState , useEffect } from "react";
import { postData } from '../../Utils/Request';

const AdminHome = () => {

    const [loaded , setLoaded ] = useState(false )
    
    const upload = async () => {

        const payload = {

        }

        const request = await postData();

    }

    //handle image upload 
    const handleUpload = ( e ) => {
        const item = e.target.file;
        console.log(item)
    }

    return (
        <>

            <ContainerLayout>
                <Box py={'3em'} width={['100%' , '50%']} mx={'auto'}
                >
                    <form >

                        <FormControl>
                            <FormLabel>Upload </FormLabel>
                            <Input type={'file '} onChange={handleUpload} />

                        </FormControl>

                        <Box>
                            <Button isLoading={loaded }
                            loadingText={'Uploading Project...'}>Upload Project</Button>
                        </Box>

                    </form>
                </Box>
            </ContainerLayout>
        
        </>
    )
}

export default AdminHome;