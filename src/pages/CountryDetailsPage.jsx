import axios from "axios";
import { useEffect, useState } from "react";
import { Link,  useParams } from "react-router-dom";

function CountryDetails() {
    const { countryId } = useParams();
    const [country, setCountry] = useState(null)



    const getData = async () => {
     
      const { data } = await axios.get(`https://ih-countries-api.herokuapp.com/countries/${countryId}`);
      setCountry(JSON.parse(JSON.stringify(data)));

    };
    
    
    useEffect( () =>  {

       getData();
       
    }, [])
   


   if( country===null ) {

    return ('is loading')
   }
   else {

    return (
        <>
     
    
        <h1>Country Details </h1>
        <img src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`} alt="" />
      <h1 className="border-bottom p-2"> {country.name.common}</h1>

      <div className="grid">

         <div>
             <h2 className="border-bottom p-2">Capital: {country.capital}</h2>
             <h2 className="border-bottom p-2">Area: {country.area} km2</h2>
             <h2>Borders:    

             { country.borders.map((border)=>  {
                  
               return (
             <>
          <Link to={`/${border}`} key={country._id} onClick={() => {window.location.href=`/${border}`}}>{border} 
          </Link>
             <br />
                 </>
               ) 
             })}
             </h2>
         </div>
      </div>
    
        </>
    )
}
}

export default CountryDetails;
