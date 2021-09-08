import react, { useEffect, useRef, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import cover from '../images/cover1.jpeg';
import ReactDOM from 'react-dom';
import './portfolio.scss';
import { BsChevronCompactDown } from 'react-icons/bs';
import {FiMenu,FiDownload} from 'react-icons/fi'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


function Portfolio() {
  const [toggleMenu, settoggleMenu] = useState(false)

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }
    window.addEventListener('click', function(e){
      if (!btnRef.current.contains(e.target)){
        settoggleMenu(false)
      } 
    })
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  function changeExpanded(e){
    let expanded = ReactDOM.findDOMNode(e.currentTarget).parentNode.firstChild.firstChild
    console.log(expanded.src = e.target.src)
  }

  const myRef = useRef(null)
  const menuRef = useRef()
  const btnRef = useRef()

  function scrollDown (){
    myRef.current.scrollIntoView() 
  }


  let settings = {
    className: "center",
    centerMode: false,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 1,
    speed: 500,
    rows: 1,
    slidesPerRow: 2
  };

  if(windowWidth<768){
    settings = {
      className: "center",
      centerMode: false,
      infinite: true,
      centerPadding: "60px",
      slidesToShow: 1,
      speed: 500,
      rows: 1,
      slidesPerRow: 1,
      dots:true,
      arrows:false
    }
    
  }


  return (
    <div className="App">
      <a  className="menu_icon" ref={btnRef} onClick={()=>settoggleMenu(!toggleMenu)}><FiMenu size="30px" fill="#fff"/></a>
        <div id="menu" ref={menuRef} className={`pt-5 ${toggleMenu?"d-block":"d-none"}`}>
          <ul className="pt-3">
            <li><a href="#intro">Introduction</a></li>
            <li><a href="#skills">Projects</a></li>
            <li><a href="#work-ex">Work Experience</a></li>
            <li><a href="#education">education</a></li>
            <li><a href="#get-in-touch">Contact me</a></li>
          </ul>
        </div>
        <div className="section" id="intro">
          <div className="cover">
            <div className="cover-img">
              <button className="see-more" onClick={()=>scrollDown()} ><BsChevronCompactDown fill={"#fff"} className="down-arrow"/></button>
            </div>

            <div className="cover-text text-white typewriter">
              <h2 className="step_1">Hi, I'm Karanjot Singh.</h2>
              <h2 className="step_2">I design and build Web</h2>
              <h2 className="step_3">and Mobile Applications.</h2>
            </div>

            <div className="text-center cover-right">
              <img src={require('../images/profile.jpg').default} className="profile" height="200" width="200"/>
              <h2 className="name fs-40"><b>Karanjot Singh</b></h2>
              <h4 className="city">Arlington, Texas</h4>
              <a className="resume" href="/resume.pdf" target="_blank"><h4><FiDownload/> Download Resume</h4></a>
              <div className="social-links">
                {/* <a href="#"><img src={require('../images/images/facebook.png').default}/></a> */}
                <a href="https://twitter.com/sleepy_singh" target="_blank"><img src={require('../images/images/twitter.png').default}/></a>
                <a href="https://www.linkedin.com/in/karanjotsingh1995/" target="_blank"><img src={require('../images/images/Linkedin.png').default}/></a>
                <a href="https://github.com/Karanjot1995" target="_blank"><img src={require('../images/images/github.png').default}/></a>
                <a href="#"><img src={require('../images/images/quora.png').default}/></a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="section skills light text-center" ref={myRef} id="skills">
          <div className="container-fluid text-center">
            <h2 className="heading text-uppercase"><b>Projects and Skills</b></h2>
            <div className="d-flex justify-content-center text-uppercase skill-set">
                <p className="skill-bubble">HTML</p>
                <p className="skill-bubble">CSS</p>
                <p className="skill-bubble">Javascript</p>
                <p className="skill-bubble">Reactjs</p>
                <p className="skill-bubble">Redux</p>
                <p className="skill-bubble">React Native</p>
                <p className="skill-bubble">Python</p>
                <p className="skill-bubble">SASS</p>
                <p className="skill-bubble">Nodejs</p>
                <p className="skill-bubble">Express</p>
                <p className="skill-bubble">MongoDb</p>
                <p className="skill-bubble">Bootstrap</p>
                <p className="skill-bubble">jQuery</p>
                <p className="skill-bubble">Git</p>
            </div>
          </div>
          
          <div className="slider-container m-md-5">
            <h3 className="sub-heading">Personal Projects</h3>
            <Slider {...settings}>
              <div className="text-center">
                <a className="expanded" href="https://groomers.co.in/" target="_blank">
                  <img src={require('../images/groomers/groomers-1.png').default}/>
                </a>
                <a className="thumbnail" onClick={(e)=>changeExpanded(e)}><img src={require('../images/groomers/groomers-1.png').default}/></a>
                <a className="thumbnail" onClick={(e)=>changeExpanded(e)}><img src={require('../images/groomers/groomers-2.png').default}/></a>
                <a className="thumbnail" onClick={(e)=>changeExpanded(e)}><img src={require('../images/groomers/groomers-3.png').default}/></a>
                <h3>groomers.co.in</h3>
                <p>E-commerce website for Indian business purposes</p>
                <p>Tech Stack: Reactjs, Express, Nodejs, MongoDB</p>
              </div>
              <div className="text-center">
                <a className="expanded" href="https://github.com/Karanjot1995/Social" target="_blank">
                  <img src={require('../images/social/social-1.png').default}/>
                </a>
                <a className="thumbnail" onClick={(e)=>changeExpanded(e)}><img src={require('../images/social/social-1.png').default}/></a>
                <a className="thumbnail" onClick={(e)=>changeExpanded(e)}><img src={require('../images/social/social-2.png').default}/></a>
                <a className="thumbnail" onClick={(e)=>changeExpanded(e)}><img src={require('../images/social/social-3.png').default}/></a>
                <h3>Social Web (Facebook functionalities)</h3>
                <p>Post, like comment, chat, add Friend, signup, google Authentication etc.</p>
                <p>Tech Stack: Express, Nodejs, MongoDB</p>
              </div> 
              <div className="text-center">
                <a className="expanded" href="https://github.com/Karanjot1995/SEO_tool" target="_blank">
                  <img src={require('../images/seo-1.png').default}/>
                </a>
                <a className="thumbnail" onClick={(e)=>changeExpanded(e)}><img src={require('../images/seo-1.png').default}/></a>
                <a className="thumbnail" onClick={(e)=>changeExpanded(e)}><img src={require('../images/seo-2.png').default}/></a>
                <a className="thumbnail" onClick={(e)=>changeExpanded(e)}><img src={require('../images/seo-3.png').default}/></a>
                <h3>SEO Automation Tool</h3>
                <p>Tech Stack: Reactjs, Express, Nodejs, MongoDB</p>
              </div>
              <div className="text-center">
                <a className="expanded" href="https://github.com/Karanjot1995/Workplace-Management-Tool" target="_blank">
                  <img src={require('../images/wmt/wmt-1.png').default}/>
                </a>
                <a className="thumbnail" onClick={(e)=>changeExpanded(e)}><img src={require('../images/wmt/wmt-1.png').default}/></a>
                <a className="thumbnail" onClick={(e)=>changeExpanded(e)}><img src={require('../images/wmt/wmt-2.png').default}/></a>
                <a className="thumbnail" onClick={(e)=>changeExpanded(e)}><img src={require('../images/wmt/wmt-3.png').default}/></a>
                <h3>Workplace Management Tool</h3>
                <p>Tech Stack: Reactjs, Express, Nodejs, MongoDB</p>
              </div>
              {/* <div className="text-center">
                <a href="https://karanjot1995.github.io/elle.html" target="_blank"><img src={require('../images/images/design_6.png').default}/></a>
                <h3>TO do list</h3>
                <p></p>
              </div> */}
            </Slider>
          </div>


          <div className="m-md-5 pd-t-5 slider-container">
            <h3 className="sub-heading">Work Projects</h3>
            <Slider {...settings}>
              <div className="text-center">
                <a href="https://collegedunia.com/" className="expanded" target="_blank"><img src={require('../images/collegedunia.png').default}/></a>
                <h3>collegedunia.com (Collegedunia web Pvt. Ltd.)</h3>
                <p>Tech Stack: Reactjs, Express, Nodejs, MongoDB</p>
                <p></p>
              </div>
              <div className="text-center">
                <a href="https://www.discernliving.com/" className="expanded" target="_blank"><img src={require('../images/discernliving.png').default}/></a>
                <h3>discernliving.com (Hogarth India)</h3>
                <p>Tech Stack: Reactjs, Express, Nodejs (Full Stack)</p>
              </div>
              <div className="text-center">
                <a className="expanded" href="https://github.com/Karanjot1995/Workplace-Management-Tool" target="_blank">
                  <img src={require('../images/wmt/wmt-1.png').default}/>
                </a>
                <h3>Workplace Management Tool</h3>
                <p>Tech Stack: MongoDb, Reactjs, Express, Nodejs (Full Stack)</p>
              </div>
              <div className="text-center">
                <a href="https://www.corporategurukul.com/" className="expanded" target="_blank"><img src={require('../images/cg.png').default}/></a>
                <h3>Corporate Gurukul (Hogarth India)</h3>
                <p>Tech Stack: HTML, CSS, JQuery (Frontend)</p>
              </div>
              <div className="text-center">
                <a href="https://lentra.ai/" className="expanded" target="_blank"><img src={require('../images/lentra.png').default}/></a>
                <h3>Lentra.ai (Hogarth India)</h3>
                <p>Tech Stack: HTML, CSS, Javascript (Frontend)</p>
              </div>
            </Slider>
          </div>
        


          <div className="m-md-5 pd-t-5 slider-container">
            <h3 className="sub-heading">Static Designs</h3>
            <Slider {...settings}>
            <div className="text-center">
                  <a className="expanded" href="https://karanjot1995.github.io/chatbot.html" target="_blank"><img  src={require('../images/images/chatbot.png').default}/></a>
                  <h3>chatbot</h3>
                  <p></p>
              </div>
              <div className="text-center">
                <a className="expanded" href="https://karanjot1995.github.io/resume.html" target="_blank"><img src={require('../images/images/design_1.png').default}/></a>
                <h3>Resume-design</h3>
                <p></p>
              </div> 
              <div className="text-center">
                <a className="expanded" href="https://karanjot1995.github.io/terracotta.html" target="_blank"><img src={require('../images/images/design_2.png').default}/></a>
                <h3>Terracotta</h3>
                <p></p>
              </div>
              <div className="text-center">
                <a className="expanded" href="https://karanjot1995.github.io/facebook.html" target="_blank"><img src={require('../images/images/design_3.png').default}/></a>
                <h3>Facebook-design</h3>
                <p></p>
              </div>
              <div className="text-center">
                <a className="expanded" href="https://karanjot1995.github.io/golden.html" target="_blank"><img src={require('../images/images/design_4.png').default}/></a>
                <h3>Golden-design</h3>
                <p></p>
              </div>
              <div className="text-center">
                <a className="expanded" href="https://karanjot1995.github.io/focus.html" target="_blank"><img src={require('../images/images/design_5.png').default}/></a>
                <h3>Focus-design</h3>
                <p></p>
              </div>
              <div className="text-center">
                <a className="expanded" href="https://karanjot1995.github.io/elle.html" target="_blank"><img src={require('../images/images/design_6.png').default}/></a>
                <h3>Elle_reve-design</h3>
                <p></p>
              </div>
            </Slider>
          </div>


          {/* <div className="typing-container">
    <span id="sentence" className="sentence"></span>
    <span className="input-cursor"></span>
  </div> */}
        
        </div>

        <div className="section work-ex dark" id="work-ex">
          <h2 className="heading text-center text-uppercase"><b>Work Experience</b></h2>

          <div className="company m-auto pb-4">
            <h3>Hogarth Worldwide, India - Software Engineer</h3>
            <h3>(July 2018 - March 2021)</h3>
            <p>- Worked with hogarth India from July 2018 to March 2021 on various independent as well as team projects.</p>
            <p>
              - Developed the SEO automation tool and the Workplace Management Tool for using MERN stack 
              for the company during covid to make the various company process smoother like timesheet filling, 
              Attendance, Employee utilization graph based on the hours and kind of work and downloading 
              of such employee data from the tool.
            </p>
            <p>- Worked on Discernliving.com which was a full stack project as well on React, Express, and Nodejs.</p>
            <p>- Worked on the front-end of other minor projects like Corporate Gurukul and Lentra.</p>
          </div>

          <div className="company pb-4">
            <h3>Collegedunia Web Pvt Ltd - Software Engineer</h3>
            <h3>(March 2021 - August 2021)</h3>
            <p>- Worked with collegedunia.com (product based company) from March 2021 to August 2021 as 
              a senior software engineer on their main education portal(collegedunia.com) 
              as a software engineer using Nextjs, Reactjs, Nodejs, HTML and CSS.</p>
          </div>

          <div className="company">
            <h3 className="">IIIT Delhi (Summer Internship)</h3>
            <p>Selected for the innovation internship program offered by IIIT Delhi Worked on the project ‘Lobye’ 
              connecting local businesses to consumers. Built the front end using HTML, CSS, jQuery and Bootstrap.</p>
          </div>

        </div>
        
        <div className="section education light" id="education">
          <h2 className="heading text-uppercase text-center"><b>Education</b></h2>
          <div className="company d-flex flex-column align-items-center text-left">
            <p>I graduated with a Bachelors in Technology degree in <b>Electronics and Communication Engineering</b> 
            from Guru Gobind Singh Indraprastha University <b>(IP University)</b> in 2017.</p><br/>
            <p>I finished 10th and 12th from <b>Cambridge School</b>, Srinivaspuri, <b>Delhi</b> in 2011 and 2013 respectively.</p><br/>
            <p>I developed an interest in <b>web development</b> and worked on various projects during my career, college and of my own.</p><br/>
            <p>Currently I am pursuing Master of Science in Computer Science from <b>The University of Texas at Arlington</b></p>
          </div>
        </div>

        <div className="section get-in-touch dark text-center" id="get-in-touch">
          <h3>Wanna get in touch or talk about a project?</h3>
          <p>
          Feel free to contact me via email at <br/>
          karan.nanda97@gmail.com<br/>
          {/* or contact me through the form below! */}
          </p>

        </div>
    </div>
  );
}

export default Portfolio;
