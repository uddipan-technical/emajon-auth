import fakeData from '../../fakeData';
import React from 'react';

const Inventory = () => {
    const handleAddProduct = () => {
        fetch('http://localhost:5000/addProduct', {
            method: 'POST',
            headers: {
                'Content-Type':'application/json'
            },
            body:JSON.stringify(fakeData)
        })
    }
    return (
        <div>
        <form>
            <p><span>Name</span><input type="text"/></p>
            <p><span>Price</span><input type="text"/></p>
            <p><span>Quantity</span><input type="text"/></p>
            <p><span>Product img</span><input type="text"/></p>
            <button onClick={handleAddProduct}>Add Product</button>
        </form>
            
        </div>
    );
};

export default Inventory;