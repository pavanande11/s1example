import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import MovieIcon from '@mui/icons-material/Movie';
import SearchIcon from '@mui/icons-material/Search';
import TvIcon from '@mui/icons-material/Tv';
import { useNavigate } from 'react-router-dom';

export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);
  const history = useNavigate()
React.useEffect(() =>{
  if(value === 0) {
    history('/')
  }else if(value === 1){
    history('/movies')
  }else if(value === 2){
    history('/series')
  }
  else{
    history('/search')
  }
},[value,history])


  return (
    <Box sx={{ width: '100%' }}>
      <BottomNavigation
        showLabels
        style={{
            width:'100%',
            position:'fixed',
            bottom: 0,
            backgroundColor:"#33fd34",
            zIndex:100
        }}
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction label="Trending" style={{color:'white'}}icon={<WhatshotIcon />} />
        <BottomNavigationAction label="Movies" style={{color:'white'}} icon={<MovieIcon />} />
        <BottomNavigationAction label="Tv Shows" style={{color:'white'}} icon={<TvIcon />} />
        <BottomNavigationAction label="Search" style={{color:'white'}} icon={<SearchIcon />} />
      </BottomNavigation>
    </Box>
  );
}