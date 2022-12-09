import HotelCard from './HotelCard';
import { getHotelData } from '../../data/hotelData';

const HotelsList = () => { 
  return(
    <div>
      {/* Looping through the hotels to see which fits the search and shows those */}          
      {getHotelData().map(hotel => (
        <HotelCard hotel = {hotel}/>
      ))};
      </div>
  )
};

export default HotelsList;