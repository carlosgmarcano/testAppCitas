import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { CardMedia, CardActions } from '@material-ui/core'

function CarouselSlide() {
    var items = [
        {
            id: 3,
            url: `${process.env.PUBLIC_URL}/images/PPROM03.png`,
            name: 'Breakfast',
            width: '100%'
        },
        {
            id: 2,
            url: `${process.env.PUBLIC_URL}/images/PPROM05.png`,
            name: 'Breakfast',
            width: '100%',

        },
        {
            id: 1,
            url: `${process.env.PUBLIC_URL}/images/PPROM08.png`,
            name: 'Breakfast',
            width: '100%',

        },
    ]

    return (
        <Carousel indicators={false} >
            {
                items.map((item, i) => <Item key={i} item={item} />)
            }
        </Carousel>
    )
}

function Item(props) {
    return (
        <CardActions>
            <CardMedia
                component="img"
                alt={props.item.name}
                height="auto"
                image={props.item.url}
                title={props.item.name}
            />
        </CardActions>
    )
}

export default CarouselSlide;