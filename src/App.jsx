import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar";
import CountryDetails from "./pages/CountryDetailsPage";
import { useState, useEffect } from "react";
import axios from "axios";


function App() {



const [countries, setCountries] = useState([])

const getData = async () => {
  const { data } = await axios.get(`https://ih-countries-api.herokuapp.com/countries`);
  setCountries(data);
};


useEffect( () =>  {

   getData();
}, [])


  return (
    <div className="App">
      <h1>LAB | React WikiCountries</h1>
      <Navbar />
      <Routes>
      <Route path="/" element={<HomePage countries={countries}  />} />
      <Route path="/:countryId" element={<CountryDetails />} />
      </Routes>
    </div>
  );
}

export default App;
