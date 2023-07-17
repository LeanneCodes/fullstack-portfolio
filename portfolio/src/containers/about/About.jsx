import React from 'react'
import './about.css'
import leanne from '../../assets/leanne-portfolio.png';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const About = () => {
  return (
    <div className='about-container container' id='about'>
      <div className='about-info'>
        <div className='img-style'>
          <img src={leanne} alt='Leanne' className='profile-pic'/>
        </div>
        <div className='text-pos'>
          <h1>About me</h1>
          <p className='text-style'>
            I pursued a Marketing with Advertising degree at university, inspired by my love for the TV show "Mad Men" and a strong desire to immerse myself in the industry. Following my studies, I entered the Advertising field, where I successfully executed multi-million pound campaigns for renowned brands such as Samsung, L'Oréal, and Compare the Market.
            <br />
            <br />
            During my time in advertising, I specialised in Addressable, focusing on building display ad banners for esteemed clients like Eurostar and Audible. My role was around transforming creative agency designs into functional live ads. I integrated Figma and Photoshop files into VS Code, where I wrote code and leveraged tools like Greensock, to merge all elements together. This process allowed me to bring captivating ad experiences to life while ensuring optimal functionality and visual appeal.
            <br />
            <br />
            Now, I am seeking opportunities as a full-time fullstack engineer, aspiring to collaborate with open-minded professionals from whom I can learn and grow.
            <br/>
            <br />
            I am excited to embark on this next chapter, where I can utilise my skills and contribute to innovative projects while continuously expanding my knowledge in the ever-evolving world of technology.
          </p>
        </div>
      </div>
      <br />
      <br />
      <div>
        <h3>My Career Path and Goals</h3>
        <br />
        <br />
        <VerticalTimeline>
        <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2016 - 2018"
            iconStyle={{ background: '#EC625F', color: '#fff' }}
            // icon={<WorkIcon />}
          >
            <h3 className="vertical-timeline-element-title">Advertising Planner</h3>
            <h4 className="vertical-timeline-element-subtitle">Clients: Samsung UK</h4>
            <p style={{color: "#313131", textAlign: "center"}}>
              Strategised and helped execute media campaigns for Samsung UK. This involved working with multiple stakeholders across different industries to ensure flawless campaigns.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2018 - 2021"
            iconStyle={{ background: '#EC625F', color: '#fff' }}
            // icon={<WorkIcon />}
          >
            <h3 className="vertical-timeline-element-title">Advertising Paid Social Manager</h3>
            <h4 className="vertical-timeline-element-subtitle">Clients: L'Oréal Group, Eurostar, Compare the Market</h4>
            <p style={{color: "#313131", textAlign: "center"}}>
              Delivered successful multi-platform social campaigns for a range of clients, who all had different goals, from reach to high sales at low cost-per-actions.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2021 - 2022"
            iconStyle={{ background: '#EC625F', color: '#fff' }}
            // icon={<WorkIcon />}
          >
            <h3 className="vertical-timeline-element-title">Code Institute Fullstack Bootcamp</h3>
            <h4 className="vertical-timeline-element-subtitle">Merit Grade</h4>
            <p style={{color: "#313131", textAlign: "center"}}>
              I enrolled in a comprehensive year-long bootcamp and I undertook various projects that showcased my proficiency, including creating a quiz application, developing single page applications, and constructing fully functional eCommerce websites. Demonstrating my dedication and skill, these projects culminated in the achievement of a Merit grade.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2021 - Present"
            iconStyle={{ background: '#EC625F', color: '#fff' }}
            // icon={<WorkIcon />}
          >
            <h3 className="vertical-timeline-element-title">Advertising Addressable Manager</h3>
            <h4 className="vertical-timeline-element-subtitle">Clients: Eurostar, Audible, Morrisons, Nationwide, Danone</h4>
            <p style={{color: "#313131", textAlign: "center"}}>
              I currently build display banner ads using HTML, CSS, JavaScript and Greensock and recreate the desired ad look by incorporating the designs from Figma, Photoshop and Adobe After Effects.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: '#EC625F', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  #EC625F' }}
            date="Desired role"
            iconStyle={{ background: '#EC625F', color: '#fff' }}
            // icon={<WorkIcon />}
          >
            <h3 className="vertical-timeline-element-title" style={{color: "white"}}>Junior Fullstack Engineer</h3>
            <p style={{textAlign: "center"}}>
              To be able to create front and back end applications that bring value to the end user and the stakeholders involved.
            </p>
          </VerticalTimelineElement>
          {/* <VerticalTimelineElement
            iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
            // icon={<StarIcon />}
          /> */}
        </VerticalTimeline>
      </div>
    </div>
  )
}

export default About