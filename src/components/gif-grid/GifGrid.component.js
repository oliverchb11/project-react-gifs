import React from 'react';
import {GifGridItem} from '../gif-grid-item/GifGridItem.component';
import './GifGrid.component.css';
import { useFechGifs } from '../../hooks/useFetchGifs';
export const GifGrid = ({category}) => {

   const {data, loading} = useFechGifs(category)



    return (
            <>
            <h3>{category}</h3>
            {loading && <p>Loading...</p> }
            <div className="card-grid">
            {data.map((img) => (
                <><GifGridItem key={img.id} {...img} /></>
            )
            )}
        </div></>
    )
}
