import React from 'react'
import PhoneImg from '../images/phone.svg'
import { useGlobalContext } from './context'

function Hero() {
    const {closeSubmenu} = useGlobalContext()
    
  return (
    <section className='hero' onMouseOver={closeSubmenu}>
      <div className='hero-center'>
        <article className='hero-info'>
            <h1>Welcome to Prudent Group of Schools</h1>
            <p>Prudent Academy (Pri) School is a private primary school in Orlando, Florida.
            This school is run by private individual. It is a day school. This educational institution is a ordinary and mixed type of institution.
            The pupil to classroom ratio in this school is 14.6:1 and the pupil to toilet ratio is 33.3:1. There are total 16 classrooms, 3 boys toilets, 4 girls toilets and 1 teachers toilet. 
            There are 114 boys and 119 girls in Prudent Academy (Pri) School. </p>
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
