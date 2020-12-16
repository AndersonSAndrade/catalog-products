import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ButtomReturn from '../../../../core/components/ButtomReturn';

import './styles.scss';
import PriceProducts from '../PriceProduct';
import { Product } from '../../../../core/models/Product';
import { makeRequest } from '../../../../core/utils/request';

type ParamsType = {
    productId: string
}


const ProductDetails = () => {
    const {productId} = useParams<ParamsType>();
    const [product, setProduct] = useState<Product>();

    useEffect(() => {
    makeRequest({ url: `/products/${productId}` })
       .then(response => setProduct(response.data))
    }, [productId]);


    return (
        <div className="container custom-container">
        <div className="card custom-card w-100">
        <div className="card-body">
            <div className="row mb-5">
                <ButtomReturn text="Voltar"/>
            </div>
           <div className="row">
               <div className="col-5">
                <div className="card">
                    <div className="card-body items-img-product">
                       <img src={product?.imgUrl} alt={product?.name} className="img-product-details"/>
                    </div>
                </div>
                
               </div>
               <div className="col-7">
               <div className="card">
                <div className="card-body">
                    <div className="row">
                    <div className="text-product-details">
                        <div className="ml-2">{product?.name}</div>
                        <div className="ml-2"> { product?.price &&  <PriceProducts prices={product?.price} />}</div>
                    </div>
                    </div>
                    <p className="p-product-details"> {product?.description} </p>
                </div>
                </div>
               </div>
           </div>
        </div>
        </div>
    </div>
    )
}

export default ProductDetails;