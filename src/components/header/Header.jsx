import React from 'react'
import './header.css'
import CTA from './CTA'
import HeaderSocials from './HeaderSocials'
import Typist from 'react-typist'
import 'react-typist/dist/Typist.css'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
      <Typist avgTypingDelay={120} className='type' cursor={{show: false}}>
          <h1>hello world</h1>
          <h1>
            {"It's me, "}
            <span className='my__name'>Kayla</span>
            {" :)"}
          </h1>
      </Typist>



        
        {/* <CTA /> */}
        <HeaderSocials />

        {/* <div className="me">
          <img src={generic} alt="" />
        </div> */}
      </div>
    </header>
  )
}

export default Header