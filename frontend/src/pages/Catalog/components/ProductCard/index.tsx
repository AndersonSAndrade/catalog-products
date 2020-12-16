import React from 'react';
import './styles.scss';
import { ReactComponent as ProductImage} from '../../../../core/assets/images/computador.svg';
import PriceProducts from '../PriceProduct';

type Props = {
    title: string,
    price: string
}

const ProductCard = ({title, price}: Props) => (

    <div className="card custom-card">
        <div className="card-body">
            <ProductImage />
            <p className="product-title">{title}</p>
             <PriceProducts prices={price}/>
        </div>
    </div>

)

export default ProductCard;