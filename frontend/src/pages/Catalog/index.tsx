import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from './components/ProductCard';
import './styles.scss';
import { makeRequest } from '../../core/utils/request';
import { ProductsResponse } from '../../core/models/Product';
import ProductCardLoader from './components/ProductCardLoader';

const Catalog = () => {

    const [productsResponse, setProductsResponse] = useState<ProductsResponse>();
    const [isLoading, setIsLoading] = useState(false)
   
    useEffect(() => {
        const params = {
            page: 0,
            linesPerPage: 12
        }
    setIsLoading(true)
    makeRequest({ url: '/products', params })
       .then(response => setProductsResponse(response.data))
       .finally(() => {
           setIsLoading(false)
       })
    }, []);

    return (
        <div className="container custom-container">
        <div className="title">
            <h4>Pesquisar</h4>
        </div>
        <div className="products-list mt-5">
            {
                isLoading ? <ProductCardLoader/> : (
                    productsResponse?.content.map(product => (
                        <Link to={`/products/${product.id}`} className="btn-link mb-5" key={product.id}>
                            <ProductCard product={product}/>
                        </Link>
                       ))
                )
            }
           
        </div>
    </div>
    )
}

export default Catalog;