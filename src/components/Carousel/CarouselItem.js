import React from 'react'
import classes from './carousel.module.css'

export default function CarouselItem() {
  return (
    <div className='container'>
      <div className={classes.slide}>
        <div className={classes.slide__info}>
          <h2 className={classes.slide__heading}>Samsung telefoni siz uchun arzon narxda !!!</h2>
          <p className={classes.slide__text}>Naqd:3.200.000</p>
        </div>
        <img className={classes.slide__img} src="https://picsum.photos/300" alt="img" />
      </div>
    </div>
  )
}
