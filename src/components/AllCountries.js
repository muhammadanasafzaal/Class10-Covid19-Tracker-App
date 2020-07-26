import React, {useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth:1000,
    margin:'0 auto',
    marginTop: 50,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  title: {
    color: '#3f51b5',
    textTransform: 'uppercase'

  },
  table: {
    height: 450,
    overflowY: 'scroll',
    display: 'block'
}
}));

export default function AllCountries() {
  
  const [globalData, setGlobalData] = useState([{}]) //declaring object in usestate bcs we are getting data in object from api
  useEffect(()=>{
    async function getData(){
     const response = await fetch("https://api.thevirustracker.com/free-api?countryTotals=ALL")
     let data = await response.json();
 
     /* delete data.countryitems.source; */
     setGlobalData(Object.values(Object.values(data.countryitems[0]))); //using this to se value of object to display on ui using useState
        console.log(Object.values(Object.values(data.countryitems[0])));
     }
     getData();
 
   },[])
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {/* Grid Display */}
      {/* <Grid container spacing={3}>
        {Object.keys(globalData[0]).map((val,ind)=>{ //jab bhe map use kren to uske sath key zarur define krna chaiye
          return(       //humne globalData mein array number diya hai kyu k hum array return krwana chahte hain isme
            <Grid item xs={12} sm={4} key={ind}>
                <Paper 
                    className={classes.paper} 
                    elevation={3}>
                    <h3 className={classes.title}>
                      {val.replace(/_/g,' ')}
                    </h3>
                    <h3>{globalData[0][val]}</h3>
                    
                </Paper>
            </Grid>
          )
        })}
        
       
      </Grid> */}
      <table className={classes.table}>
        <tr>
          <th>Country</th>
          <th>Total Cases</th>
          <th>Active Cases</th>
        </tr>
        <tbody>
                {globalData.map((val,ind)=>{
              return(
              <tr key={ind}>
                <th className={classes.title}>
                  <h3>{globalData[ind].title}</h3>
                </th>
                
                <td>
                  <h3>{globalData[ind].total_cases}</h3>
                </td>
                <td>
                  <h3>
                    {globalData[ind].total_active_cases}
                  </h3>
                </td>
              </tr>)
              })},
          </tbody>
      </table>
                    
                    
    </div>
  );
}
  