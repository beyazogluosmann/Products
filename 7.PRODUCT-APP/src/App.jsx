import { useState } from 'react'
import './App.css'
import Header from './Header'
import { products } from './data'
import Product from  './Product'
import './css/Product.css'


function App() {
  
  return (
   
      <div>
       <Header/>
       <div className = 'product-main'>
       {
        products?.map((product) =>(
          <Product key = {product.id} product={product} />
        ))
       }
       </div>
      </div>
     
    
  )
}

export default App
