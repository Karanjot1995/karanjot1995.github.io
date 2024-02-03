import react, { useEffect, useRef, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import cover from '../images/cover1.jpeg';
import ReactDOM from 'react-dom';
import './portfolio.scss';
import { BsChevronCompactDown } from 'react-icons/bs';
import {FiMenu,FiDownload} from 'react-icons/fi'
import { FaLaptopCode, FaLaptop, FaBriefcase, FaCertificate, FaCalendar} from "react-icons/fa";
import { GiGraduateCap } from "react-icons/gi";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import skills from './skills.json';

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
        <section className="section" id="intro">
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
              <img src={require('../images/profile.jpg')} className="profile" height="200" width="200"/>
              <h2 className="name fs-40"><b>Karanjot Singh</b></h2>
              <h4 className="city">Arlington, Texas</h4>
              <a className="resume" href="/resume.pdf" target="_blank"><h4><FiDownload/> Download Resume</h4></a>
              <div className="social-links">
                {/* <a href="#"><img src={require('../images/images/facebook.png')}/></a> */}
                <a href="https://twitter.com/sleepy_singh" target="_blank"><img src={require('../images/images/twitter.png')}/></a>
                <a href="https://www.linkedin.com/in/karanjotsingh1995/" target="_blank"><img src={require('../images/images/Linkedin.png')}/></a>
                <a href="https://github.com/Karanjot1995" target="_blank"><img src={require('../images/images/github.png')}/></a>
                <a href="#"><img src={require('../images/images/quora.png')}/></a>
              </div>
            </div>
          </div>
        </section>

        <section class="skills" id="skills">
          <div className="container-fluid text-center">
            <h2 class="heading text-uppercase"><FaLaptopCode/> Skills and <span>Abilities</span></h2>
          </div>
          <div class="container">
            <div class="grid">
              {skills.skills.map(skill=>
                <div class="skill-box">
                  <div class="skill-info d-flex flex-column align-items-center">
                    {/* <img src={skill.icon} alt={skill.name} /> */}
                    <img src={skill.icon} alt={skill.name} />
                    <span>{skill.name}</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
        
        <section className="section light projects text-center" ref={myRef} id="projects">
          <div className="container-fluid text-center">
            <h2 className="heading text-uppercase"><FaLaptop/> Projects</h2>
          </div>
          
          <div className="slider-container m-md-5">
            {/* <h3 className="sub-heading">Personal Projects</h3> */}
            <Slider {...settings}>
              <div className="text-center">
                <a className="expanded" href="https://netflix-49393.web.app/" target="_blank">
                  <img src={require('../images/netflix/1.png')}/>
                </a>
                <a className="thumbnail" onClick={(e)=>changeExpanded(e)}><img src={require('../images/netflix/1.png')}/></a>
                <a className="thumbnail" onClick={(e)=>changeExpanded(e)}><img src={require('../images/netflix/2.png')}/></a>
                <a className="thumbnail" onClick={(e)=>changeExpanded(e)}><img src={require('../images/netflix/3.png')}/></a>
                <a className="thumbnail" onClick={(e)=>changeExpanded(e)}><img src={require('../images/netflix/4.png')}/></a>
                <a className="thumbnail" onClick={(e)=>changeExpanded(e)}><img src={require('../images/netflix/5.png')}/></a>
                <h3 className="d-flex justify-content-center">
                  {/* <a href="https://netflix-vms.herokuapp.com/home">Netflix</a>&nbsp;               */}
                  <a href='https://netflix-49393.web.app/'>Netflix</a>
                  (<a className="github-link d-flex justify-content-center" href="https://github.com/Karanjot1995/Netflix-VMS"><img className="github-logo" src={require('../images/github-logo.png')}/>github</a>)
                </h3>
                <p>Netflix Clone Video Management System</p>
                <p>Tech Stack: Reactjs, Express, Nodejs, MySQL</p>
              </div>
              <div className="text-center">
                <a className="expanded" href="https://groomers.co.in/" target="_blank">
                  <img src={require('../images/groomers/groomers-1.png')}/>
                </a>
                <a className="thumbnail" onClick={(e)=>changeExpanded(e)}><img src={require('../images/groomers/groomers-1.png')}/></a>
                <a className="thumbnail" onClick={(e)=>changeExpanded(e)}><img src={require('../images/groomers/groomers-2.png')}/></a>
                <a className="thumbnail" onClick={(e)=>changeExpanded(e)}><img src={require('../images/groomers/groomers-3.png')}/></a>
                <h3 className="d-flex justify-content-center">
                  <a href="https://groomers.co.in/">groomers.co.in</a>&nbsp;                  
                  (<a className="github-link d-flex justify-content-center" href="https://github.com/Karanjot1995/groomers-server"><img className="github-logo" src={require('../images/github-logo.png')}/>github</a>)
                </h3>
                
                <p>E-commerce website for Indian business purposes</p>
                <p>Tech Stack: Reactjs, Express, Nodejs, MongoDB</p>
              </div>
              <div className="text-center">
                <a className="expanded" href="http://social-web.co.in/" target="_blank">
                  <img src={require('../images/social/social-1.png')}/>
                </a>
                {/* https://github.com/Karanjot1995/Social */}
                <a className="thumbnail" onClick={(e)=>changeExpanded(e)}><img src={require('../images/social/social-1.png')}/></a>
                <a className="thumbnail" onClick={(e)=>changeExpanded(e)}><img src={require('../images/social/social-2.png')}/></a>
                <a className="thumbnail" onClick={(e)=>changeExpanded(e)}><img src={require('../images/social/social-3.png')}/></a>
                <h3 className="d-flex justify-content-center">
                  <a href="https://groomers.co.in/">social-web.co.in</a>&nbsp;                  
                  (<a className="github-link d-flex justify-content-center" href="https://github.com/Karanjot1995/Social"><img className="github-logo" src={require('../images/github-logo.png')}/>github</a>)
                </h3>                
                <p>Post, like comment, chat, add Friend, signup, google Authentication etc.</p>
                <p>Tech Stack: Ejs, Express, Nodejs, MongoDB</p>
              </div> 
              <div className="text-center">
                <a className="expanded" href="https://github.com/Karanjot1995/SEO_tool" target="_blank">
                  <img src={require('../images/seo-1.png')}/>
                </a>
                <a className="thumbnail" onClick={(e)=>changeExpanded(e)}><img src={require('../images/seo-1.png')}/></a>
                <a className="thumbnail" onClick={(e)=>changeExpanded(e)}><img src={require('../images/seo-2.png')}/></a>
                <a className="thumbnail" onClick={(e)=>changeExpanded(e)}><img src={require('../images/seo-3.png')}/></a>
                <h3>SEO Automation Tool</h3>
                <p>Tech Stack: Reactjs, Express, Nodejs, MongoDB</p>
              </div>
              <div className="text-center">
                <a className="expanded" href="https://github.com/Karanjot1995/Workplace-Management-Tool" target="_blank">
                  <img src={require('../images/wmt/wmt-1.png')}/>
                </a>
                <a className="thumbnail" onClick={(e)=>changeExpanded(e)}><img src={require('../images/wmt/wmt-1.png')}/></a>
                <a className="thumbnail" onClick={(e)=>changeExpanded(e)}><img src={require('../images/wmt/wmt-2.png')}/></a>
                <a className="thumbnail" onClick={(e)=>changeExpanded(e)}><img src={require('../images/wmt/wmt-3.png')}/></a>
                <h3>Workplace Management Tool</h3>
                <p>Tech Stack: Reactjs, Express, Nodejs, MongoDB</p>
              </div>
              {/* <div className="text-center">
                <a href="https://karanjot1995.github.io/elle.html" target="_blank"><img src={require('../images/images/design_6.png')}/></a>
                <h3>TO do list</h3>
                <p></p>
              </div> */}
            </Slider>
          </div>


          <div className="m-md-5 pd-t-5 slider-container">
            <h3 className="sub-heading">Work Projects</h3>
            <Slider {...settings}>
              <div className="text-center">
                <a href="https://collegedunia.com/" className="expanded" target="_blank"><img src={require('../images/collegedunia.png')}/></a>
                <h3>collegedunia.com (Collegedunia web Pvt. Ltd.)</h3>
                <p>Tech Stack: Reactjs, Express, Nodejs, MongoDB</p>
                <p></p>
              </div>
              <div className="text-center">
                <a href="https://www.discernliving.com/" className="expanded" target="_blank"><img src={require('../images/discernliving.png')}/></a>
                <h3>discernliving.com (Hogarth India)</h3>
                <p>Tech Stack: Reactjs, Express, Nodejs (Full Stack)</p>
              </div>
              <div className="text-center">
                <a className="expanded" href="https://github.com/Karanjot1995/Workplace-Management-Tool" target="_blank">
                  <img src={require('../images/wmt/wmt-1.png')}/>
                </a>
                <h3>Workplace Management Tool</h3>
                <p>Tech Stack: MongoDb, Reactjs, Express, Nodejs (Full Stack)</p>
              </div>
              <div className="text-center">
                <a href="https://www.corporategurukul.com/" className="expanded" target="_blank"><img src={require('../images/cg.png')}/></a>
                <h3>Corporate Gurukul (Hogarth India)</h3>
                <p>Tech Stack: HTML, CSS, JQuery (Frontend)</p>
              </div>
              <div className="text-center">
                <a href="https://lentra.ai/" className="expanded" target="_blank"><img src={require('../images/lentra.png')}/></a>
                <h3>Lentra.ai (Hogarth India)</h3>
                <p>Tech Stack: HTML, CSS, Javascript (Frontend)</p>
              </div>
            </Slider>
          </div>
        


          <div className="m-md-5 pd-t-5 slider-container">
            <h3 className="sub-heading">Static Designs</h3>
            <Slider {...settings}>
            <div className="text-center">
                  <a className="expanded" href="https://karanjot1995.github.io/chatbot.html" target="_blank"><img  src={require('../images/images/chatbot.png')}/></a>
                  <h3>chatbot</h3>
                  <p></p>
              </div>
              <div className="text-center">
                <a className="expanded" href="https://karanjot1995.github.io/resume.html" target="_blank"><img src={require('../images/images/design_1.png')}/></a>
                <h3>Resume-design</h3>
                <p></p>
              </div> 
              <div className="text-center">
                <a className="expanded" href="https://karanjot1995.github.io/terracotta.html" target="_blank"><img src={require('../images/images/design_2.png')}/></a>
                <h3>Terracotta</h3>
                <p></p>
              </div>
              <div className="text-center">
                <a className="expanded" href="https://karanjot1995.github.io/facebook.html" target="_blank"><img src={require('../images/images/design_3.png')}/></a>
                <h3>Facebook-design</h3>
                <p></p>
              </div>
              <div className="text-center">
                <a className="expanded" href="https://karanjot1995.github.io/golden.html" target="_blank"><img src={require('../images/images/design_4.png')}/></a>
                <h3>Golden-design</h3>
                <p></p>
              </div>
              <div className="text-center">
                <a className="expanded" href="https://karanjot1995.github.io/focus.html" target="_blank"><img src={require('../images/images/design_5.png')}/></a>
                <h3>Focus-design</h3>
                <p></p>
              </div>
              <div className="text-center">
                <a className="expanded" href="https://karanjot1995.github.io/elle.html" target="_blank"><img src={require('../images/images/design_6.png')}/></a>
                <h3>Elle_reve-design</h3>
                <p></p>
              </div>
            </Slider>
          </div>


          {/* <div className="typing-container">
    <span id="sentence" className="sentence"></span>
    <span className="input-cursor"></span>
  </div> */}
        
        </section>

        <section className="section work-ex dark" id="work-ex">
          <div className="container-fluid text-center">
            <h2 class="heading text-uppercase"><FaBriefcase/> Work <span>Experience</span></h2>

            {/* <h2 className="heading text-center text-uppercase"><FaBriefcase/> Work Experience</h2> */}
          </div>

          <div id="cd-timeline" class="cd-container">
          {skills.experience.map((event,index)=>(
            <div class="cd-timeline-block">
              <div class="cd-timeline-img cd-picture"></div>
              <div class="cd-timeline-content">
                <h2>{event.company}</h2>
                <div class="timeline-content-info d-flex">
                  <span class="timeline-content-info-title">
                    <FaCertificate/>
                    {event.title}
                  </span>
                  <span class="timeline-content-info-date">
                    <FaCalendar/>
                    {event.date}
                  </span>
                </div>
                {event.description.map(des=>(
                  <p>* {des}</p>
                ))}
                <ul class="content-skills">
                  {event.skills.map(skill=>(<li>{skill}</li>))}
                </ul>
              </div>
            </div> 
          ))}
          </div>

          {/* <div className="company m-auto pb-4">
            <h3>Megger(Dallas, Tx): Software Engineer</h3>
            <h3>(July 2023 - Current)</h3>
            <p>- Functioned and designed Megger web portal(demoassets.com) for handling equipment delivery, management and tracking using PHP Laravel, Vuejs, Javascript and MySql and deployed on AWS.</p>
            <p>- Singlehandedly took care of all the processes from design and development to testing.</p>
            <p>- Building the rental platform using Vuejs and built RESTful APIs using PHP Laravel to serve the data stored in MYSQL db. This is helping the company cut the cost for paid platforms by almost 75%.</p>
          </div>

          <div className="company m-auto pb-4">
            <h3>Megger(Dallas, Tx): Software Engineer Intern</h3>
            <h3>(June 2022 - May 2023)</h3>
            <p>- Functioned and designed Megger web portal(demoassets.com) for handling equipment delivery and management using PHP Laravel, Vuejs, Javascript and MySql.</p>
            <p>- Validated, tested and wrote code to maximize the performance and deliver the best in a short period of time.</p>
          </div>

          <div className="company m-auto pb-4">
            <h3>Hogarth Worldwide, India - Software Engineer</h3>
            <h3>(July 2018 - March 2021)</h3>
            <p>- Led a team for 4 for Discernliving.com website using technologies like Reactjs (javascript framework), Nodejs, Expressjs, HTML and CSS.</p>
            <p>- Developed and Maintained BMW India website as a team lead on AEM Platform and used HTML, CSS and javascript for development. Increased user engagement by 15% through the implementation of responsive design and interactive user interfaces.</p>
            <p>- Developed a Workplace Management Tool for the company for timesheet management, HR management and employee management and cut down employee management time by a significant 60% using Reactjs javascript framework, Redux, Nodejs, Express and Mongodb.</p>
            <p>- Achieved a 20% improvement in website loading speed by optimizing frontend code and implementing caching strategies.</p>
            <p>- Automated the SEO process by creating an SEO Tool using Reactjs javascript framework, Redux and Nodejs.</p>
          </div>

          <div className="company pb-4">
            <h3>Collegedunia Web Pvt Ltd - Software Engineer</h3>
            <h3>(March 2021 - August 2021)</h3>
            <p>- Worked with collegedunia.com from March 2021 to August 2021 as a senior software engineer on their main education portal(collegedunia.com) and led a team of 10 using Nextjs, Reactjs, Nodejs, HTML and CSS.</p>
            <p>- Defined and conducted the project on various stages including research, conceptualization, testing and implementation and Created many components like dynamic forms, search etc. and APIs.</p>
            <p>- Achieved a 15% reduction in software development cycle time by optimizing the deployment pipeline and implementing automated testing.</p>
          </div>

          <div className="company">
            <h3 className="">IIIT Delhi (Summer Internship)</h3>
            <p>Selected for the innovation internship program offered by IIIT Delhi Worked on the project ‘Lobye’ 
              connecting local businesses to consumers. Built the front end using HTML, CSS, jQuery and Bootstrap.</p>
          </div> */}

        </section>
        
        <section className="section education light" id="education">
          <div className="container-fluid text-center">
            <h2 className="heading text-uppercase text-center"><GiGraduateCap/>Education</h2>
          </div>
          <ul class="cards">
            <li class="cards__item">
              <div class="card text-center">
                {/* <div class="card__image card__image--fence"></div> */}
                <div class="card__content">
                <div class="degree">Master of Science in Computer Science</div>
                  <p class="university">The University of Texas at Arlington</p>
                  <p class="card__text">2021-2023</p>
                </div>
              </div>
            </li>
            <li class="cards__item">
            <div class="card  text-center">
                {/* <div class="card__image card__image--fence"></div> */}
                <div class="card__content">
                  <div class="degree">Bachelor of Technology in Electronics and Communication</div>
                  <p class="university">Indraprastha University, Delhi</p>
                  <p class="card__text">2013-2017</p>
                </div>
              </div>
            </li>
          </ul>
          {/* <div className="company d-flex flex-column align-items-center text-left">
            <p>Currently I am working as a software engineer at Megger and finished my Master of Science in Computer Science from <b>The University of Texas at Arlington</b>. <b>GPA : 4.0</b></p><br/>
            <p>I graduated with a Bachelors in Technology degree in <b>Electronics and Communication Engineering</b> 
            from Guru Gobind Singh Indraprastha University <b>(IP University)</b> in 2017.</p><br/>
            <p>I finished 10th and 12th from <b>Cambridge School</b>, Srinivaspuri, <b>Delhi</b> in 2011 and 2013 respectively.</p><br/>
            <p>I developed an interest in <b>web development</b> and worked on various projects during my career, college and of my own.</p><br/>
          </div> */}
        </section>

        <section className="section get-in-touch dark text-center" id="get-in-touch">
          <h3>Wanna get in touch or talk about a project?</h3>
          <p>
          Feel free to contact me via email at <br/>
          karan.nanda97@gmail.com<br/>
          {/* or contact me through the form below! */}
          </p>

        </section>
    </div>
  );
}

export default Portfolio;
