import React from 'react';
import './styles.scss';
import { ReactComponent as ProductImage} from '../../../../core/assets/images/computador.svg';

const ProductCard = () => (

    <div className="card custom-card">
        <div className="card-body">
            <ProductImage />
            <p className="product-title">Computador Desktop - Intel Core i7</p>
            <div className="row product-type-items">
                <span className="product-type-price">R$</span>
                <span className="product-type-price-value">2.779,00</span>
            </div>
        </div>
    </div>

)

export default ProductCard;