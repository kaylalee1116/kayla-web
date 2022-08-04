import React from 'react'
import resume from '../../assets/resume.pdf'

const CTA = () => {
  return (
    <div className='cta'>
        {/* change first one to embedded link? */}
        <a href={resume} download className='btn'>Download Resume</a> 
        <a href="#contact" className='btn btn-primary'>Want to reach out?</a>
    </div>
  )
}

export default CTA