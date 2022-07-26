import { Box } from "@chakra-ui/react";
import ReviewBox from "./ReviewBox";
import { useState , useEffect } from "react";
import { fetchData } from "../Utils/Request";
import { useParams } from "react-router-dom";
import moment from "moment/moment";

const DisplayReview = () => {

    const { id } = useParams();

    const [loading , setLoadaing ] = useState(false)
    const [ reviewData , setReviewData ] = useState([])

    const getAllReviews = async () => {

        try {
            const response =  await fetchData(`/review/all/${id}`)
            setReviewData(response.reviews)
          
        
        } catch (error) {
            console.log(error)
        }

    }

    useEffect(()=>{
        getAllReviews()
    }, [])

    return (
        <>
        
            <Box>

                {
                    reviewData <=0 ? 'No Review For this project' : 
                        reviewData.map(review => (
                         
                            <>
                              
                                <ReviewBox userName={review.name} 
                                 comment={review.comment} rating={review.rating} date={moment(review.createdAt).startOf('hour').fromNow()}/>
                            </>
                        ))
                    
                }

            </Box>

        </>
    )
}

export default DisplayReview;