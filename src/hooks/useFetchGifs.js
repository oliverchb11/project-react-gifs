import { useState, useEffect } from "react"
import { getGifs } from '../services/getGifs.service';
export const useFechGifs = (category) => {
    const [state, setState] = useState({
        data: [],
        loading: true
    });

    useEffect(() => {
        getGifs(category).then((data) => {
            setState({
                data,
                loading: false
            })
        });
    }, [category])

    return state;
}