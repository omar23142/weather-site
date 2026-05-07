
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
import FiberManualRecordOutlinedIcon from '@mui/icons-material/FiberManualRecordOutlined';
import DeviceThermostatOutlinedIcon from '@mui/icons-material/DeviceThermostatOutlined';
import Slider from '@mui/material/Slider';
import { useTranslation } from 'react-i18next';

function valuetext(value) {
  return `${value}°C`;
}

export default function UvIndex({number, language = 'en'}) {
  const { t } = useTranslation();
const card = (
  <React.Fragment>
    <CardContent>
      <Typography gutterBottom sx={{ color: 'rgba(199, 196, 196, 0.7)', fontSize: 12 ,display:'flex'}}>
        <DeviceThermostatOutlinedIcon/> {t('UV INDEX')}
      </Typography>
      <Box sx={{ display: 'flex', alignItems: 'left', justifyContent: '' }}>
        <Typography variant="h6" component="div" style={{alignItems:''}}> {number}</Typography> 
        {/* <FiberManualRecordOutlinedIcon sx={{fontSize:'small', marginBottom:'40px', color:'white'}}/> */}
        {/* <FiberManualRecordOutlinedIcon fontSize='small'/> */}
            </Box>
            <Typography variant="h6" component="div" style={{}}> {t('Moderate')}</Typography> 
             <Slider
        dir={language === 'ar' ? 'rtl' : 'ltr'}
        sx={{  transform: language === 'ar' ? 'scaleX(-1)' : 'scaleX(1)'}}
        aria-label="Temperature"
        defaultValue={30}
        getAriaValueText={valuetext}
        color="white"
      />


      <Typography variant="body2"sx={{ color: 'white', fontSize: 6 }}>
        Use sun protection untill 16:00 
      </Typography>
    </CardContent>
  </React.Fragment>
);

  return (
    <Card variant="outlined" sx={{ flex: 1, marginTop:'10px', minHeight: '70%',background:'rgba(0, 0, 0, 0.87)', color:'white', borderBottomColor:'black', borderRadius:'15px' }}>
      {card}
    </Card>
  );
}
