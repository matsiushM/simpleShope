import * as React from 'react';
import {Container, Card, ImageList} from '@mui/material';
import ItemCard from "../ImageListItem";
import {useEffect, useState} from "react";


const ItemList = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        const response = fetch('https://api.sampleapis.com/coffee/hot');
        response
            .then(data => data.json())
            .then(items => setData(items))
            .catch(err => console.log(err))
    }, []);

    return (
        <Container>
            <ImageList cols={4}>
                {data.map((item) => (
                    <ItemCard key={item._id} item={item}/>
                ))}
            </ImageList>
        </Container>
    );
}

export default ItemList;