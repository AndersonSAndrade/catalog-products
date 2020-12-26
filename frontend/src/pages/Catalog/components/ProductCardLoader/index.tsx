import React from "react"
import ContentLoader from "react-content-loader"
import { generatedList } from "core/utils/list";

const ProductCardLoader = () => {
  const loaderItems = generatedList(5);
  return (
    <>
       {
         loaderItems.map(item => (
          <ContentLoader  speed={1} width={250} height={347} viewBox="0 0 250 347" backgroundColor="#FAFAFA" foregroundColor="#ECEFF1" >
               <rect x="0" y="0" rx="10" ry="10" width="250" height="347" />
          </ContentLoader>
         ))
       }
    </>
  )
}

export default ProductCardLoader
