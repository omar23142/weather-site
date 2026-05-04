



import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import QueryBuilderIcon from '@mui/icons-material/QueryBuilder';
import FiberManualRecordOutlinedIcon from '@mui/icons-material/FiberManualRecordOutlined';
import CloudySnowingIcon from '@mui/icons-material/CloudySnowing';
import Stack from '@mui/material/Stack';
import { useState } from 'react';

export default function DetailesCard({hour='NOW', temp=28,weatherState='',date, selected, icon}) {
  // console.log('icon', icon)
    const [dateDis, setDateDis] = useState(false);
    // console.log('selectedddd', selected)
    // console.log('ttttttttt', `${selected} ? white : transparent`)
    // console.log('date', date)
    function DateDisplay() {
        if(date)
            {
                setDateDis(true);
                return <p style={{marginLeft:'6px', color: 'rgba(228, 211, 211, 0.4)'}}>{date}</p>}
        return null }

    // console.log('hour', hour)
    let weatherIcon = <CloudySnowingIcon fontSize='large' style={{marginLeft:'5px', marginTop:'-20px', background:''}}/>
    const card = (
  <React.Fragment>
    <CardContent style={{borderRadius:'15px',background:'', }}>
        <Stack spacing={0}>
      <Typography variant="h5" component="div"  sx={{color:'white', marginLeft:'10px', fontSize: 14 , display:"flex", aligenItems:"center"}}>
        {hour}
         
        
      </Typography>
       <DateDisplay/> 
      {/* <p>{date}</p> */}
      <Typography variant="h6" component="div"  sx={{background:'', color:'white', marginLeft:'10px', fontSize: 20 , display:"flex", aligenItems:"center",marginBottom:'none'}}>
        {temp} <FiberManualRecordOutlinedIcon sx={{fontSize:'small', marginBottom:'40px', color:'white'}}/>
      </Typography>
      <img src={icon} alt='' style={{marginLeft:'5px', marginTop:'-20px', background:''}} />
       {/* {weatherIcon} */}
        

        </Stack>
        
      
      
    </CardContent>
   
  </React.Fragment>
);
  return (
    <Box  style={{borderRadius:'15px',background:''}}>
      <Card variant="outlined" sx={{
    color:'white',
    background: selected ? 'rgba(255, 255, 255, 0.3)' : 'transparent',
    borderRadius: '15px',
    justifyContent: 'center',
    display: 'flex',
    alignItems: 'center',
    width:'100px',
    '&:hover': {
      background: 'rgba(255, 255, 255, 0.3)',
      transform: 'translateY(-4px)',
      boxShadow: '0 8px 25px rgba(214, 209, 209, 0.3)',
      borderColor: 'rgba(0, 0, 0, 0.89)',
      transition: 'all 0.3s ease-in-out',
      cursor: 'pointer',
    },
  }}>{card}</Card>
    </Box>
  );
}
