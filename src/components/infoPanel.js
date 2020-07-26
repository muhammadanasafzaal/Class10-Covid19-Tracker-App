import React, {useEffect, useState} from 'react';
/* import { makeStyles } from '@material-ui/core/styles'; */
/* import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
 */
import GlobalStats from './GlobalStats'
import AllCountries from './AllCountries'

export default function InfoPanel({currentScreen}){
    if (currentScreen === 0){
      return <GlobalStats/>
    }
    else if(currentScreen === 1){
      return <AllCountries/>
    }
    else if(currentScreen === 2){
      alert('This is third condition');
    }
    else alert("Nothing");
}