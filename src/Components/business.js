import { Typography, ListItem, Avatar, ListItemText, ListItemAvatar, Divider, Rating, Grid, Button } from "@mui/material";
import * as React from "react";
import '../App.css';
import { convertDistance, getDistance } from 'geolib';
import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';


const Business = ({data, id}) => {

    const [lat, setLat] = useState();
    const [long, setLong] = useState();
    const [distance, setDistance] = useState();

    const nav = useNavigate();

    useEffect(() => {
        function success(position){
            const lat = position.coords.latitude;
            const long = position.coords.longitude;
            
            setLat(lat);
            setLong(long);

        }
        window.navigator.geolocation.getCurrentPosition(success, console.log);
    },[]);
    const goToBusiness = (data) => {
        nav('/business', {state: {data}});
    }

    function calcDistance(bLat, bLong){

        console.log(lat);
        console.log(long);

        const dist = getDistance(

            {latitude: lat, longitude: long},
            {latitude: bLat, longitude: bLong}
            // { latitude: this.state.data[1].lat, longitude: this.state.data[1].long}
        );


        const cov = convertDistance(dist, 'mi');
        console.log(Math.round(cov * 100) / 100);
        const newCov = parseFloat(cov).toFixed(2);
        setDistance(newCov);

        return distance;
    }


    return (
        <div>
            <ListItem alignItems="flex-start" sx={{ placeContent: 'center center' }} >
                
                <ListItemAvatar sx={{ alignSelf: 'center', width: 80}} onClick={() => goToBusiness(data[id])}>
                    <Avatar alt="Remy Sharp" src={data[id].icon} sx={{width: 56, height: 56}}/>
                </ListItemAvatar>
                <div className="cont">
                <ListItemText
                primary={
                    <React.Fragment>
                        <Typography
                         sx={{ fontSize: 24 }}
                         component='span'
                         varient='h4'
                         color='text.primary'
                        >
                            {data[id].name}
                        </Typography>
                    </React.Fragment>
                }
                />
                <ListItemText >
                        <Grid container spacing={1}>
                            <Grid item xs={4}>
                                <Typography
                                sx={{ display: 'inline', mr: 3}}
                                component='div'
                                varient='body2'
                                color="text.secondary"
                                >
                                    {" Phone: " + data[id].phone}
                                </Typography>

                            </Grid>
                            <Grid item xs={4}>
                                <Typography
                                sx={{ display: 'inline', mr: 3}}
                                component='div'
                                varient='body2'
                                color="text.secondary"
                                >
                                    {" Address: " + data[id].address}
                                </Typography>
                            </Grid>
                            <Grid item xs={4} sx={{ display: 'flex'}}>
                                <Typography
                                sx={{ display: 'inline' }}
                                component='div'
                                varient='body2'
                                color="text.secondary"
                                >
                                    {" Rating: "}
                                </Typography>
                                <Rating name="read-only" value={data[id].rating} readOnly/>
                            </Grid>
                        </Grid>
                </ListItemText>
                </div>
            </ListItem>
            <ListItem sx={{ placeContent: 'center center', flexDirection: 'column'}} >

                <Button onClick={() => calcDistance(data[id].lat, data[id].long)} varient="contained">Get Distance</Button>
                <Typography
                sx={{ display: 'inline', fontWeight: 'bold', pr: '8px'}}
                component='div'
                varient='body2'
                color="text.primary"
                >
                    {"Distant from Business: "}
                </Typography>
                <Typography
                sx={{ display: 'inline'}}
                component='div'
                varient='body2'
                color="text.secondary"
                >
                    {(distance === undefined ? '' : distance + ' miles away')}
                </Typography>
            </ListItem>
            <Divider />

        </div>

    )
}

export default Business;