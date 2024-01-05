import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import "./SearchBox.css";
import { useState } from 'react';


export default function SearchBox({updateInfo}) {
    let [city, setCity] = useState("");
    let [error, setError] = useState(false);

    //URL for public weather API
    let API_URL = "https://api.openweathermap.org/data/2.5/weather";
    let API_KEY = "8066a6b5694f18b307506462839aea64";

    //function to fetch information from weather API and format data in the desired object format. 
    let getWeatherInfo = async () => {
        try{
            let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            let jsonResponse = await response.json();
            let result = {
                city : city,
                temp : jsonResponse.main.temp,
                minTemp : jsonResponse.main.temp_min,
                maxTemp : jsonResponse.main.temp_max,
                humidity : jsonResponse.main.humidity,
                feelsLike : jsonResponse.main.feels_like,
                weather : jsonResponse.weather[0].description,
            }
            console.log(result);
            return result;
        }catch(err){
            throw err;
        }
    }


    function handleCityChange(event){
        setCity(event.target.value);
    }

    async function handleSubmit(event){
        try{
            event.preventDefault();
            console.log(city);
            let newInfo = await getWeatherInfo(); 
            updateInfo(newInfo);
        }catch(err){
            setError(true);
        }
    }
    
    return (
        <div className='searchBox'>
            <h2 className='heading'>Weather App</h2>
            <form onSubmit={handleSubmit}>
            <TextField onChange={handleCityChange} id="city" label="City Name" variant="outlined" value={city} required/>
            <br /><br />
            <Button type='submit' variant="contained">Search</Button>
            {error && <Alert style={{width : "30rem", margin:"auto"}} severity="error">Sorry! No result found!</Alert>}
            </form>
        </div>
    )

}