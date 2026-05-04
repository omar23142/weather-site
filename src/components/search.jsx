
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import DirectionsIcon from '@mui/icons-material/Directions';
import AddLocationAltOutlinedIcon from '@mui/icons-material/AddLocationAltOutlined';

export default function SearchInput( {handleInputChange, cityInput, handleSearchClick}) {
  // console.log('handleSearchClickkkkkkkkkk', handleSearchClick)
  return (
    <Paper
      component="form"
      sx={{color:'white', p: '2px 4px', display: 'flex', alignItems: 'center', width: '100%',borderRadius:'10%', background:'rgba(0, 0, 0, 0.68)',  }}
    >
      <IconButton sx={{ p: '10px',color:'white' }} aria-label="menu">
        <AddLocationAltOutlinedIcon />
      </IconButton>
      <InputBase
        sx={{ sm: 1, flex: 1, color:'white' }}
        placeholder="enter your city"
        inputProps={{ 'aria-label': 'search google maps' }}
        value={cityInput.city}
        onChange={(e)=>handleInputChange(e)}
      />
      <IconButton type="button" sx={{ p: '10px', color:'white', }} aria-label="search" value={cityInput.searchClick} 
      onClick={(e)=>{ 
        console.log('in searchIconnnnnnnnnn')
        return handleSearchClick(e)
         }}>
        <SearchIcon style={{background:''}} onClick={(e)=>{}}/>
      </IconButton>
      {/* <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" /> */}
      {/* <IconButton color="primary" sx={{ p: '10px' }} aria-label="directions">
        <DirectionsIcon />
      </IconButton> */}
    </Paper>
  );
}
