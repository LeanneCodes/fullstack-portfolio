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
            I studied Marketing with Advertising at university, fueled by my love for "Mad Men" and a passion for the industry. After graduating, I worked in Advertising, executing successful multi-million pound campaigns for clients like Samsung, L'Oréal, and Compare the Market.
            <br />
            <br />
            During my career, I specialised in Addressable advertising, building display ad banners for clients like Eurostar, Audible and Lego. I discovered that I love transforming creative designs into live ads using HTML, CSS, JavaScript and Greensock; making them stand out with functionality and visual appeal.
            <br />
            <br />
            Having found this passion, I've been creating projects to grasp essential real-world concepts. Now, I'm enthusiastic about shifting into a Frontend developer role, working with experts, fostering ongoing learning in this dynamic tech realm. I'm eager to contribute skills to groundbreaking projects and stay at the forefront of this ever-evolving industry.
          </p>
        </div>
      </div>
      {/* <div>
        <h3>My Career History and Goals</h3>
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
        </VerticalTimeline>
      </div> */}
    </div>
  )
}

export default About