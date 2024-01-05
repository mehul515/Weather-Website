import SearchBox from './SearchBox';
import InfoBox from './InfoBox';
import { useState } from 'react';
import Footer from './Footer';

export default function WeatherApp(){

    let [weatherInfo, setWeatherInfo] = useState(
        {
            city: "Search City",
            feelsLike: "",
            temp: "",
            minTemp: "",
            maxTemp: "",
            humidity: "",
            weather: ""
        }
    )

    let updateInfo = (result) => {
        setWeatherInfo(result)
    }


    return (
        <div style={{textAlign : "center"}}>
            <SearchBox updateInfo={updateInfo}></SearchBox>
            <InfoBox info={weatherInfo}></InfoBox>
            <Footer></Footer>
        </div>
    )
}