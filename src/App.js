
import './App.css';
import { ThemeProvider } from '@mui/material/styles';
import {theme} from './muiTheme';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import SearchInput from './components/search'
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search'
import IconButton from '@mui/material/IconButton';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import FiberManualRecordOutlinedIcon from '@mui/icons-material/FiberManualRecordOutlined';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import InfoCard from './components/InfoCard';
import {OutlinedCard} from './components/InfoCard';
import TodayDetailes from './components/TodayDetailes';
import UvIndex from './components/Uv_index';
import Wind from './components/Wind';
import DetailesCArd from './components/DetailesCard';
import axios from "axios";
import { useEffect, useState } from 'react';
import * as dayjs from 'dayjs'
import { Today } from '@mui/icons-material';
import { useTranslation } from 'react-i18next';

const DemoPaper = styled(Paper)(({ theme }) => ({
  width: '88%',
  height: '280px',
  padding: theme.spacing(2),
  ...theme.typography.body2,
  textAlign: 'center',
  height:'100%',
  backgroundImage: `linear-gradient(
      to bottom, 
      rgba(0, 0, 0, 0.8),    
      rgba(0, 0, 0, 0)       
    ), 
    url('/rain.jpeg')`, 
  
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundColor: 'transparent', 
  border: 'none',
  boxShadow: 'none',
  borderRadius:'15px',
  display: 'flex',
  flexDirection: 'column',
  // overflow: 'hidden',
  // display:'flex',
  // alignItems:'center',
  // justifyContent:'center'
}));
  
  

