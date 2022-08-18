import { Modal, ModalBody, ModalContent, Button, Text , Select,

    FormLabel , Input , Box, ModalOverlay, ModalHeader
} from "@chakra-ui/react";
import { postData } from '../../Utils/Request';
import { useState , setState } from "react";
import { useParams } from "react-router-dom";

const ReviewModal = ({isOpen , onClose }) => {

    const {id} = useParams();

    const [ name , setName]  = useState('')
    const [ review , setReview ] = useState('')
    const [ rating , setRating ] = useState('')
    const [ postId , setPostId ] = useState('')
    const [comment , setComment ] = useState('')
    const [ loader , setLoader ] = useState(false)


    const payloads = {

        "name":localStorage.getItem('userName'),
        "rating":parseInt(rating),
        "comment":comment,
        "postId": id

    }

    const createReview = async  () => {
        setLoader(true)
        
        try {
            const response = await postData('/review/create', payloads);
            window.location.reload();
            setLoader(false)
        } catch (error) {

            console.log(error)

        }

    }

    return (
        <>


            <Modal isOpen={isOpen } onClose={onClose}>
                <ModalOverlay/>
                <ModalContent>
                    <ModalBody>
                    <ModalHeader>Add Review</ModalHeader>
                    <Box my={'2em'}>
                        
                        <Text my={'1em'}> <b>{localStorage.getItem('userName')}</b> add your review </Text>
                        
                        <Box my={'0.5em'}>
                            <FormLabel>Rate Project </FormLabel>
                            <Select size={'lg'} onChange={ e => setRating(e.target.value)}>
                                <option>Rate Project</option>
                                <option value={5}>Excellent</option>
                                <option value={4}> Amazing </option>
                                <option value={3}> Awesome </option>
                                <option value={2}> Good </option>
                                <option value={1}>Bad</option>
                            </Select>
                        </Box>

                       <Box my={'1em'}>
                        <FormLabel fontWeight={'medium'}>Add your comment</FormLabel>
                            <Input type={'text'} py={'1.5em'} variant={'filled'} placeholder={'Add Comment'}
                            onChange={ e => setComment(e.target.value)} h={'20vh'} />
                       </Box>
                       
                        <center>
                            <Button my={'1em'} py={'1.5em'} bg={'blue.500'} color={'#fff'}
                            onClick={createReview} 
                            isLoading={loader} _hover={{bg: 'blue.600'}}
                            loadingText={'Creating Review...'}>Add Comment </Button>

                        </center>
                    </Box>
                    </ModalBody>
                </ModalContent>
            </Modal>
        
        </>
    )
}

export default ReviewModal;