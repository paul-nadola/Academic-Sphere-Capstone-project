import React from 'react'
import PhoneImg from '../images/phone.svg'
import { useGlobalContext } from './context'

function Hero() {
    const {closeSubmenu} = useGlobalContext()
    
  return (
    <section className='hero' onMouseOver={closeSubmenu}>
      <div className='hero-center'>
        <article className='hero-info'>
            <h1>Welcome to Academic Sphere</h1>
            <p>Academic Sphere is a student management system for schools to keep track of student's and teacher's
              performance, attendance and relevant information and also send relevant information to parents
              with children and/or students they are sponsoring.
                        </p>
            <button className='btn'>Join Us</button>
        </article>
        <article className='hero-images'>
            {/* <img src={PhoneImg} className='phone-img' alt='phone image'/> */}
        </article>
      </div>
    </section>
  )
}

export default Hero
