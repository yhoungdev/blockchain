import { Box } from "@chakra-ui/react";
import ReviewBox from "./ReviewBox";
import { useState , useEffect } from "react";
import { fetchData } from "../Utils/Request";
import { useParams } from "react-router-dom";

const DisplayReview = () => {

    const { id } = useParams();

    const [loading , setLoadaing ] = useState(false)
    const [ reviewData , setReviewData ] = useState([])

    const getAllReviews = async () => {

        try {
            const response =  await fetchData(`/review/all/${id}`)
            setReviewData(response.reviews.slice(12))
            console.log(response.reviews.slice(10))
        
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
                    reviewData <=0 ? 'No Data a' : 
                        reviewData.map(review => (
                            <>
                                <ReviewBox userName={review.name} 
                                 comment={review.comment} rating={review.rating}/>
                            </>
                        ))
                    
                }

            </Box>

        </>
    )
}

export default DisplayReview;