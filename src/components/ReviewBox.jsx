import { Box , Text , Flex  } from "@chakra-ui/react";
import {AiFillStar} from 'react-icons/ai';
import {AiOutlineClockCircle}  from 'react-icons/ai'
const ReviewBox = ({userName , rating , comment, date} ) => {

    return (
        <>
            <Box my={'1em'} border={''} p={['1.5em','2em']} boxShadow={''} bg={'#fff'} borderRadius={'0.5em'}>
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

                   {/* //   display time  */}
                <Text display={'flex'} alignItems={'center'} gap={'0.5em'} mt={'1em'}>
                    <AiOutlineClockCircle/>
                    {date}
                </Text>
                
            </Box> 
        </>
    )

}

export default ReviewBox;