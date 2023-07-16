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
          I'm transitioning my career from addressable advertising to QA engineering due to my newfound passion for ensuring software quality and user satisfaction.<br/><br/>
          My experience in addressable advertising has shown me the vital role of quality assurance in delivering seamless user experiences. The analytical and problem-solving nature of QA engineering attracts me, allowing me to utilize my attention to detail, critical thinking, and technical skills to identify and prevent issues.<br/><br/>
          I'm enthusiastic about applying my knowledge and dedication to create reliable software tests, where the final product surpass user expectations and provides a positive experience.<br/><br/>
          My current role involves coding display banners for renowned clients, equipping me with transferable skills for my next career move.
          </p>
        </div>
      </div>
      <div>
      <h2>Timeline</h2>
          <VerticalTimeline>
          <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="2010 - 2011"
              iconStyle={{ background: '#EC625F', color: '#fff' }}
              // icon={<WorkIcon />}
            >
              <h3 className="vertical-timeline-element-title">Art Director</h3>
              <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
              <p>
                1
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="2010 - 2011"
              iconStyle={{ background: '#EC625F', color: '#fff' }}
              // icon={<WorkIcon />}
            >
              <h3 className="vertical-timeline-element-title">Art Director</h3>
              <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
              <p>
                2
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="2008 - 2010"
              iconStyle={{ background: '#EC625F', color: '#fff' }}
              // icon={<WorkIcon />}
            >
              <h3 className="vertical-timeline-element-title">Web Designer</h3>
              <h4 className="vertical-timeline-element-subtitle">Los Angeles, CA</h4>
              <p>
                3
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="2006 - 2008"
              iconStyle={{ background: '#EC625F', color: '#fff' }}
              // icon={<WorkIcon />}
            >
              <h3 className="vertical-timeline-element-title">Web Designer</h3>
              <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
              <p>
                4
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
              <p>
                Creative Direction, User Experience, Visual Design, Project Management, Team Leading
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