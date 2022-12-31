import React from 'react'
import { Container } from 'react-bootstrap'
import './Header.css'
function Header() {
  return (
    <header>
<Container>
    <div className='col-6 content' id='home'>
    
        <h1>Good food choices are good investments.</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
             Etiam et purus a odio finibus bibendum amet leo.</p>
        <button className='frist'>order now</button>     
        <button className='last'>learn more</button>     
    </div>
    <div className='col-6'>
    </div>
    </Container>
    </header>
   
  )
}
export default Header