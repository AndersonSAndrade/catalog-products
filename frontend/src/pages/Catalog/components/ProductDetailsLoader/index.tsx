import React from "react"
import ContentLoader from "react-content-loader"

const ProductDetailsLoader = () => (
  <ContentLoader 
  speed={2}
  width={1008}
  height={460}
  viewBox="0 0 1008 460"
  backgroundColor="#FAFAFA"
  foregroundColor="#ECEFF1"
>
 
  <rect x="0" y="60" rx="2" ry="2" width="420" height="355" /> 
  <rect x="449" y="63" rx="2" ry="2" width="182" height="13" /> 
  <rect x="449" y="90" rx="2" ry="2" width="182" height="13" /> 
  <rect x="449" y="116" rx="2" ry="2" width="550" height="13" /> 
  <rect x="449" y="141" rx="2" ry="2" width="550" height="13" /> 
  <rect x="449" y="168" rx="2" ry="2" width="550" height="13" /> 
  <rect x="449" y="194" rx="2" ry="2" width="550" height="13" /> 
  <rect x="449" y="220" rx="2" ry="2" width="550" height="13" /> 
  <rect x="449" y="250" rx="2" ry="2" width="550" height="13" />
</ContentLoader>
)

export default ProductDetailsLoader
