import { Box, Button, FormControl,Text, FormLabel, Input, Flex } from "@chakra-ui/react";
import ContainerLayout from "../../Layout/ContainerLayout";
import { useState , useEffect } from "react";
import { postData } from '../../Utils/Request';
import {BiImageAdd} from 'react-icons/bi';
import Inputs from "../../components/Inputs";
import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";

const AdminHome = () => {

    const navigate = useNavigate()

    const [loaded , setLoaded ] = useState(false )
    const [title , setTitle ] = useState()
    const [ description , setDescription ] = useState()
    const [ tokenContract , setTokenContract ] = useState()
    const [ links , setLinks ] = useState()
    const [image , setImage ] = useState()
    const [tags , setTags ] = useState()
    const [tokenomics , setTokenomics ] = useState()
    const [socialLinks , setSocialLinks ] = useState()
    const [imageTitle , setImageTitle ] = useState()

        //handle image upload 
        const handleImageUpload = (e) => {

            const imageItem = e.target.files[0]
            setImage(imageItem)
            setImageTitle(imageItem.name)

        }

    const upload = async () => {

        setLoaded(true)

        const formData = new FormData()

       
        formData.append('image', image)
        formData.append('title', imageTitle)
        formData.append('description', description)
        formData.append('tokenContract', tokenContract)
        formData.append('links', links)
        formData.append('tags', tags)
        formData.append('tokenomics', tokenomics)
        formData.append('socialLinks', socialLinks)
       
        


        try {
            const request = await postData('/post/create', formData , {
                headers : {
                    'Authorization' : `Bearer ${localStorage.getItem('auth-token')}`
                }
            } );

            setLoaded(false)
            console.log(image)
        } catch ( error ) {
            setLoaded(false )
        }

    }


    //now check if user is Authenticate ot not 
    const userAuth = () => {
        //get user auth token from localStorage 
        const authToken = localStorage.getItem('auth-token');

        if(!authToken) {
            navigate('/')
        }



    }

    useEffect(()=> {
        userAuth()
    }, [])


    return (
        <>

            <ContainerLayout>
                <Box py={'3em'} width={['100%' , '50%']} mx={'auto'}
                 
                >
                   <Box my={'3em'} bg={'#fff'} py={'2em'} px={'2em'}>
                         <form >

                        <FormControl>
                            <FormLabel fontWeight={'bold'} htmlFor={'upload'} w={['40%','30%']} mx={'auto'} borderRadius={'md'} px={'1em'} py={'2em'} bg={'#80808017}'} textAlign={'center'}> 
                                <center><Text ><BiImageAdd size={'4em'}/> </Text></center>
                            </FormLabel>
                            <Text fontSize={'md'} my={'1em'} textAlign={'center'}> {imageTitle ? imageTitle : 'Upload project image' } </Text >
                            <Input display={'none'} accept={'image/*'} type={'file'} id={'upload'} onChange={handleImageUpload}  />

                        </FormControl>

                

                        <FormControl >
                            <Flex gap={'1em'} flexDir={['column' , 'row']}>
                             <Inputs type={'text '} placeholder={'Project Title'} onChange={ e => setTitle(e.target.value)}/>
                             <Inputs type={' text '} placeholder={' Contract Address '} onChange={ e => setTitle(e.target.value)}/>
                             
                            </Flex>

                            <Flex gap={'1em'} flexDir={['column' , 'row']}>
                             <Inputs type={'text '} placeholder={'Token'} onChange={ e => setTokenContract(e.target.value)}/>
                             <Inputs type={' text '} placeholder={' Links '} onChange={ e => setLinks(e.target.value)}/>
                             
                            </Flex>
                        </FormControl>

                        <Flex gap={'1em'} flexDir={['column' , 'row']}>
                             <Inputs type={'title '} placeholder={'Description'} onChange={ e => setDescription(e.target.value)}
                                h={'50%'}
                             />
                             
                             
                        </Flex>

                        <Box display={'flex'} justifyContent={'center'} my={'2em'}>
                            <Button isLoading={loaded }
                                onClick={upload}
                                _hover={{}}
                                loadingText={'Uploading Project...'}
                                bg={'blue.500'} color={'#fff'} py={'1.5em'}>Upload Project</Button>
                        </Box>

                        

                    </form>
                   </Box>
                </Box>
            </ContainerLayout>
        
        </>
    )
}

export default AdminHome;