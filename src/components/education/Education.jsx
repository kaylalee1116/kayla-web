import React from 'react'
import './education.css'
import {MdOutlineCheckBoxOutlineBlank, MdOutlineCheckBox} from 'react-icons/md'

const Education = () => {
  return (
    <section id='education'>
      <h2>My Education</h2>

      <div className='container education__container'>
        <div className="education__school">
          <h2>
            University Coursework
          </h2>
          <div className="education__content">
            <article className='education__details'>
              <MdOutlineCheckBox className='education__details-icon'/>
              <div>
                <h4>EECS 281</h4>
                <small>Data Structures & Algorithms</small>
              </div>
            </article>
            <article className='education__details'>
            <MdOutlineCheckBox className='education__details-icon'/>

              <div>
                <h4>EECS 298</h4>
                <small>Computational Machine Learning</small>
              </div>
            </article>
            <article className='education__details'>
              <MdOutlineCheckBox className='education__details-icon'/>
              <div>
                <h4>EECS 280</h4>
                <small>Programming/Intro Data Structures</small>
              </div>
            </article>
            <article className='education__details'>
              <MdOutlineCheckBox className='education__details-icon'/>
              <div>
                <h4>EECS 203</h4>
                <small>Discrete Mathematics</small>
              </div>
            </article>
            {/* <article className='education__details'>
              <MdOutlineCheckBox size={20} className='education__details-icon'/>
              <div>
                <h4>EECS 183</h4>
                <small>Intro to Computer Science</small>
              </div>
            </article> */}
            <article className='education__details'>
              <MdOutlineCheckBoxOutlineBlank className='education__details-icon'/>
              <div>
                <h4>EECS 370</h4>
                <small>Computer Organization</small>
              </div>
            </article>
            <article className='education__details'>
              <MdOutlineCheckBoxOutlineBlank className='education__details-icon'/>
              <div>
                <h4>EECS 484</h4>
                <small>Databases</small>
              </div>
            </article>
          </div>
        </div>

        <div className="education__outside">
          <h2>
            Independent Coursework
          </h2>
          <div className="education__content">

            <article className='education__details'>
              <MdOutlineCheckBox className='education__details-icon'/>
              <div>
                <h4>Machine Learning</h4>
                <small>Stanford Coursera Course</small>
              </div>
            </article>
            <article className='education__details'>
              <MdOutlineCheckBox className='education__details-icon'/>
              <div>
                <h4>AI/ML Basics</h4>
                <small>SureStart Curriculum</small>
              </div>
            </article>
            <article className='education__details'>
              <MdOutlineCheckBox className='education__details-icon'/>
              <div>
                <h4>Linear Algebra</h4>
                <small>University of Massachusetts</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Education