import React, { useState } from 'react'
import './experience.css'
import {Tabs, Tab, Box} from '@material-ui/core/'
import {TbPoint} from 'react-icons/tb'



const Experience = () => {
  const [val, setValue] = useState(0)
  const handleTabs=(event, value)=> {
    setValue(value)
  }

  const jobs = {
    'MIT Lincoln Laboratory': {
      title: "Image Processing and Machine Learning Intern",
      time: "FEB 2022 - PRESENT",
      details: [
        "Implemented revision tracking for scalable active learning pipeline prototype for large-scale brain mapping leveraging high performance computing",
        "Reduced JSON payloads by 90% by redesigning NeuroTrALE's data transmission and API requests"
      ]
    },
    TransitMatters: {
      title: "Software Engineering Intern",
      time: "MAY 2021 - AUG 2021",
      details: [
        "Developed plan and executed migration of hundreds of research reports and thousands of users for client portal",
        "Developed code to be used by San Francisco Municipal Transportation Agency (SFMTA)"
      ]
    },
    'Aite Novarica Group': {
      title: "Data Migration Intern",
      time: "MAY 2021 - AUG 2021",
      details: [
        "Calculated, analyzed, and created topline statistics for TM's Covid Recovery Dashboard to display discrepancies between pre-COVID and current ridership and service levels of the MBTA",
        "Tested and confirmed unified website functionality and content"
      ]
    },
    SureStart: {
      title: "ML/AI Trainee",
      time: "FEB 2021 - APR 2021",
      details: [
        "Learned and applied Machine Learning, NLP, Affective Computing, and ethical AI development",
        "Won 2nd place in VAIL Spring 2021 Makeathon by using machine learning to develop an auto-adjusting lightbulb that incorporates chromotherapy for those with Seasonal Affective Disorder"
      ]
    }
  }

  // const keys = jobs.keys;
  


  return (
    <section id='experience'>
      <h2> Work Experience</h2>
      <div className="container experience__container">
        <div className="tab__list">
          <Tabs orientation="vertical" value={val} onChange={handleTabs} TabIndicatorProps={{style: {background: '#B36C49'}}} className='experience__tabs'>
            {Object.keys(jobs).map((key, i) => (
              <Tab label={key}  />
            ))}
          </Tabs>
        </div>

        <div className="tab__list-horizontal">
          <Tabs orientation="horizontal" value={val} onChange={handleTabs} TabIndicatorProps={{style: {background: '#B36C49'}}} variant="scrollable" allowScrollButtonsMobile className='experience__tabs'>
            {Object.keys(jobs).map((key, i) => (
              <Tab label={key}  />
            ))}
          </Tabs>
        </div>
        
        <div className="tab__panel-list">
          {Object.keys(jobs).map((key, i) => (
          <TabPanel value={val} index={i}>
            <span className="jobs__title">
              {jobs[key]["title"]}
            </span>
            <div className="jobs__time">
              {jobs[key]["time"]}
            </div>
            <ul className="jobs__details">
              
              {jobs[key]["details"].map(function (bullet, i) {
                return (
                    <div className='jobs__list'>
                      <TbPoint size={30}className='jobs__details-icon' />
                      <li key={i}>{bullet}</li>
                    </div>
                    
                );
              })}
            </ul>
          </TabPanel>
          ))}
        </div>

        
      </div>
    </section>
  )
}

function TabPanel(props) {
  const{children, value, index}=props;
  return( 
  <div>
    {value===index && (
      <h1>{children}</h1>
    )}
  </div>
  )
}

export default Experience