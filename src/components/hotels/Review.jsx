import { getReview } from '../../data/reviewData';

const Review = (props) => {
  const reviewId = props.reviewId;
  const review = getReview(reviewId);    

  return(
    <div className='flex'>
      {/* Component for the reviews of hotels */}
      <div className='card-small'>
        <p>{review.stars}</p>
        <p>{review.text}</p>
        <p>{review.name}</p>
      </div>
    </div>
  )
}

export default Review; 