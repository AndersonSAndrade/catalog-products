import React from 'react';
import './styles.scss';
import PriceProducts from '../PriceProduct';
import { Product } from 'core/models/Product';

type Props = {
    product: Product;
}

const ProductCard = ({product}: Props) => (

    <div className="card custom-card">
        <div className="card-body">
            <img src={product.imgUrl} alt={product.name} className="product-card-image"/>
            <p className="product-title">{product.name}</p>
             <PriceProducts prices={product.price}/>
        </div>
    </div>

)

export default ProductCard;