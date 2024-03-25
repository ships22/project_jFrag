import React from 'react'
import styles from './newproduct.module.css'
// {
//     id: 4,
//     name: 'Nuit de noel',
//     description: 'Eau de perfum',
//     category: 'Unisex',
//     size: '100ml',
//     price: 65,
//     photo: nuit,
//   }
export const NewProduct = ({ product }) => {
  const { id, name, description, category, size, price, photo } = product
  return (
    <div className={styles.new_cart_item}>
      <figure>
        <section>
          <h4>Nouveauté</h4>
          <figcaption>{name}</figcaption>
          <p>{description}</p>
          <p>
            <span>{category}</span>
            <span>{size}</span>
          </p>
          <p>{price}€</p>
        </section>
        <img src={photo} alt='Perfum' />
      </figure>
    </div>
  )
}
