import { Box , Text , Flex  } from "@chakra-ui/react";
import {AiFillStar} from 'react-icons/ai';
const ReviewBox = ({userName , rating , comment} ) => {

    return (
        <>
            <Box my={'1em'} border={''} p={'1em'} boxShadow={'md'}>
                <Text fontWeight={'bold'}> {userName} </Text>
                <Text my={'0.5em'}> {comment} </Text>
                <Text display={'flex'} alignItems={"center"}> Rate: {rating ? (
                    <>
                        {
                            Array(rating).fill(0).map((_,i) => (
                                <AiFillStar color={'yellow'} size={'1em'} />
                            ))
                        }
                    </>
                ) : ''}  </Text>
            </Box> 
        </>
    )

}

export default ReviewBox;