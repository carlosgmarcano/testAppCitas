import React, {useState} from 'react'
import CarouselSlide from './layout/carousel/CarouselSlide';

export const Favoritos = () => {
    return (
            <div>
                <CarouselSlide
                    next={ (next, active) => console.log(`we left ${active}, and are now at ${next}`)}
                    prev={ (prev, active) => console.log(`we left ${active}, and are now at ${prev}`)}
                ></CarouselSlide>
            </div>
        )
}


