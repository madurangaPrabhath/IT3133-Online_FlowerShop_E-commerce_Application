import { useState } from 'react';
import '../assets/CSS/layout.css';

export default function Product({product,addToCart}){
    const [qty,setQty] = useState(1);

    const handleAddToCart=()=>{
        if(qty>0) {
            addToCart(product,qty);
        }
    }
    return(
        <div className="grid-item">
            <div class="card">
                <img  src={require('../assets/image/'+product.img)} alt={product.name}/>
                <div class="card-body">
                    <h5 class="card-title">{product.name} Price: {product.price}</h5>
                    <div class="quantity-container">
                        <label for="quantity">Quantity:</label>
                        <input type="number" id="quantity" name="quantity" onChange={(e)=>setQty(Number(e.target.value))}/>
                    </div>
                    <button class="card-button" onClick={handleAddToCart}>Add to Cart</button>
                </div>
            </div>
        </div>
    );
}