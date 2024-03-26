import React from 'react'
import { PromoProduct } from './promoproduct/PromoProduct'
import dramatic from '../../../assests/newProducts/dramatic_desert_1.png'
import desert from '../../../assests/newProducts/desert_night_1.png'
import lilium from '../../../assests/newProducts/lilium_sweet_sand_1.png'
import nuit from '../../../assests/newProducts/nuit_de_noel_1.png'
import styles from './promoproducts.module.css'
const newProducts = [
  {
    id: 1,
    name: 'Dramatic desert',
    description: 'Eau de perfum',
    category: 'Unisex',
    size: '100ml',
    price: 59,
    photo: dramatic,
  },
  {
    id: 2,
    name: 'Desert night',
    description: 'Eau de perfum',
    category: 'Unisex',
    size: '100ml',
    price: 65,
    photo: desert,
  },
  {
    id: 3,
    name: 'Lilium',
    description: 'Eau de perfum',
    category: 'Unisex',
    size: '100ml',
    price: 79,
    photo: lilium,
  },
  {
    id: 4,
    name: 'Nuit de noel',
    description: 'Eau de perfum',
    category: 'Unisex',
    size: '100ml',
    price: 65,
    photo: nuit,
  },
]
export const PromoProducts = () => {
  return (
    <div className={styles.cart_container}>
      <h3>en promotion</h3>
      <div className={styles.cart}>
        <section className={styles.cart_items}>
          <PromoProduct product={newProducts[0]} />
          <PromoProduct product={newProducts[1]} />
          <PromoProduct product={newProducts[2]} />
          <PromoProduct product={newProducts[3]} />
        </section>
      </div>
    </div>
  )
}
