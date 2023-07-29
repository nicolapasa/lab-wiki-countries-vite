import { Link } from "react-router-dom";

function HomePage({countries}) {

  console.log(countries)
  

 return ( 
   <>
      <h1>
      WikiCountries: Your Guide to the World
      </h1>
      
      {
        countries.map(country=>{

       
       return(  
       <>
       <div className="d-flex justify-content-center border-bottom p-2">
       <Link to={`/${country.alpha3Code}`}>
       <img src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`} alt="" /><br />
       {country.name.common}
       
       </Link>
       </div>
       </>
        )

        })
      }
   </>

 )

}

export default HomePage;
