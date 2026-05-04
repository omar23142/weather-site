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
import WaterDropOutlinedIcon from '@mui/icons-material/WaterDropOutlined';
import OpacitySharpIcon from '@mui/icons-material/OpacitySharp';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';



export  function OutlinedCard({icon, title, number, detailes, sx, extradetailes}) {

  let initIcon = <DeviceThermostatOutlinedIcon sx={{ marginLeft: '5px' }} />
  if(title === 'precipitation')
    initIcon = <WaterDropOutlinedIcon sx={{ marginLeft: '5px' }}/>
  else if (title === 'humidity') 
    initIcon = <OpacitySharpIcon sx={{ marginLeft: '5px' }}/>
  else if (title === 'visibility') 
    initIcon = <VisibilityOutlinedIcon sx={{ marginLeft: '5px' }}/>
  const card = (
  <React.Fragment>
    <CardContent>
      
      <Typography gutterBottom sx={{ color: 'rgba(199, 196, 196, 0.7)', fontSize: 16 , marginRight:'40px',marginLeft:'-8px', display:'flex',justifyContent:'flexStart'}}>
       {/* <DeviceThermostatOutlinedIcon sx={{ marginLeft: '5px' }} /> */}
       {initIcon}
        {icon} {title} </Typography>
      <Box sx={{ display: 'flex', alignItems: '', justifyContent: '' }}>
        <Typography variant="h5" component="div" sx={{ fontFamily:'mogra'}}>  {number} </Typography> 
        { title === 'feels like' && <FiberManualRecordOutlinedIcon sx={{fontSize:'small', marginBottom:'40px', color:'white'}}/>}
        {/* <FiberManualRecordOutlinedIcon fontSize='small'/> */}
            </Box>
      <Typography variant="body2"sx={{ color:'rgba(199, 196, 196, 0.7)', fontSize: 10,alignItems:'left',display:'flex',justifyContent:'flexStart' }}>
         {detailes}
      </Typography>
      <Typography variant="body2"sx={{ color:'rgba(199, 196, 196, 0.7)', fontSize: 10,alignItems:'left',display:'flex',justifyContent:'flexStart'}}>
         {extradetailes}
      </Typography>
    </CardContent>
  </React.Fragment>
);


  return (
    <Card variant="outlined" sx={{ width: '100%', minHeight: '150px', background:'rgba(0,0,0,0.4)', color:'white', borderBottomColor:'black',
      borderRadius:'15px', justifyContent:'left', ...sx }}>
      {card}
    </Card>
  );
}
