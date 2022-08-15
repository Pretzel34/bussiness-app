import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Grid, Rating, Alert } from '@mui/material';
import {useLocation} from 'react-router-dom';
import { useState, useEffect } from "react";



const BusinessList = () => {
    const location = useLocation();
    const locState = location.state.data;

    const [rating, setRating] = useState(0);
    const [bool, setBool] = useState(false);

    useEffect(() => {
        setRating(locState.rating);
    },[]);

    const handleRatingChange = () => {
        if (bool === true) return <Alert severity='success'>Your rating has been changed!</Alert>;            
        
    }

    return(
        <Grid container spacing={1} sx={{ placeContent: 'center center'}}>
            <Grid item xs={10} sx={{mt: 10}}>
                <Card sx={{ maxWidth: 600}}>
                    <CardActionArea>
                        <CardMedia
                        component="img"
                        height='auto'
                        image={locState.img}
                        alt='bussiness image'
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h4" component="div">
                                { locState.name}
                            </Typography>
                            <Typography variant='body2' color="text.secondary">
                                {'Phone: ' + locState.phone}
                            </Typography>
                            <Typography variant='body2' color="text.secondary">
                                {' Address: ' + locState.address}
                            </Typography>
                            <Typography variant='body2' color="text.secondary">
                                {' Rating: '}
                            </Typography>
                            <Rating 
                             name='rating'
                             value={rating}
                             onChange={(event, newValue) =>{
                                setRating(newValue);
                                setBool(true);
                             }}
                             />
                             {handleRatingChange()}
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Grid>
        </Grid>

    )
}

export default BusinessList;