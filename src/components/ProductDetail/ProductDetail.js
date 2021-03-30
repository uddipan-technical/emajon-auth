import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Product from '../Product/Product';

const ProductDetail = () => {
    const {productKey} = useParams();
    const [product, setProduct] = useState({});

// fake data bad diye server site tekhe data load
//useEffect add kore fakeData line guli bad hoyese
    useEffect( () => {
       fetch('http://localhost:5000/product/'+ productKey)
       .then(res => res.json())
       .then(data => setProduct(data));
    }, [productKey])


    //const product = fakeData.find(pd => pd.key === productKey);
    
    return (
        <div>
            <h1>Your Product Details.</h1>
            <Product showAddToCart={false} product={product}></Product>
        </div>
    );
};

export default ProductDetail;