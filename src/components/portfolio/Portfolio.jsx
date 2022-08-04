import React from 'react'
import './portfolio.css'
import {BsGithub} from 'react-icons/bs'
import {CgWebsite} from 'react-icons/cg'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h2>My Recent Projects</h2>

      <div className="container portfolio__container">
        <article className='portfolio__item'> {/* TODO: add another link to this website */}
          <a href="https://kaylalee.net/" target='_blank'>
            <BsGithub className='portfolio__item-icon'/>
          </a>
          <h3>Portfolio Website</h3>
          <h5>Created website to display education, work experience, and projects</h5>
          <small>JS, React.js, HTML, CSS</small>
        </article>

        <article className='portfolio__item'>
          <a href="https://recovery.transitmatters.org/" target='_blank'>
            <CgWebsite className='portfolio__item-icon'/>
          </a>
          <h3>Covid Recovery Dashboard</h3>
          <h5>Data visualization of topline statistics of pre-Covid and current ridership/service levels of MBTA (top-most section of dashboard)</h5>
          <small>Python, TS, React.js, Chart.js, HTML, CSS</small>
        </article>

        <article className='portfolio__item'>
        
          <CgWebsite className='portfolio__item-icon' color='#6a4a3a'/>
          
          <h3>JSON to TIFF Conversion</h3>
          <h5>Script to convert brain axon annotation data into tiff format</h5>
          <small>Python</small>
          <h6>*Due to NDA I cannot share this software</h6>
        </article>
        
      </div>
      
    </section>
  )
}

export default Portfolio