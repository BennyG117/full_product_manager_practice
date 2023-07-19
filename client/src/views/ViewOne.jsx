import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import axios from "axios";

import {Link} from 'react-router-dom'

const ViewOne = () => {

    const {id} = useParams();

    const [oneProduct, setOneProduct] = useState ([]);

    const getOneProduct = ( ) => {
        axios.get(`http://localhost:8080/api/products/${id}`)
        .then(res => setOneProduct(res.data))
        .catch(err=> console.log(err))
    }

useEffect(getOneProduct, []);


    return (
    <div>
        {
            oneProduct ?
<>
        <h2>Name of product: {oneProduct.title}</h2>
        <h2>Price of product: ${oneProduct.price}</h2>
        <h2>Description of product: {oneProduct.description}</h2>
        
</>
    :
    <p>LOADING One Product...</p>
    }
    <Link to={`/edit/${oneProduct._id}`}>
    <button>Edit {oneProduct.title}</button>
    </Link>
</div>
)
}

export default ViewOne