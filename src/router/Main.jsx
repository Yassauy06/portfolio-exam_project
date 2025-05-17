import React from 'react';
import { Link } from 'react-scroll';
import AboutMe from '../components/AboutMe';
import Contacts from '../components/Contacts'
import Education from '../components/Education';
import Experience from '../components/Experience'
import Skills from '../components/Skills';
import { Layout, theme } from 'antd';
import Certificates from '../components/Certificates';
const  Main = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Layout hasSider>

    <div className='global-div '>
      
      <nav className="navbar">
        <div className='userInfo'>
      <img style={{width:'50px',height:'50px',borderRadius:'50px'}} src="https://avatars.mds.yandex.net/i?id=f1ac574a205a058218cfd740d9428a93_l-5222242-images-thumbs&n=13" alt="" />
      <h5 className='userName'> Yassauy</h5>
    </div>
        <ul>
          <li style={{paddingBottom:'20px'}}> <Link to="/Aboutme"  spy={true}  smooth='true' offset={-50} duration={700}>About Me</Link> </li>
          <li style={{paddingBottom:'20px'}}> <Link to="/Education"  spy={true}  smooth='true' offset={-50} duration={700}>Education</Link> </li>
          <li style={{paddingBottom:'20px'}}> <Link to="/Certificates"  spy={true}  smooth='true' offset={-50} duration={700}>Certificates</Link> </li>
          <li style={{paddingBottom:'20px'}}> <Link to="/Skills"  spy={true}  smooth='true' offset={-50} duration={700}>Skills</Link> </li>
           <li style={{paddingBottom:'20px'}}> <Link to="/Contacts"  spy={true}  smooth='true' offset={-50} duration={700}>Contacts</Link> </li>
          <li style={{paddingBottom:'20px'}}> <Link to="/Experience"  spy={true}  smooth='true' offset={-50} duration={700}>Experience</Link> </li>
        </ul>
      </nav>

      <div className="content">
        <section id="/Aboutme">
          <AboutMe />
        </section>
        <section id="/Education">
          <Education />
        </section>
        <section id="/Certificates">
          <Certificates />
        </section>
        <section id="/Skills">
          <Skills />
        </section>
       <section id="/Contacts">
          <Contacts />
        </section>
        <section id="/Experience">
          <Experience />
        </section>
      </div>
    </div>
 
      <Layout
        
      >
        
        
          
   
      </Layout>
    </Layout>
   
  );
};
export default Main;