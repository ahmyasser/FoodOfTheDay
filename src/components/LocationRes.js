import {useState} from 'react'
export default LocationRes=() => {
  const [latitude, setLat] = useState(0);
  const [longitude, setLong] = useState(0);

   navigator.geolocation.getCurrentPosition(
     ({coords}) => {
       const latitude=  parseFloat(coords.latitude);
       const longitude= parseFloat(coords.longitude);
       setLat(latitude);
       setLong(longitude);
       },
     error => Alert.alert(error.message),
     { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
   );
   return {latitude,longitude};

 };
