import React from 'react'


function Product({ product }) {
    const { id, title, description, price, link, image } = product;
    return (
        <div className='product'>
           
                <img src={image} width={220} height={110} />
                <h4 className='product-title'>{title}</h4>
                <p className='product-des'>{description}</p>
                <h3 className='product-price'>{price}₺</h3>
                <div className='product-link'><a style ={{ textDecoration: 'none'}} href={link}>Satın almak için</a></div>
           
        </div>
    )
}

export default Product
