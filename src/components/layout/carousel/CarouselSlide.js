import React from 'react';
import Carousel from 'react-material-ui-carousel'
import {Paper, Button, CardActionArea, CardMedia} from '@material-ui/core'
import {img} from '../../../assets/images/PPROM03.png'
import {img2} from '../../../assets/images/PPROM04.png'

function CarouselSlide(props)
{
    var items = [
        {
            image : img
        },
        {
            image : img2
        }
    ]
 
    return (
        <Carousel>
            {
                items.map( (item, i) => <Item key={i} item={item} /> )
            }
        </Carousel>
    )
}
 
function Item(props)
{
    return (
        <Paper>
            <Button className="CheckButton">
                Check it out!
            </Button>
        </Paper>
    )
}

export default CarouselSlide;