export function getFacilities(hotelId)
{
    return facilityData.filter(facility => facility.hotelId === hotelId)
}

const facilityData = [
  {
    hotelId: "1",
    facility: "Bar"
  },
  {
    hotelId: "1",
    facility: "Restaurant"
  },
  {
    hotelId: "1",
    facility: "Sauna"
  },

  {
    hotelId: "2",
    facility: "Spa"
  },
  {
    hotelId: "2",
    facility: "Bar"
  },
  {
    hotelId: "2",
    facility: "Restaurant"
  },

  {
    hotelId: "3",
    facility: "Gym"
  },
  {
    hotelId: "3",
    facility: "Spa"
  },
  {
    hotelId: "4",
    facility: "Roomservice"
  },

  {
    hotelId: "4",
    facility: "Bar"
  },
  {
    hotelId: "4",
    facility: "Restaurant"
  },

  {
    hotelId: "5",
    facility: "Roomservice"
  },
  {
    hotelId: "5",
    facility: "Bar"
  },

  {
    hotelId: "6",
    facility: "Gym"
  },
  
  {
    hotelId: "6",
    facility: "Spa"
  }
  
]