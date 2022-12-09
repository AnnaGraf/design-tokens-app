import { useState } from 'react';
import { getFacilities } from '../../data/facilitiesData';
import { getReviews } from '../../data/reviewData';
import { getRooms } from '../../data/roomData';

import Review from './Review';
import RoomType from './RoomType';

const HotelCard = (props) => {
  const [expanded, setExpanded] = useState(false);

  const hotel = props.hotel;

  const expandStateHandler = () => {
    return setExpanded(!expanded);
  };

  return (
    <div className='card'>
      <div className='mainContent'>
        <img src={hotel.image} alt={hotel.name}/>
        <div>
          <div className='row'>
            <h3>{hotel.name}</h3>
            <p>From {hotel.price} €</p>
          </div>
          <div className='row'>
            <p>{hotel.location}</p>
            <p>{hotel.stars} stars</p>
          </div>
          <p>{hotel.desc}</p>
          <div>
            {getFacilities(hotel.hotelId).map((facility) => (
              <span className='facility'>{facility.facility}</span>
            ))}
          </div>
        </div>
      </div>
      {expanded ? (
        <div className='expandedContent'>
          <h5>Reviews</h5>
          <div className='flex'>
            {getReviews(hotel.hotelId).map((review) => (
              <Review reviewId={review.reviewId} />
            ))}
          </div>
          <h5>Images</h5>
          <div className='images'>
            <img
              src="https://images.unsplash.com/photo-1540304453527-62f979142a17?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8M3xkV3dYMmpuOXV4c3x8ZW58MHx8fHw%3D&auto=format&fit=crop&w=900&q=60"
              alt="dummy 1"
            />

            <img
              src="https://images.unsplash.com/photo-1605346434674-a440ca4dc4c0?ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8Mjl8ZFd3WDJqbjl1eHN8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60"
              alt="dummy 2"
            />

            <img
              src="https://images.unsplash.com/photo-1462539405390-d0bdb635c7d1?ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTB8ZFd3WDJqbjl1eHN8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60"
              alt="dummy 3"
            />

            <img
              src="https://images.unsplash.com/photo-1572177215152-32f247303126?ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MjF8ZFd3WDJqbjl1eHN8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60"
              alt="dummy 4"
            />

            <img
              src="https://images.unsplash.com/photo-1559508551-44bff1de756b?ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NXxkV3dYMmpuOXV4c3x8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60"
              alt="dummy 5"
            />
          </div>
          <p>{hotel.descLong}</p>

          <h5>Room Types</h5>
          <div className='flex'>
            {getRooms(hotel.hotelId).map((room) => (
              <RoomType roomId={room.roomId} />
            ))}
          </div>
        </div>
      ) : null}
      <button onClick={expandStateHandler} className='cardButton'>
        {expanded ? 'Minimize' : 'Read More'}
      </button>
    </div>
  );
};

export default HotelCard;
