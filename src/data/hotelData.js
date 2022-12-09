export function getHotelData(){
  return hotelData;
}

export function getHotel(hotelId)
{
    return hotelData.find(hotel => hotel.hotelId === hotelId)
}

const hotelData = [
  {
    hotelId: "1",
    name: "Park Hotel",
    image: "https://images.unsplash.com/photo-1554647286-f365d7defc2d?ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8N3xkV3dYMmpuOXV4c3x8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60",
    location: "Gothenburg",
    price: 50,
    stars: 4,
    desc: "The Park Hotel is a modern, elegant 4-star hotel overlooking the park, perfect for a romantic, charming vacation.",
    descLong: "The rooms at the Park Hotel are new, well-lit and inviting. Our reception staff will be happy to help you during your stay in Gothenburg, suggesting guided visits and some good restaurants in the center. While you enjoy a beer in the sauna on the rooftop terrace, you will be stunned by the breathtaking view of the park and city."
  },
  {
    hotelId: "2",
    name: "Royal Inn",
    image: "https://images.unsplash.com/photo-1521783988139-89397d761dce?ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MjJ8ZFd3WDJqbjl1eHN8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60",
    location: "Stockholm",
    price: 65,
    stars: 5,
    desc: "The Royal Inn is located close to the castle, the center of Stockholm. The Royal In is now a brand-new hotel with a trendy look and feel and an extensive list of added features, most notably 369 totally renovated guest-rooms, including 10 junior suites and a sumptuous 155 square-meter presidential suite with private Jacuzzi.",
    descLong: "Affording fantastic views over Stockholm, the new and very glamorous top-floor Panorama Restaurant and Panorama Bar is remarkable for its gourmet cuisine, show cooking and impressive glass wine storage area, setting a new standard in the concept of entertainment and high-quality urban gastronomy. The perfect setting can be found in the hotel lobby where a fresh design and high degree of functionality complement the bar and all-day-dining Lobby Bistro, the ideal place for an informal meeting or business lunch. The Royal In is fully complete with its ultra-modern Spa center, covering a total area of 1,500 square meters. Facilities include 10 treatment rooms, a heated outdoor swimming pool, fitness room, Jacuzzi, sauna, chill-out areas, and juice bar."
  },
  {
    hotelId: "3",
    name: "Lotus Hotel & Spa",
    image: "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8c3BhfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60",
    location: "Stockholm",
    price: 50,
    stars: 4,
    desc: "Lotus Hotel & Spa envelops you in materials and colors that reflect the Swedish nature – from mountain to coast. Our four suites create a story all by themselves, showcasing the four seasons: spring, summer, autumn and winter. You’ll sleep just as sweetly no matter which one you choose, but the different themes will reveal new discoveries every time you visit.",
    descLong: "Welcome to Lotus Hotell & Spa, a modern design hotel in the heart of Stockholm. Our rooms represent the height of comfort for a good night’s sleep. Come and visit our spa on the 8th floor. Feel for yourself the rich contrasts of nature’s products on your skin. Relax in our soothing pools on the spa terrace, or refresh yourself with an ice bath, then sweat it out in the dry sauna, year-round. Indoors, you can treat yourself not only to the sauna and relaxation areas but also therapeutic and restorative treatments."
  },
  {
    hotelId: "4",
    name: "Globe Hotel",
    image: "https://images.unsplash.com/photo-1576354302919-96748cb8299e?ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8Mjh8ZFd3WDJqbjl1eHN8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60",
    location: "Stockholm",
    price: 40,
    stars: 3,
    desc: "Hotel Globe is located next to the globe. This renovated 3 stars combines the art and tradition of hospitality with all the facilities and services of an international unit.",
    descLong: "If you wish to enjoy your dinner, here at our restaurant or at your room before visiting the globe our staff will provide you with this. Or Visit our sports bar for a nice beer and warm-up before the event. For the person not interested in sports we also provide you with a more social part of the bar."
  },
  {
    hotelId: "5",
    name: "Stockholm City Hotel",
    image: "https://images.unsplash.com/photo-1554009975-d74653b879f1?ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NnxkV3dYMmpuOXV4c3x8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60",
    location: "Stockholm",
    price: 50,
    stars: 3,
    desc: "Stockholm City Hotel is a modern hotel in central Stockholm, right next to Stockholm Central Station. With a restaurant, bar, and conference facilities, you'll be able to experience a magnificent Stockholm vibe.",
    descLong: "In the heart of Stockholm, yet just 20 minutes from Stockholm Arlanda Airport, thanks to the Arlanda Express high-speed airport shuttle train being right next door. And Stockholm Central Station is just around the corner too, with national trains, commuter trains, metro trains, and buses. Read more about Stockholm here. All of the hotel rooms at Stockholm City Hotel underwent extensive renovation in 2012, and scenes from the streets and squares of Stockholm now adorn the walls of each room with stunning photographic wallpaper."
  },
  {
    hotelId: "6",
    name: "View Hotel",
    image: "https://images.unsplash.com/photo-1518733057094-95b53143d2a7?ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTJ8ZFd3WDJqbjl1eHN8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60",
    location: "Gothenburg",
    price: 65,
    stars: 4,
    desc: "The View Hotel in Gothenburg is ideal for conferences, relaxation and weekends away! The hotel is within easy reach of Liseberg, Chalmers, Svenska Mässan and Avenyn, and all the city’s main cultural attractions.",
    descLong: "View Hotel has been built with inspiration from densely populated cities such as Los Angeles, Milan, New York, Madrid, and Paris. We are feng shui certified and the architecture sets the tone just as much as the great city location. The interiors, lighting, aromas, and sound are equally as important as our excellent service and delicious food and beverages. The hotel's 101 rooms and 202 beds also play a vital role in your experience here. We want your stay to be memorable."
  }
]