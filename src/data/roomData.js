export function getRooms(hotelId)
{
    return roomData.filter(room => room.hotelId === hotelId)
}

export function getRoom(roomId)
{
    return roomData.find(room => room.roomId === roomId)
}

const roomData = [
  {
    roomId:"1",
    hotelId: "1",
    roomName: "King's Room",
    bed: "King size bed",
    numberGuests: "2",
    price: "80",
    text: "In this room you share a big king size bed. The rooms proved you with great views and a Jacuzzi. Inte mooring we serve breakfast for two adults."
  },
  {
    roomId:"2",
    hotelId: "1",
    roomName: "Queen's Room",
    bed: "Queen size bed",
    numberGuests: "2",
    price: "65",
    text: "In this room you share a queen size bed. The minibar is filled and roomrevice only a phonecall away. Inte mooring we serve breakfast for two adults."
  },
  {
    roomId:"3",
    hotelId: "1",
    roomName: "Standard Room",
    bed: "2 single beds",
    numberGuests: "2",
    price: "50",
    text: "In this room you get two separate beds. The minibar is filled and roomrevice only a phonecall away. Inte mooring we serve breakfast for two adults."
  },

  {
    roomId:"4",
    hotelId: "2",
    roomName: "King's Room",
    bed: "King size bed",
    numberGuests: "2",
    price: "95",
    text: "In this room you share a big king size bed. The rooms proved you with great views and a Jacuzzi. Inte mooring we serve breakfast for two adults."
  },
  {
    roomId:"5",
    hotelId: "2",
    roomName: "Queen's Room",
    bed: "Queen size bed",
    numberGuests: "2",
    price: "80",
    text: "In this room you share a queen size bed. The minibar is filled and roomrevice only a phonecall away. Inte mooring we serve breakfast for two adults."
  },
  {
    roomId:"6",
    hotelId: "2",
    roomName: "Standard Room",
    bed: "2 single beds",
    numberGuests: "2",
    price: "65",
    text: "In this room you get two separate beds. The minibar is filled and roomrevice only a phonecall away. Inte mooring we serve breakfast for two adults."
  },

  {
    roomId:"7",
    hotelId: "3",
    roomName: "King's Room",
    bed: "King size bed",
    numberGuests: "2",
    price: "80",
    text: "In this room you share a big king size bed. The rooms proved you with great views and a Jacuzzi. Inte mooring we serve breakfast for two adults."
  },
  {
    roomId:"8",
    hotelId: "3",
    roomName: "Queen's Room",
    bed: "Queen size bed",
    numberGuests: "2",
    price: "65",
    text: "In this room you share a queen size bed. The minibar is filled and roomrevice only a phonecall away. Inte mooring we serve breakfast for two adults."
  },
  {
    roomId:"9",
    hotelId: "3",
    roomName: "Standard Room",
    bed: "2 single beds",
    numberGuests: "2",
    price: "50",
    text: "In this room you get two separate beds. The minibar is filled and roomrevice only a phonecall away. Inte mooring we serve breakfast for two adults."
  },

  {
    roomId:"10",
    hotelId: "4",
    roomName: "Queen's Room",
    bed: "Queen size bed",
    numberGuests: "2",
    price: "60",
    text: "In this room you share a queen size bed. The minibar is filled and roomrevice only a phonecall away. Inte mooring we serve breakfast for two adults."
  },
  {
    roomId:"11",
    hotelId: "4",
    roomName: "Standard Room",
    bed: "2 single beds",
    numberGuests: "2",
    price: "40",
    text: "In this room you get two separate beds. The minibar is filled and roomrevice only a phonecall away. Inte mooring we serve breakfast for two adults."
  },

  {
    roomId:"12",
    hotelId: "5",
    roomName: "Queen's Room",
    bed: "Queen size bed",
    numberGuests: "2",
    price: "65",
    text: "In this room you share a queen size bed. The minibar is filled and roomrevice only a phonecall away. Inte mooring we serve breakfast for two adults."
  },
  {
    roomId:"13",
    hotelId: "5",
    roomName: "Standard Room",
    bed: "2 single beds",
    numberGuests: "2",
    price: "50",
    text: "In this room you get two separate beds. The minibar is filled and roomrevice only a phonecall away. Inte mooring we serve breakfast for two adults."
  },

  {
    roomId:"14",
    hotelId: "6",
    roomName: "King's Room",
    bed: "King size bed",
    numberGuests: "2",
    price: "85",
    text: "In this room you share a big king size bed. The rooms proved you with great views and a Jacuzzi. Inte mooring we serve breakfast for two adults."
  },
  
  {
    roomId:"15",
    hotelId: "6",
    roomName: "Standard Room",
    bed: "2 single beds",
    numberGuests: "2",
    price: "65",
    text: "In this room you get two separate beds. The minibar is filled and roomrevice only a phonecall away. Inte mooring we serve breakfast for two adults."
  }
  
]