import { Typography, Box, Grid, List } from "@mui/material";
import React from "react";
import Business from "./business";

class Landing extends React.Component {
    state = {
        data: [
            {
                id: 0,
                name: "Chic-Fil-a",
                address: '4627 W Partridge Hill Ln, Riverton, UT 84096',
                rating: 5,
                img: "/images/chik-main.png",
                phone: '(801) 456-782',
                icon: '/images/chick-fil-a-avatar.png',
                lat: 40.508630,
                long: -112.000630
            },
            {
                id: 1,
                name: "Wendys",
                address: '929 Yellowstone Ave, Pocatello, ID 83201',
                rating: 3,
                img: "/images/Wendys-Emblem.png",
                phone: '(801) 567-8764',
                icon: '/images/wendys-avatar.png',
                lat: 42.892510,
                long: -112.451840
            },
            {
                id: 2,
                name: "Walmart",
                address: '75-1015 Henry St, Kailua-Kona, HI 96740',
                rating: 4,
                img: "/images/Walmart-Logo.png",
                phone: '(801) 567-8764',
                icon: '/images/walmart-icon.png',
                lat: 19.645460,
                long: -155.990295
            }
        ]
    };


    componentDidMount(){

    }
    
    
    render() { 
        const newData = this.state.data;

        return (
            <Box sx={{ width: '100%', mt: 3,  }}>
                <Grid
                    container
                    direction="column"
                    justifyContent='center'
                    alignItems='center'
                >
                    <Typography variant="h4" componet='div' gutterBottom>
                        Businesses
                    </Typography>
                    <List sx={{ width: '100%', bgColor: 'background.paper' }}>
                        {newData.map((nw, type) => (
                                <Business data={newData} id={type} key={type}/>
                        ))}
                    </List>
                </Grid>
            </Box>
        );
    }
}
 
export default Landing;