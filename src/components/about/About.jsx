import React from 'react'
import './about.css'
import me from '../../assets/me.jpg'
import {BiBook} from 'react-icons/bi'
import {AiOutlineFolderOpen} from 'react-icons/ai'
import {FiTrash2} from 'react-icons/fi'
import {TbPoint} from 'react-icons/tb'
import resume from '../../assets/resume.pdf'

const About = () => {
  const knowledge = [
    "C++",
    "Python",
    "Typescript",
    "Javascript",
    "React.js",
    "Node.js",
    "HTML & CSS",
    "Git"
  ];

  function createArticles(knowledge_stack) {
    let tech_list = [];
    for (let i = 0; i < knowledge_stack.length; ++i) {
      let element = (
      <article>
        <TbPoint className='tech__cards-icons'/>
        {knowledge[i]}
      </article>
      )
      tech_list.push(element)
    }
    return tech_list;
  }

  // const tech_items = knowledge.map(item => <li>{item}</li>)

  let list = createArticles(knowledge);

  return (
    <section id='about'>
      <div className='container about__container'>
        <div className='about__me'> 
          <div className='about__me-image'>
            <img src={me} alt="about Image" />
          </div>
        </div>

        <div className='about__content'>
          <div className='about__cards'>
            
            
            {/* <a href="#education">
              <article className='about__card'>
              <AiOutlineFolderOpen className='about__icon'/>
              <h5>Education</h5>
              <small>Coursework</small>
              </article>
            </a>

            <a href='#experience'>
              <article className='about__card'>
                <BiBook className='about__icon'/>
                <h5>Experience</h5>
                <small>2+ Years - Intern</small>
              </article>
            </a>
            
            <a href="#portfolio">
              <article className='about__card'>
                <FiTrash2 className='about__icon'/>
                <h5>Portfolio</h5>
                <small>My projects</small>
              </article>
            </a> */}
            
          </div>
          <p>
          I am an aspiring software engineer based out of Boston, MA. At the University of Michigan, I am pursuing my Bachelor's degree in <b> computer science</b> with a minor in <b>music</b>.
          I am particularly interested in machine learning, full-stack development, and customer-facing technology.
          
          </p>
          <div className='technologies'>
            <h3> Technologies I Work With</h3>
            <div className='tech__cards'>
              {list}
            </div>
          </div>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
          <a href={resume} download className='btn'>Download Resume</a> 
        </div>
        

       
      </div>

    </section>
  )
}

export default About