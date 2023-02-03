import BOSTON from './images/boston.JPG'
import PERU from './images/peru.jpeg'
import PILOT from './images/pilot.jpeg'

export default [
    {
        title: "Machu Picchu",
        location: "Peru",
        googleMapsUrl: "https://www.google.com/maps/place/Machu+Picchu/@-13.1631412,-72.5449629,17z/data=!3m1!4b1!4m5!3m4!1s0x916d9a5f89555555:0x3a10370ea4a01a27!8m2!3d-13.1631412!4d-72.5449629",
        startDate: "29 Apr, 2021",
        endDate: "8 May, 2021",
        description: "Machu Picchu is a 15th-century Inca citadel located in the Eastern Cordillera of southern Peru on a 2,430-meter (7,970 ft) mountain range.",
        imageUrl: {PERU},
        city: "machupicchu"
    },

    {
        title: "Boston",
        location: "Massachusetts",
        googleMapsUrl: "https://www.google.com/maps/place/Boston,+MA/@42.31435,-70.970284,11z/data=!3m1!4b1!4m5!3m4!1s0x89e3652d0d3d311b:0x787cbf240162e8a0!8m2!3d42.3600825!4d-71.0588801",
        startDate: "12 Mar, 2022",
        endDate: "16 Mar, 2022",
        description: "One of the Northeast's best-known historical cities, Boston is the most populous city in New England and one of the best places to live on the East Coast. This cultural hub offers endless entertainment, convenient transportation, and excellent outdoor recreation.",
        imageUrl: {BOSTON},
        city: "boston"
    },

    {
        title: "Pilot Mountain",
        location: "North Carolina",
        googleMapsUrl: "https://www.google.com/maps/place/Pilot+Mountain,+NC+27041/@36.3848346,-80.488776,14z/data=!3m1!4b1!4m5!3m4!1s0x885237e954abbd99:0x5067bcef1375304f!8m2!3d36.3865267!4d-80.4695023",
        startDate: "10 Aug, 2022",
        endDate: "14 Aug, 2022",
        description: "Pilot Mountain is a town in Surry County, North Carolina, United States. The population was 1,443 at the 2020 census. It is named for the nearby landmark of Pilot Mountain, a distinctive geological formation.",
        imageUrl: {PILOT},
        city: "27041"
    }
]