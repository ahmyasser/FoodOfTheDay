import {useState, useEffect} from 'react';
import yelp from '../apis/yelp';
import LocationRes from '../components/LocationRes';
export default () => {
  const [res , setResaults] = useState([]);
  const [errorMsg , setErrorMsg] = useState("");
  const {latitude,longitude}= LocationRes();

  const SearchApi = async term =>{
    try{
      const response = await yelp.get('/search',  {
        params: {
          limit:50,
          term,
          latitude,
          longitude
        }
      });
      setResaults(response.data.businesses);}
      catch(err){
        console.log(err);
        setErrorMsg("Something went wrong");
      }
  };

  useEffect(() => {
     SearchApi("fast food")
   },[]);

   return [res, errorMsg,SearchApi];
}
