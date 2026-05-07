


import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import QueryBuilderIcon from '@mui/icons-material/QueryBuilder';
import DetailesCArd from './DetailesCard';
import Stack from '@mui/material/Stack';
import { useTranslation } from 'react-i18next';






export default function TodayDetailes({children, title}) {
  // console.log('childddddd', children)
const { t, i18n } = useTranslation();
const card = (
  <React.Fragment>
    <CardContent style={{background:''}}>
      <Typography variant="h5" component="div"  sx={{  marginInlineStart:'5px', color: 'rgba(199, 196, 196, 0.7)', fontSize: 14 , display:"flex", aligenItems:"center"}}>
        <QueryBuilderIcon style={{marginInlineEnd:'3px'}}/> {t(title)}
      </Typography>
      <hr style={{color:'blue'}}/>
      <Divider sx={{color:'blue'}}/>
      <div style={{alignItems:'center', display:'flex', flexDirection:'row',overflowX:'auto',  }}>
      
      {children}
      </div>
    
    </CardContent>
   
  </React.Fragment>
);

  return (
    <Box sx={{ minWidth: 275, background:'', borderRadius:'15px' }}>
      <Card variant="outlined" sx={{background:'rgba(0,0,0,0.7)', marginTop:'5px',borderRadius:'15px'}}>{card}</Card>
    </Box>
  );
}
