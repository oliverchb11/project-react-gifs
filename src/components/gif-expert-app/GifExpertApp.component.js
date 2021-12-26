import React, {useState} from 'react';
import { AddCategory } from '../add-category/AddCategory.component';
import { GifGrid } from '../gif-grid/GifGrid.component';


export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Oliver']);

    return(
        <>
        <AddCategory setCategories={setCategories} />
        <h2>GifExpertApp</h2>

        <hr/>
            <ol>
                {
                    categories.map((category) => 
                    <GifGrid key={category} category={category}/>
                    )
                }
            </ol>
        </>
    )
}