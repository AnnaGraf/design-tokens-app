import { getRoom } from '../../data/roomData';

const RoomType = (props) => {

  const roomId = props.roomId;
  const room = getRoom(roomId);   

  return(
    <div>
      {/* Component for the rooms of hotels */}
      <p>{room.roomName}</p>
      <p>{room.price} €</p>
      <p>{room.bed}</p>
      <p> {room.text}</p>
      <p>Breakfast for {room.numberGuests}</p>
    </div>
  )
}

export default RoomType;