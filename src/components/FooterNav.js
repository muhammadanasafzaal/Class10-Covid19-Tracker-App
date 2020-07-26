import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';

const useStyles = makeStyles({
  root: {
   position: 'absolute',
   bottom:0,
   right: 0,
   left: 0,
  },
});

export default function FooterNav({screenConfig}) {
  const classes = useStyles();
  /* const [value, setValue] = React.useState(0); */
    console.log(screenConfig);
  return (
    <BottomNavigation
      value={screenConfig[0]} //yaha just value pass hui hai screenConfig k useState hook ki 
      onChange={(event, newValue) => {
        screenConfig[1](newValue);  //screenConfig k sath [1] islye use kiya hai k useState mein ek value hoti hai aur ek uska func to [1] call krne se hum uska relevant func use kr rahe hain
        /* console.log(newValue); */
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction label="Global Stats" icon={<RestoreIcon />} />
      <BottomNavigationAction label="Country Stats" icon={<FavoriteIcon />} />
      <BottomNavigationAction label="Graphs" icon={<LocationOnIcon />} />
    </BottomNavigation>
  );
}
