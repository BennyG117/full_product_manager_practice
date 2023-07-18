import React, {useState, useEffect} from 'react';
import New from './New';
import axios from "axios";

import {Link} from 'react-router-dom'

const Dashboard = () => {
  
    const[products, setProducts] = useState([]);

    const fetchAllProducts = () => {
        axios.get("http://localhost:8080/api/products")
        // .then(res=>console.log(res))
        // .catch(err=>console.log(err))

        .then(res => setProducts(res.data))
        .catch(err=> console.log(err))
    };

    useEffect(fetchAllProducts, []);

    //TODO: need delete function & then re-route to dashboard list to show it's deleted
    // const handleDelete = (id) => {
    //     axios.delete(`http://localhost:8080/api/products/${id}`)
    //     .then(res => fetchAllProducts())

    //     .catch(err=>console.log(err))
        
    // }





// use below to view conole inspect*    
// console.log(products);


    return (
        <div>
            <New/>
        {
            products.length > 0? 
            //when using .map below we have to includes key={key} in the return
            products.map((product,key) =>{
                return ( 
                <Link  to={`/viewOne/${product._id}`} key={key}><h2 >{product.title} | <button >Delete</button></h2></Link> 
                // | {product.description} | ${product.price.toFixed(2)}

                // ${product.price.$numberDecimal}
                // return <h2 key={key}>{product.title}</h2>
            )})
            :
            <p>LOADING...</p>
        }
    </div>
  )
}


export default Dashboard