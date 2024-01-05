import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import LightModeIcon from '@mui/icons-material/LightMode';
import "./InfoBox.css";

export default function InfoBox({ info }) {

    const HAZE_IMG_URL = "https://th.bing.com/th/id/R.c4988c6ae2f8fa60c4d528a97c790820?rik=ehewZtPdvPhJdA&riu=http%3a%2f%2fstatic-38.sinclairstoryline.com%2fresources%2fmedia%2f4501ab41-cde0-402a-9831-c7d9c44ea70c-large16x9_1280x720_60722P00RXIYY.jpg%3f1558187431553&ehk=W1xlXZ82iQ0GzDcR0vRLPclbOmB7sAQobYr1Q3isBLk%3d&risl=&pid=ImgRaw&r=0";
    const HOT_IMG_URL = "https://images.unsplash.com/photo-1504370805625-d32c54b16100?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const COLD_IMG_URL = "https://images.unsplash.com/photo-1612208695882-02f2322b7fee?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const RAIN_IMG_URL = "https://images.unsplash.com/photo-1433863448220-78aaa064ff47?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const PLEASANT_IMG_URL = "https://qph.cf2.quoracdn.net/main-qimg-d8b20b7d86883ab16d900862f7500a7d.webp";
    console.log(info.humidity);

    const IMG_URL = info.humidity > 80 ? RAIN_IMG_URL : info.temp > 35 ? HOT_IMG_URL : info.temp >= 18 && info.weather != "haze" ? PLEASANT_IMG_URL : info.weather === "haze" ? HAZE_IMG_URL : info.temp < 18 && info.temp != "" ? COLD_IMG_URL : "https://images.ctfassets.net/hrltx12pl8hq/6TIZLa1AKeBel0yVO7ReIn/1fc0e2fd9fcc6d66b3cc733aa2547e11/weather-images.jpg?fit=fill&w=1200&h=630";

    return (
        <div className='InfoBox'>
            <Card sx={{ maxWidth: 350, minWidth:350, maxHeight:450}}>
                <CardMedia
                    sx={{ height: 200 }}
                    image={IMG_URL}
                    title="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        <b>{info.city} Weather &nbsp;
                            {info.humidity > 80 ? <ThunderstormIcon /> : info.temp > 20 ? <LightModeIcon /> : info.temp != "" ? <AcUnitIcon /> : ""}</b>
                    </Typography>
                    <Typography variant="body2" color="text.secondary" component={"span"}>
                        <p>Temperature : <b>{info.temp}&deg;C</b></p>
                        <p>Humidity : <b>{info.humidity}</b></p>
                        <p>Minimum Temperature : <b>{info.minTemp}&deg;C</b></p>
                        <p>Maximum Temperature : <b>{info.maxTemp}&deg;C</b></p>
                        <p>Weather is a little <b>{info.weather}</b> and Temperature feels like <b>{info.feelsLike}&deg;C.</b></p>
                    </Typography>
                </CardContent>
            </Card>
        </div>
    )
}