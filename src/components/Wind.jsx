




import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// // import CardContent from '@mui/material/CardContent';
// import Button from '@mui/material/Button';
// // import Typography from '@mui/material/Typography';
// import FiberManualRecordOutlinedIcon from '@mui/icons-material/FiberManualRecordOutlined';
// import DeviceThermostatOutlinedIcon from '@mui/icons-material/DeviceThermostatOutlined';
// import Slider from '@mui/material/Slider';
import WindPowerOutlinedIcon from '@mui/icons-material/WindPowerOutlined';
import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import { useTranslation } from 'react-i18next';

function valuetext(value) {
  return `${value}°C`;
}




export default function Wind({number1, number2, language}) {
const {t} = useTranslation();
  const card = (
  <React.Fragment>
    <CardContent>
        <Grid container spacing={2} style={{background:'', marginTop:'15px', }}>
          <Grid size={4} style={{background:''}}>
            <Stack  style={{background:'', height:'100%'}} spacing ={1}>
                <Typography gutterBottom sx={{ color: 'rgba(199, 196, 196, 0.7)', fontSize: 12 ,display:'flex', }}>
        <WindPowerOutlinedIcon sx={{ marginInlineEnd:'7px'}}/> {t('WIND')} 
      </Typography>
      <Box sx={{ display: 'flex', alignItems: 'left', justifyContent: '' }}>   
        <Typography variant="h4" component="div" style={{alignItems:'',display:'flex',alignItems:'center',justifyContent:'center',marginTop:'15px'}}>{number1}</Typography> 
        <Stack direction={'column'} spacing={1} sx={{marginTop:'15px'}}>
        <Typography variant="h8" component="div" style={{alignItems:'',marginInlineStart:'8px', color: 'rgba(199, 196, 196, 0.7)',}}>MPH</Typography> 
        <Typography variant="h8" component="div" style={{alignItems:'',marginInlineStart:'8px'}}>{t('WIND')}</Typography>
        </Stack>
        
       </Box>
       <hr style={{color:'white'}}/>
       <Box sx={{ display: 'flex', alignItems: 'left', justifyContent: '' }}>   
        <Typography variant="h4" component="div" style={{alignItems:'',display:'flex',alignItems:'center',justifyContent:'center',marginTop:'15px'}}>{number2}</Typography> 
        <Stack direction={'column'} spacing={1} sx={{marginTop:'15px'}}>
        <Typography variant="h8" component="div" style={{alignItems:'',marginInlineStart:'8px',color: 'rgba(199, 196, 196, 0.7)',}}>KPH</Typography> 
        <Typography variant="h8" component="div" style={{alignItems:'',marginInlineStart:'8px'}}>{t('WIND')}</Typography>
        </Stack>
       </Box>
                </Stack>
                </Grid>
                <Grid size={8} style={{background:'',display:'flex', justifyContent:'center', alignItems:'center'}}>
                    {/* <ExploreOutlinedIcon fontSize='large'/> */}
                     <img src="/compass.gif" alt="compass" style={{marginTop:'50px'}}/>
                </Grid>
            </Grid>

      
       
            {/* <Typography variant="h6" component="div" style={{}}> Moderate</Typography> 
            <Typography variant="body2"sx={{ color: 'white', fontSize: 6 }}>
            Use sun protection untill 16:00 
            </Typography> */}
    </CardContent>
  </React.Fragment>
);

  return (
    <Card variant="outlined" sx={{ flex: 1, marginTop:'10px', minHeight: '70%',background:'rgba(0, 0, 0, 0.87)', color:'white', borderBottomColor:'black', borderRadius:'15px' }}>
      {card}
    </Card>
  );
}
