import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from './components/ProductCard';
import './styles.scss';
import { makeRequest } from '../../core/utils/request';
import { ProductsResponse } from '../../core/models/Product';

const Catalog = () => {

    const [productsResponse, setProductsResponse] = useState<ProductsResponse>();
   
    useEffect(() => {
        const params = {
            page: 0,
            linesPerPage: 12
        }
    makeRequest({ url: '/products', params })
       .then(response => setProductsResponse(response.data))
    }, []);

    return (
        <div className="container custom-container">
        <div className="title">
            <h4>Pesquisar</h4>
        </div>
        <div className="products-list">
           {
               productsResponse?.content.map(product => (
                <Link to={`/products/${product.id}`} className="btn-link" key={product.id}>
                    <ProductCard product={product}/>
                </Link>
               ))
           }
        </div>
    </div>
    )
}

export default Catalog;