// console.log('theme', theme);
function App() {
  console.log('rendiring mautingggggggggg')
  let time = new Date().toLocaleTimeString();
  // let hour = parseInt(time[0])
  // console.log('hour', hour) 

  const days =['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']
  // let day = days[dayjs().day()]
  // console.log(day)
  const now = new Date();
// console.log('nowwwww', now);
const formattedDate = now.toLocaleDateString('en-GB'); 
// console.log('nowwwww', formattedDate)
  // let daynum = dayjs().day()
  // console.log('daynummmmm', daynum)
  // const year = dayjs().get('year')
  // console.log('dayyyyyyyyyy', year)
  // dayjs().get('month') // start 0
  // console.log('yyyyyyyy', dayjs().get('date'))
  // console.log('houuuuur', dayjs().get('day'))
  let hour = dayjs().get('hour');
  let validHours =[]
        // validHours.push(hour);
        for(let i = hour + 1;  i <= 23; i++) {
          validHours.push(i)
        }
        // console.log('vvvvvvvvvv', validHours)
         
  // console.log(hour)


  const [APIData, setAPIData] = useState({ icon:'', state:'', temp:12, location:'', humidity:'', precip_mm:'', feelslike_c:'', vis_miles:'', wind_mph:'', wind_kph:'', wind_dir:'', current:'',UvIndex:''});
  const [cityInput, setCityInput] = useState({city:'Damascus', searchClick: false});
  const [TodayDetaileState, setDaisDetailes] = useState([]);
  const { t, i18n } = useTranslation();
  
  
  function handleInputChange(e) {
    console.log('fromhandleinputttttttt',e.target.value)
    setCityInput({...cityInput, city:e.target.value})
  }

  function handleSearchClick() {
    // console.log('fromhandleinputtttttttttt', cityInput.searchClick)
    setCityInput({...cityInput, searchClick:! cityInput.searchClick})
  }
 
  // console.log('dddddddddddddddddd', typeof(time), hour)
  useEffect(()=> {
    i18n.changeLanguage("ar")
  }, []);
  useEffect(()=> {
    console.log('start useEffectttttttt', cityInput)
    const controller = new AbortController();
     
axios.get("http://api.weatherapi.com/v1/forecast.json", {
  
    params: {
      
      key:'0618db3d343a4a6698373524260205',
      q:`${cityInput.city}`,
      days:'10'
    },
    signal: controller.signal
  })
  .then((response) => {
    // console.log(response.data);
    console.log('currenttttttttt', response.data.current.temp_c)
    // console.log('in useeffect', response.data.current.condition)
    // console.log('in response.data.forecast.forecastday', response.data.forecast.forecastday)
    // console.log('currentttttttt', response.data.current)
    // console.log('in useeffect', response.data.location.name)
    const daysDetailes = response.data.forecast.forecastday;
    // console.log('ddddddddddddaaa', daysDetailes)
    const icon = response.data.current.condition.icon;
    const state = response.data.current.condition.text;
    const temp = response.data.current.temp_c;
    const location = response.data.location.name;
    const humidity = response.data.current.humidity;
    const precip_mm = response.data.current.precip_mm;
    const feelslike_c = response.data.current.feelslike_c;
    const vis_miles = response.data.current.vis_miles;
    const wind_mph = response.data.current.wind_mph;
    const wind_kph = response.data.current.wind_kph;
    const wind_dir = response.data.current.wind_dir;
    const current = response.data.current;
    
    setAPIData({ icon, state, temp, location, humidity, precip_mm, feelslike_c, vis_miles, wind_mph, wind_kph, wind_dir, current});
    setDaisDetailes(daysDetailes)
    // console.log('dayyyyyyyyyyyyyyyyyyy', daysDetailes)
    // console.log('ffff', APIData)
    // console.log('sssss', daysDetailes, icon, state, temp, location, humidity, precip_mm, feelslike_c, vis_miles, wind_mph, wind_kph, wind_dir, current)
  })
  .catch((error) => {
    console.error(error);
  })
  .finally(() => {
    console.log("Request completed");
    // console.log(APIData)
  });
return ()=> {
console.log('cansling apireq')
controller.abort();
}
  }, [cityInput.searchClick])
  

  return (
    <ThemeProvider theme={theme}>
    <div style={{display:'flex', alignItems:'center', justifyContent:'center', background:'',}}>
      
       <Container maxWidth="lg" style={{ 
        // background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0.2) 100%)',
        background: ' rgba(0, 0, 0, 0.6)',
        borderRadius:'15px', marginTop:'100px',
  }} 
  >
    {/* {console.log('handleSearchClickddddddddddddd', handleSearchClick)} */}
          <Grid container spacing={2} style={{background:'', marginTop:'15px', minHeight: '100%' }}>
          <Grid size={5} style={{background:''}}>
            <Stack  style={{background:'', height:'100%'}} spacing ={1}>
            <SearchInput cityInput={cityInput} handleInputChange={handleInputChange}  handleSearchClick={handleSearchClick} > </SearchInput>
            <DemoPaper  variant="elevation">
              <Box
        sx={{
          width: 100,
          height: 70,
          borderRadius: 1,
          display:'flex', alignItems:'center', justifyContent:'center',
          fontSize:'50px',
          marginLeft:'170px',
          color:'white',
          marginTop:'60px'
        }}
       >
        {APIData.temp} <FiberManualRecordOutlinedIcon sx={{fontSize:'small', marginBottom:'40px', color:'white'}}/>
        
        </Box>
        <img src={TodayDetaileState[0]?.day?.condition?.icon} alt='' style={{marginLeft:'100px', marginTop:'-20px', height:'200px', width:'200px'}} />
        <div style={{ background:'', color:'white'}}> {APIData.state} 
          
          {/* <div style={{background:'', fontSize:'10px', color:'white'}}> this is more detailse discript </div> */}
        <hr />
        <h1> {t(cityInput.city)} </h1>
        
        </div>
        
        <div style={{ flex: 1, color:'white', background:'',
   marginTop:'80px'}}>
           <Grid container spacing={2}>
           <Grid size={6} style={{background:''}}>
             <Stack spacing={4}>
             <OutlinedCard variant="outlined" title='feels like'
              number={APIData.feelslike_c} detailes={'humidity makes it feel warmer'} ></OutlinedCard>
             <OutlinedCard variant="outlined" title='visibility' sx={{fontFamily:'mogra'}}  number={`${APIData.vis_miles} MI`} ></OutlinedCard>
             </Stack>
           </Grid>
           <Grid size={6} style={{background:''}}>
            <Stack spacing={4}>
             <OutlinedCard variant="outlined" title='precipitation' number={`${APIData.precip_mm}`}
             detailes= 'in last 24 hour ' 
            //  extradetailes = '2 expected in next 24 hour' 
             ></OutlinedCard>
             <OutlinedCard variant="outlined" title = 'humidity' number={`${APIData.humidity}%`}
             detailes={`the dew point is ${APIData.current.dewpoint_c} C right now `}></OutlinedCard>
            </Stack>
           </Grid>
         </Grid>
           </div>

            </DemoPaper>
            <Box/>
        
            </Stack>
            
          </Grid>
          <Grid size={7} style={{background:''}}>
            {/* <div style={{background:'red', marginTop:'-10px',borderRadius:'20px'}} >
            <TodayDetailes />
            <TodayDetailes />
            <UvIndex/>
            </div> */}
            <Stack direction={'column'}> 
              <TodayDetailes title='Hourly Forecast'> 
                {/* { console.log('aaaaaaaaaaaaaaa', APIData.daysDetailes[0].hour[hour])} */}
                {/* {console.log('aaaaaaaa', daysDetailes[0].day.condition.icon)} */}
                {/* {console.log('hourhhhhhhh', hour)} */}
                
                 <DetailesCArd selected={true} temp={TodayDetaileState[0]?.hour[hour].temp_c} icon={TodayDetaileState[0]?.day.condition.icon}/> 
                 
                  
                   {validHours.map((hour) => (
                      <DetailesCArd
                        key={hour} // Essential for React rendering performance
                        hour={`${hour}:00`}
                        temp={TodayDetaileState[0]?.hour[hour]?.temp_c} 
                        icon={TodayDetaileState[0]?.day?.condition?.icon}
                      />
                      ))}
                 {/* <DetailesCArd hour={`${hour + 1}  :00`} temp={daysDetailes[0]?.hour[hour + 1].temp_c} icon={daysDetailes[0]?.day.condition.icon}/>
                 <DetailesCArd hour={`${hour + 2}  :00`} temp={daysDetailes[0]?.hour[hour + 2].temp_c} icon={daysDetailes[0]?.day.condition.icon}/>
                 <DetailesCArd hour={`${hour + 3}  :00`} temp={daysDetailes[0]?.hour[hour + 3].temp_c} icon={daysDetailes[0]?.day.condition.icon}/>
                 <DetailesCArd hour={`${hour + 4}  :00`} temp={daysDetailes[0]?.hour[hour + 4].temp_c} icon={daysDetailes[0]?.day.condition.icon}/>
                 <DetailesCArd hour={`${hour + 5}  :00`} temp={daysDetailes[0]?.hour[hour + 5].temp_c} icon={daysDetailes[0]?.day.condition.icon}/>
                 <DetailesCArd hour={`${hour + 6}  :00`} temp={daysDetailes[0]?.hour[hour + 6].temp_c} icon={daysDetailes[0]?.day.condition.icon}/>
                 <DetailesCArd hour={`${hour + 7}  :00`} temp={daysDetailes[0]?.hour[hour + 7].temp_c} icon={daysDetailes[0]?.day.condition.icon}/>
                 <DetailesCArd hour={`${hour + 8}  :00`} temp={daysDetailes[0]?.hour[hour + 8].temp_c} icon={daysDetailes[0]?.day.condition.icon}/>
                 <DetailesCArd hour={`${hour + 9}  :00`} temp={daysDetailes[0]?.hour[hour + 9].temp_c} icon={daysDetailes[0]?.day.condition.icon}/> */}
              </TodayDetailes>
                
              <TodayDetailes title='10 Day Forecast'> 
                <DetailesCArd hour='TODAY' selected={true} date={formattedDate}  icon={TodayDetaileState[0]?.day?.condition?.icon}/> 
                {
                
                Array.from({ length: 9 }, (_, i) => i + 1).map((i) => (
                  
                    <DetailesCArd
                      key={i} 
                      hour={days[(dayjs().day() + i) % days.length]}
                      date={dayjs(TodayDetaileState[i]?.date).format("DD/MM/YYYY")}
                      temp={TodayDetaileState[i]?.day?.avgtemp_c}
                      icon={TodayDetaileState[i]?.day?.condition?.icon}
                    />
                  ))}
                
              </TodayDetailes>
            
            <Stack direction={'row'} spacing={1} sx={{marginTop:'15px'}}>
             <UvIndex number={APIData.current.uv}/>
             <Wind number1={APIData.wind_mph} number2={APIData.wind_kph}/>
             </Stack>
            </Stack>
            
          </Grid>
        </Grid>  
          
       </Container>
        {/* <OutlinedCard variant="outlined"></OutlinedCard> */}
    </div>
    </ThemeProvider>
  );
}

export default App;