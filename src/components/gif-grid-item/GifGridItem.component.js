import React from 'react';
import './GifGridItem.component.css';
export const GifGridItem = (img) => {
    return (
        <div className="card animate__animated animate__fadeIn">
            <img src={img.images} alt={img.title} />
            <p>{img.title}</p>
        </div>
    )
}
