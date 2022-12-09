export function getReviews(hotelId)
{
    return reviewData.filter(review => review.hotelId === hotelId)
}

export function getReview(reviewId)
{
    return reviewData.find(review => review.reviewId === reviewId)
}

const reviewData = [
  {
    reviewId:"1",
    hotelId: "1",
    text: "Great hotel! Nice rooms and close to the center.",
    name: "Benjamin",
    stars: "4"
  },
  {
    reviewId:"2",
    hotelId: "1",
    text: "I really enjoyed my stay here. The staff was nice and welcoming.",
    name: "Karen",
    stars: "4"
  },
  {    
    reviewId:"3",
    hotelId: "1",
    text: "In my opinion the rooms were way too cold.",
    name: "Sara",
    stars: "2"
  },
  {
    reviewId:"4",
    hotelId: "1",
    text: " Location is quite good, close to the main streets of old town. There was an unpleasant smell in the bathroom.",
    name: "Elena",
    stars: "2"
  },
  {
    reviewId:"5",
    hotelId: "2",
    text: "The place was spacious and we'll decorated. We had everything we needed for a great stay.",
    name: "Pawel",
    stars: "4"
  },
  {
    reviewId:"6",
    hotelId: "2",
    text: "Convenience to the shops, city etc. View from the balcony is amazing. Very spacious, clean and comfortable. Staff are very responsive and professional.",
    name: "Eve",
    stars: "5"
  },
  {
    reviewId:"7",
    hotelId: "2",
    text: "The room was pretty small and had no seating area. The hot water did not last long enough for two quick showers.",
    name: "Sophie",
    stars: "2"
  },
  {
    reviewId:"8",
    hotelId: "2",
    text: "Very helpfull staff, gave us lots of info and tips for city and helped to arrange a boat trip last min.",
    name: "Ben",
    stars: "3"
  },
  {
    reviewId:"9",
    hotelId: "3",
    text: "The view from the apartment is astonishing! It felt newly renovated and everything was clean. The location is great.",
    name: "Henric",
    stars: "4"
  },
  {
    reviewId:"10",
    hotelId: "3",
    text: " Location is quite good, close to the main streets of old town. There was an unpleasant smell in the bathroom.",
    name: "Elena",
    stars: "2"
  },
  {
    reviewId:"11",
    hotelId: "4",
    text: "Great hotel! Nice rooms and close to the center.",
    name: "Benjamin",
    stars: "4"
  },
  {
    reviewId:"12",
    hotelId: "4",
    text: "Convenience to the shops, city etc. View from the balcony is amazing. Very spacious, clean and comfortable. Staff are very responsive and professional.",
    name: "Eve",
    stars: "4"
  },
  {
    reviewId:"13",
    hotelId: "5",
    text: "The room was pretty small and had no seating area. The hot water did not last long enough for two quick showers.",
    name: "Sophie",
    stars: "2"
  },
  {
    reviewId:"14",
    hotelId: "6",
    text: "Convenience to the shops, city etc. View from the balcony is amazing. Very spacious, clean and comfortable. Staff are very responsive and professional.",
    name: "Eve",
    stars: "4"
  },
  {
    reviewId:"15",
    hotelId: "6",
    text: "The room was pretty small and had no seating area. The hot water did not last long enough for two quick showers.",
    name: "Sophie",
    stars: "2"
  }
]