import react, { useEffect, useRef, useState } from 'react'
import './portfolio.scss';


function Work() {

  useEffect(() => {
   
  }, []);


  return (
    <div className="Work">
      <div className="work" id="work">
        <h2 className="block-header">Work</h2>
        <div className="timeline">
          <div>
            <h3>Experience</h3>
            <div className="">
              <div className="timelineItem">
                <h5 className="itemPeriod">2019 - 2021</h5>
                <span className="itemCompany">Coding Ninjas</span>
                <h4 className="itemTitle">Software Engineer &amp; Instructor</h4>
                <p>Built the cheating detection system for Career Camp exams. I also created the React course which has more than 1000 enrollments.</p>
              </div>
              <div className="timelineItem">
                <h5 className="itemPeriod">2018 - 2019</h5>
                <span className="itemCompany">Goibibo-Makemytrip</span>
                <h4 className="itemTitle">Software Engineer</h4>
                <p>I was in the Bangalore and finally the Gurgaon office where I worked in the "GIA" (chat-bot) vertical. I also wrote an internal tool from scratch for the "Car" vertical.</p>
              </div>
              <div className="timelineItem">
                <h5 className="itemPeriod">2017 - 2018</h5>
                <span className="itemCompany">VideoKen.com</span>
                <h4 className="itemTitle">Software Engineer</h4>
                <p>Implemented the quiz system for the web app. Also built the videoken's AI player which was used by many organizations like NPTEL, ACM ICPC and more.</p>
              </div>
            </div>
          </div>
          <div>
            <h3>Education</h3>
            <div className="">
              <div className="timelineItem">
                <h5 className="itemPeriod">2021 - 2023</h5>
                <span className="itemCompany">Florida Tech</span>
                <h4 className="itemTitle">MS in Computer Information Science</h4>
                <p>I am pursuing a Master's degree from Florida Tech.</p>
              </div>
              <div className="timelineItem">
                <h5 className="itemPeriod">2013 - 2017</h5>
                <span className="itemCompany">Guru Gobind Singh Indraprastha University</span>
                <h4 className="itemTitle">B.Tech in Electronics &amp; Comm. Engg.</h4>
                <p></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// export default Work;

// import React, { createContext, useContext, useState } from 'react';

// const ThemeContext = createContext();

// export const ThemeProvider = ({ children }) => {
//   const [theme, setTheme] = useState('light');

//   const toggleTheme = () => {
//     setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
//   };

//   return (
//     <ThemeContext.Provider value={{ theme, toggleTheme }}>
//       {children}
//     </ThemeContext.Provider>
//   );
// };

// export const useTheme = () => {
//   const context = useContext(ThemeContext);
//   if (context === undefined) {
//     throw new Error('useTheme must be used within a ThemeProvider');
//   }
//   return context;
// };



// <div class="App"><a class="menu_icon"><svg stroke="currentColor" fill="#fff" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="30px" width="30px" xmlns="http://www.w3.org/2000/svg"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg></a><div id="menu" class="pt-5 d-none"><ul class="pt-3"><li><a href="#intro">Introduction</a></li><li><a href="#skills">Projects</a></li><li><a href="#work-ex">Work Experience</a></li><li><a href="#education">education</a></li><li><a href="#get-in-touch">Contact me</a></li></ul></div><section class="section" id="intro"><div class="cover"><div class="cover-img"><button class="see-more"><svg stroke="currentColor" fill="#fff" stroke-width="0" viewBox="0 0 16 16" class="down-arrow" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M1.553 6.776a.5.5 0 0 1 .67-.223L8 9.44l5.776-2.888a.5.5 0 1 1 .448.894l-6 3a.5.5 0 0 1-.448 0l-6-3a.5.5 0 0 1-.223-.67z"></path></svg></button></div><div class="cover-text text-white typewriter"><h2 class="step_1">Hi, I'm Karanjot Singh.</h2><h2 class="step_2">I design and build Web</h2><h2 class="step_3">and Mobile Applications.</h2></div><div class="text-center cover-right"><img src="/static/media/profile-2.72319fdaa6ff79eb8953.JPG" class="profile" height="200" width="200"><h2 class="name fs-40"><b>Karanjot Singh</b></h2><h4 class="city">Arlington, Texas</h4><a class="resume" href="/resume.pdf" target="_blank"><h4><svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg> Download Resume</h4></a><div class="social-links"><a href="https://www.linkedin.com/in/karanjotsingh1995/" target="_blank"><img src="data:image/png;base64,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"></a><a href="https://leetcode.com/Karanjot1995/" title="leetcode" target="_blank"><img src="/static/media/leetcode.c78fc082f2b4c496259f.png" class="leetcode"></a><a href="https://github.com/Karanjot1995" target="_blank"><img src="/static/media/github.987334e9f782cc505f25.png"></a><a href="https://twitter.com/sleepy_singh" target="_blank"><img src="data:image/png;base64,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"></a><a href="#"><img src="data:image/png;base64,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"></a></div></div></div></section><section class="skills section" id="skills"><div class="container-fluid text-center"><h2 class="heading text-uppercase"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 640 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M255.03 261.65c6.25 6.25 16.38 6.25 22.63 0l11.31-11.31c6.25-6.25 6.25-16.38 0-22.63L253.25 192l35.71-35.72c6.25-6.25 6.25-16.38 0-22.63l-11.31-11.31c-6.25-6.25-16.38-6.25-22.63 0l-58.34 58.34c-6.25 6.25-6.25 16.38 0 22.63l58.35 58.34zm96.01-11.3l11.31 11.31c6.25 6.25 16.38 6.25 22.63 0l58.34-58.34c6.25-6.25 6.25-16.38 0-22.63l-58.34-58.34c-6.25-6.25-16.38-6.25-22.63 0l-11.31 11.31c-6.25 6.25-6.25 16.38 0 22.63L386.75 192l-35.71 35.72c-6.25 6.25-6.25 16.38 0 22.63zM624 416H381.54c-.74 19.81-14.71 32-32.74 32H288c-18.69 0-33.02-17.47-32.77-32H16c-8.8 0-16 7.2-16 16v16c0 35.2 28.8 64 64 64h512c35.2 0 64-28.8 64-64v-16c0-8.8-7.2-16-16-16zM576 48c0-26.4-21.6-48-48-48H112C85.6 0 64 21.6 64 48v336h512V48zm-64 272H128V64h384v256z"></path></svg> Skills and <span>Abilities</span></h2></div><div class="container"><div class="grid"><div class="skill-box"><div class="skill-info d-flex flex-column align-items-center" style="
//     display: flex;
//     padding: 5px;
//     /* justify-content: center; */
// "><img src="../images/logos/react.png" alt="ReactJS"><span>ReactJS</span></div></div><div class="skill-box"><div class="skill-info d-flex flex-column align-items-center"><img src="../images/logos/express.png" alt="ExpressJS"><span>ExpressJS</span></div></div><div class="skill-box"><div class="skill-info d-flex flex-column align-items-center"><img src="../images/logos/node.png" alt="NodeJS"><span>NodeJS</span></div></div><div class="skill-box"><div class="skill-info d-flex flex-column align-items-center"><img src="../images/logos/redux.png" alt="Redux"><span>Redux</span></div></div><div class="skill-box"><div class="skill-info d-flex flex-column align-items-center"><img src="../images/logos/firebase.png" alt="Firebase"><span>Firebase</span></div></div><div class="skill-box"><div class="skill-info d-flex flex-column align-items-center"><img src="../images/logos/android.png" alt="Android"><span>Android</span></div></div><div class="skill-box"><div class="skill-info d-flex flex-column align-items-center"><img src="../images/logos/material.png" alt="MaterialUI"><span>MaterialUI</span></div></div><div class="skill-box"><div class="skill-info d-flex flex-column align-items-center"><img src="../images/logos/tailwind.png" alt="TailwindCSS"><span>TailwindCSS</span></div></div><div class="skill-box"><div class="skill-info d-flex flex-column align-items-center"><img src="../images/logos/bootstrap.png" alt="Bootstrap"><span>Bootstrap</span></div></div><div class="skill-box"><div class="skill-info d-flex flex-column align-items-center"><img src="../images/logos/sass.png" alt="Sass"><span>Sass</span></div></div><div class="skill-box"><div class="skill-info d-flex flex-column align-items-center"><img src="../images/logos/html.png" alt="HTML5"><span>HTML5</span></div></div><div class="skill-box"><div class="skill-info d-flex flex-column align-items-center"><img src="../images/logos/css.png" alt="CSS3"><span>CSS3</span></div></div><div class="skill-box"><div class="skill-info d-flex flex-column align-items-center"><img src="../images/logos/javascript.png" alt="JavaScript"><span>JavaScript</span></div></div><div class="skill-box"><div class="skill-info d-flex flex-column align-items-center"><img src="../images/logos/java.png" alt="Java"><span>Java</span></div></div><div class="skill-box"><div class="skill-info d-flex flex-column align-items-center"><img src="../images/logos/php.png" alt="PHP"><span>PHP</span></div></div><div class="skill-box"><div class="skill-info d-flex flex-column align-items-center"><img src="../images/logos/laravel.png" alt="Laravel"><span>Laravel</span></div></div><div class="skill-box"><div class="skill-info d-flex flex-column align-items-center"><img src="../images/logos/python.png" alt="Python"><span>Python</span></div></div><div class="skill-box"><div class="skill-info d-flex flex-column align-items-center"><img src="../images/logos/c.png" alt="C++"><span>C++</span></div></div><div class="skill-box"><div class="skill-info d-flex flex-column align-items-center"><img src="../images/logos/mongodb.png" alt="MongoDB"><span>MongoDB</span></div></div><div class="skill-box"><div class="skill-info d-flex flex-column align-items-center"><img src="../images/logos/mysql.png" alt="MySQL"><span>MySQL</span></div></div><div class="skill-box"><div class="skill-info d-flex flex-column align-items-center"><img src="../images/logos/postgresql.png" alt="PostgreSQL"><span>PostgreSQL</span></div></div><div class="skill-box"><div class="skill-info d-flex flex-column align-items-center"><img src="../images/logos/aws.png" alt="AWS"><span>AWS</span></div></div><div class="skill-box"><div class="skill-info d-flex flex-column align-items-center"><img src="../images/logos/heroku.png" alt="Heroku"><span>Heroku</span></div></div><div class="skill-box"><div class="skill-info d-flex flex-column align-items-center"><img src="../images/logos/gcp.png" alt="GCP"><span>GCP</span></div></div><div class="skill-box"><div class="skill-info d-flex flex-column align-items-center"><img src="../images/logos/jquery.png" alt="jQuery"><span>jQuery</span></div></div><div class="skill-box"><div class="skill-info d-flex flex-column align-items-center"><img src="../images/logos/git.png" alt="Git"><span>Git</span></div></div><div class="skill-box"><div class="skill-info d-flex flex-column align-items-center"><img src="../images/logos/github.png" alt="GitHub"><span>GitHub</span></div></div></div></div></section><section class="section projects text-center" id="projects"><div class="container-fluid text-center"><h2 class="heading text-uppercase"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 640 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M624 416H381.54c-.74 19.81-14.71 32-32.74 32H288c-18.69 0-33.02-17.47-32.77-32H16c-8.8 0-16 7.2-16 16v16c0 35.2 28.8 64 64 64h512c35.2 0 64-28.8 64-64v-16c0-8.8-7.2-16-16-16zM576 48c0-26.4-21.6-48-48-48H112C85.6 0 64 21.6 64 48v336h512V48zm-64 272H128V64h384v256z"></path></svg> Projects</h2></div><div class="wrapper m-auto"><div class="card"><img src="../images/dsa/1.png"><div class="info"><h3 class="card-title">DSA Prep</h3><div class="extra-content">Data Structures and Algorithms preperations app with file storage and code editor with ability to import questions from other users</div><p class="card-text">Tech Stack: Reactjs, Express, Nodejs, MySQL</p><button class="view">Expand</button></div><div class="title">DSA Prep</div></div><div class="card"><img src="../images/netflix/1.png"><div class="info"><h3 class="card-title">Netflix</h3><div class="extra-content">Netflix Clone Video Management System</div><p class="card-text">Tech Stack: Reactjs, Express, Nodejs, MySQL</p><button class="view">Expand</button></div><div class="title">Netflix</div></div><div class="card"><img src="../images/groomers/groomers-1.png"><div class="info"><h3 class="card-title">groomers.co.in</h3><div class="extra-content">E-commerce website for Indian business purposes</div><p class="card-text">Tech Stack: Reactjs, Express, Nodejs, MongoDB</p><button class="view">Expand</button></div><div class="title">groomers.co.in</div></div><div class="card"><img src="../images/social/social-1.png"><div class="info"><h3 class="card-title">social-web.co.in</h3><div class="extra-content">Post, like comment, chat, add Friend, signup, google Authentication etc.</div><p class="card-text">Tech Stack: Ejs, Express, Nodejs, MongoDB</p><button class="view">Expand</button></div><div class="title">social-web.co.in</div></div><div class="card"><img src="../images/wmt/wmt-1.png"><div class="info"><h3 class="card-title">Workplace Management Tool</h3><div class="extra-content">Post, like comment, chat, add Friend, signup, google Authentication etc.</div><p class="card-text">Tech Stack: Reactjs, Express, Nodejs, MongoDB</p><button class="view">Expand</button></div><div class="title">Workplace Management Tool</div></div><div class="card"><img src="../images/seo-1.png"><div class="info"><h3 class="card-title">SEO Automation Tool</h3><div class="extra-content">An automation tool for SEO</div><p class="card-text">Tech Stack: Reactjs, Express, Nodejs, MongoDB</p><button class="view">Expand</button></div><div class="title">SEO Automation Tool</div></div></div><h3 class="sub-heading">Work Projects</h3><div class="wrapper m-auto"><div class="card"><img src="../images/collegedunia.png"><div class="info"><h3 class="card-title">collegedunia.com</h3><div class="extra-content">Company: Collegedunia web Pvt. Ltd.</div><p class="card-text">Tech Stack: Reactjs, Express, Nodejs, MongoDB</p></div><div class="title">collegedunia.com</div></div><div class="card"><img src="../images/discernliving.png"><div class="info"><h3 class="card-title">discernliving.com</h3><div class="extra-content">Company: Hogarth Worldwide</div><p class="card-text">Tech Stack: Reactjs, Express, Nodejs (Full Stack)</p></div><div class="title">discernliving.com</div></div><div class="card"><img src="../images/wmt/wmt-1.png"><div class="info"><h3 class="card-title">Workplace Management Tool</h3><div class="extra-content">Company: Hogarth Worldwide</div><p class="card-text">Tech Stack: MongoDb, Reactjs, Express, Nodejs (Full Stack)</p></div><div class="title">Workplace Management Tool</div></div><div class="card"><img src="../images/cg.png"><div class="info"><h3 class="card-title">Corporate Gurukul</h3><div class="extra-content">Company: Hogarth Worldwide</div><p class="card-text">Tech Stack: HTML, CSS, JQuery (Frontend)</p></div><div class="title">Corporate Gurukul</div></div><div class="card"><img src="../images/lentra.png"><div class="info"><h3 class="card-title">Lentra.ai</h3><div class="extra-content">Company: Hogarth Worldwide</div><p class="card-text">Tech Stack: HTML, CSS, Javascript (Frontend)</p></div><div class="title">Lentra.ai</div></div></div><div class="m-md-5 pd-t-5 slider-container"><h3 class="sub-heading">Static Designs</h3><div class="slick-slider center slick-initialized" dir="ltr"><button type="button" data-role="none" class="slick-arrow slick-prev" style="display: block;"> Previous</button><div class="slick-list"><div class="slick-track" style="width: 11970px; opacity: 1; transform: translate3d(-1330px, 0px, 0px);"><div data-index="-1" tabindex="-1" class="slick-slide slick-cloned" aria-hidden="true" style="width: 1330px;"><div><div class="text-center slide-card" tabindex="-1" style="width: 50%; display: inline-block;"><a class="expanded" href="https://karanjot1995.github.io/elle.html" target="_blank"><img src="/static/media/design_6.128ebb4504024a3f7dcf.png"></a><h3>Elle_reve-design</h3><p></p></div></div></div><div data-index="0" class="slick-slide slick-active slick-current" tabindex="-1" aria-hidden="false" style="outline: none; width: 1330px;"><div><div class="text-center slide-card" tabindex="-1" style="width: 50%; display: inline-block;"><a class="expanded" href="https://karanjot1995.github.io/chatbot.html" target="_blank"><img src="/static/media/chatbot.08ec939e93e202aaf85c.png"></a><h3>chatbot</h3><p></p></div><div class="text-center slide-card" tabindex="-1" style="width: 50%; display: inline-block;"><a class="expanded" href="https://karanjot1995.github.io/resume.html" target="_blank"><img src="/static/media/design_1.78ca2c3425f2f41c09a1.png"></a><h3>Resume-design</h3><p></p></div></div></div><div data-index="1" class="slick-slide" tabindex="-1" aria-hidden="true" style="outline: none; width: 1330px;"><div><div class="text-center slide-card" tabindex="-1" style="width: 50%; display: inline-block;"><a class="expanded" href="https://karanjot1995.github.io/terracotta.html" target="_blank"><img src="/static/media/design_2.baf6ce3f9240c551c088.png"></a><h3>Terracotta</h3><p></p></div><div class="text-center slide-card" tabindex="-1" style="width: 50%; display: inline-block;"><a class="expanded" href="https://karanjot1995.github.io/facebook.html" target="_blank"><img src="/static/media/design_3.a7e869ca55c366e48c34.png"></a><h3>Facebook-design</h3><p></p></div></div></div><div data-index="2" class="slick-slide" tabindex="-1" aria-hidden="true" style="outline: none; width: 1330px;"><div><div class="text-center slide-card" tabindex="-1" style="width: 50%; display: inline-block;"><a class="expanded" href="https://karanjot1995.github.io/golden.html" target="_blank"><img src="/static/media/design_4.bd0c841569d6b5094e68.png"></a><h3>Golden-design</h3><p></p></div><div class="text-center slide-card" tabindex="-1" style="width: 50%; display: inline-block;"><a class="expanded" href="https://karanjot1995.github.io/focus.html" target="_blank"><img src="/static/media/design_5.edd376f70730c5e4fa50.png"></a><h3>Focus-design</h3><p></p></div></div></div><div data-index="3" class="slick-slide" tabindex="-1" aria-hidden="true" style="outline: none; width: 1330px;"><div><div class="text-center slide-card" tabindex="-1" style="width: 50%; display: inline-block;"><a class="expanded" href="https://karanjot1995.github.io/elle.html" target="_blank"><img src="/static/media/design_6.128ebb4504024a3f7dcf.png"></a><h3>Elle_reve-design</h3><p></p></div></div></div><div data-index="4" tabindex="-1" class="slick-slide slick-cloned" aria-hidden="true" style="width: 1330px;"><div><div class="text-center slide-card" tabindex="-1" style="width: 50%; display: inline-block;"><a class="expanded" href="https://karanjot1995.github.io/chatbot.html" target="_blank"><img src="/static/media/chatbot.08ec939e93e202aaf85c.png"></a><h3>chatbot</h3><p></p></div><div class="text-center slide-card" tabindex="-1" style="width: 50%; display: inline-block;"><a class="expanded" href="https://karanjot1995.github.io/resume.html" target="_blank"><img src="/static/media/design_1.78ca2c3425f2f41c09a1.png"></a><h3>Resume-design</h3><p></p></div></div></div><div data-index="5" tabindex="-1" class="slick-slide slick-cloned" aria-hidden="true" style="width: 1330px;"><div><div class="text-center slide-card" tabindex="-1" style="width: 50%; display: inline-block;"><a class="expanded" href="https://karanjot1995.github.io/terracotta.html" target="_blank"><img src="/static/media/design_2.baf6ce3f9240c551c088.png"></a><h3>Terracotta</h3><p></p></div><div class="text-center slide-card" tabindex="-1" style="width: 50%; display: inline-block;"><a class="expanded" href="https://karanjot1995.github.io/facebook.html" target="_blank"><img src="/static/media/design_3.a7e869ca55c366e48c34.png"></a><h3>Facebook-design</h3><p></p></div></div></div><div data-index="6" tabindex="-1" class="slick-slide slick-cloned" aria-hidden="true" style="width: 1330px;"><div><div class="text-center slide-card" tabindex="-1" style="width: 50%; display: inline-block;"><a class="expanded" href="https://karanjot1995.github.io/golden.html" target="_blank"><img src="/static/media/design_4.bd0c841569d6b5094e68.png"></a><h3>Golden-design</h3><p></p></div><div class="text-center slide-card" tabindex="-1" style="width: 50%; display: inline-block;"><a class="expanded" href="https://karanjot1995.github.io/focus.html" target="_blank"><img src="/static/media/design_5.edd376f70730c5e4fa50.png"></a><h3>Focus-design</h3><p></p></div></div></div><div data-index="7" tabindex="-1" class="slick-slide slick-cloned" aria-hidden="true" style="width: 1330px;"><div><div class="text-center slide-card" tabindex="-1" style="width: 50%; display: inline-block;"><a class="expanded" href="https://karanjot1995.github.io/elle.html" target="_blank"><img src="/static/media/design_6.128ebb4504024a3f7dcf.png"></a><h3>Elle_reve-design</h3><p></p></div></div></div></div></div><button type="button" data-role="none" class="slick-arrow slick-next" style="display: block;"> Next</button></div></div></section><section class="section work-ex" id="work-ex"><div class="container-fluid text-center"><h2 class="heading text-uppercase" style="
//     color: #000;
//     /* text-align: left; */
// "><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M320 336c0 8.84-7.16 16-16 16h-96c-8.84 0-16-7.16-16-16v-48H0v144c0 25.6 22.4 48 48 48h416c25.6 0 48-22.4 48-48V288H320v48zm144-208h-80V80c0-25.6-22.4-48-48-48H176c-25.6 0-48 22.4-48 48v48H48c-25.6 0-48 22.4-48 48v80h512v-80c0-25.6-22.4-48-48-48zm-144 0H192V96h128v32z"></path></svg> Work <span>Experience</span></h2></div><div id="cd-timeline" class="cd-container"><div class="cd-timeline-block"><div class="cd-timeline-img cd-picture"></div><div class="cd-timeline-content"><h2>Megger, Dallas</h2><div class="timeline-content-info d-md-flex"><span class="timeline-content-info-title d-flex"><span class="center-dot">•</span>Software Developer</span><span class="timeline-content-info-date"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M12 192h424c6.6 0 12 5.4 12 12v260c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V204c0-6.6 5.4-12 12-12zm436-44v-36c0-26.5-21.5-48-48-48h-48V12c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v52H160V12c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v52H48C21.5 64 0 85.5 0 112v36c0 6.6 5.4 12 12 12h424c6.6 0 12-5.4 12-12z"></path></svg>July 2023 – Current</span></div><p>• Functioned and designed Megger web portal(demoassets.com) for handling equipment delivery, management and tracking using PHP Laravel, Vuejs, Javascript and MySql and deployed on AWS.</p><p>• Singlehandedly took care of all the processes from design and development to testing.</p><p>• Building the rental platform using Vuejs and built RESTful APIs using PHP Laravel to serve the data stored in MYSQL db. This is helping the company cut the cost for paid platforms by almost 75%.</p><ul class="content-skills"><li>PHP</li><li>Laravel</li><li>HTML</li><li>CSS</li><li>Javascript</li><li>VueJs</li><li>MySQL</li><li>AWS</li><li>REST API</li></ul></div></div><div class="cd-timeline-block"><div class="cd-timeline-img cd-picture"></div><div class="cd-timeline-content"><h2>Megger, Dallas</h2><div class="timeline-content-info d-md-flex"><span class="timeline-content-info-title d-flex"><span class="center-dot">•</span>Software Developer Intern</span><span class="timeline-content-info-date"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M12 192h424c6.6 0 12 5.4 12 12v260c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V204c0-6.6 5.4-12 12-12zm436-44v-36c0-26.5-21.5-48-48-48h-48V12c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v52H160V12c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v52H48C21.5 64 0 85.5 0 112v36c0 6.6 5.4 12 12 12h424c6.6 0 12-5.4 12-12z"></path></svg>June 2022 - May 2023</span></div><p>• Functioned and designed Megger web portal(demoassets.com) for handling equipment delivery and management using PHP Laravel, Vuejs, Javascript and MySql.</p><p>• Validated, tested and wrote code to maximize the performance and deliver the best in a short period of time.</p><ul class="content-skills"><li>PHP</li><li>Laravel</li><li>HTML</li><li>CSS</li><li>Javascript</li><li>VueJs</li><li>MySQL</li><li>AWS</li><li>REST API</li></ul></div></div><div class="cd-timeline-block"><div class="cd-timeline-img cd-picture"></div><div class="cd-timeline-content"><h2>Collegedunia Web Pvt Ltd</h2><div class="timeline-content-info d-md-flex"><span class="timeline-content-info-title d-flex"><span class="center-dot">•</span>Software Engineer</span><span class="timeline-content-info-date"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M12 192h424c6.6 0 12 5.4 12 12v260c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V204c0-6.6 5.4-12 12-12zm436-44v-36c0-26.5-21.5-48-48-48h-48V12c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v52H160V12c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v52H48C21.5 64 0 85.5 0 112v36c0 6.6 5.4 12 12 12h424c6.6 0 12-5.4 12-12z"></path></svg>March 2021 - August 2021</span></div><p>• Worked with collegedunia.com from March 2021 to August 2021 as a senior software engineer on their main education portal(collegedunia.com) and led a team of 10 using Nextjs, Reactjs, Nodejs, HTML and CSS.</p><p>• Defined and conducted the project on various stages including research, conceptualization, testing and implementation and Created many components like dynamic forms, search etc. and APIs.</p><p>• Achieved a 15% reduction in software development cycle time by optimizing the deployment pipeline and implementing automated testing.</p><ul class="content-skills"><li>HTML</li><li>CSS</li><li>Javascript</li><li>NextJs</li><li>ReactJs</li><li>NodeJs</li><li>MySQL</li><li>REST API</li></ul></div></div><div class="cd-timeline-block"><div class="cd-timeline-img cd-picture"></div><div class="cd-timeline-content"><h2>Hogarth Worldwide</h2><div class="timeline-content-info d-md-flex"><span class="timeline-content-info-title d-flex"><span class="center-dot">•</span>Software Engineer</span><span class="timeline-content-info-date"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M12 192h424c6.6 0 12 5.4 12 12v260c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V204c0-6.6 5.4-12 12-12zm436-44v-36c0-26.5-21.5-48-48-48h-48V12c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v52H160V12c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v52H48C21.5 64 0 85.5 0 112v36c0 6.6 5.4 12 12 12h424c6.6 0 12-5.4 12-12z"></path></svg>July 2018 - March 2021</span></div><p>• Led a team for 4 for Discernliving.com website using technologies like Reactjs (javascript framework), Nodejs, Expressjs, HTML and CSS.</p><p>• Developed and Maintained BMW India website as a team lead on AEM Platform and used HTML, CSS and javascript for development. Increased user engagement by 15% through the implementation of responsive design and interactive user interfaces.</p><p>• Developed a Workplace Management Tool for the company for timesheet management, HR management and employee management and cut down employee management time by a significant 60% using Reactjs javascript framework, Redux, Nodejs, Express and Mongodb.</p><p>• Achieved a 20% improvement in website loading speed by optimizing frontend code and implementing caching strategies.</p><p>• Automated the SEO process by creating an SEO Tool using Reactjs javascript framework, Redux and Nodejs.</p><ul class="content-skills"><li>HTML</li><li>CSS</li><li>Javascript</li><li>ReactJs</li><li>Redux</li><li>NodeJs</li><li>MySQL</li><li>MongoDB</li><li>Java</li><li>AEM</li><li>Google Cloud Platform</li><li>REST API</li></ul></div></div></div></section><section class="section education light" id="education"><div class="container-fluid text-center"><h2 class="heading text-uppercase text-center"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M256 89.61L22.486 177.18 256 293.937l111.22-55.61-104.337-31.9A16 16 0 0 1 256 208a16 16 0 0 1-16-16 16 16 0 0 1 16-16l-2.646 8.602 18.537 5.703a16 16 0 0 1 .008.056l27.354 8.365L455 246.645v12.146a16 16 0 0 0-7 13.21 16 16 0 0 0 7.293 13.406C448.01 312.932 448 375.383 448 400c16 10.395 16 10.775 32 0 0-24.614-.008-87.053-7.29-114.584A16 16 0 0 0 480 272a16 16 0 0 0-7-13.227v-25.42L413.676 215.1l75.838-37.92L256 89.61zM119.623 249L106.5 327.74c26.175 3.423 57.486 18.637 86.27 36.627 16.37 10.232 31.703 21.463 44.156 32.36 7.612 6.66 13.977 13.05 19.074 19.337 5.097-6.288 11.462-12.677 19.074-19.337 12.453-10.897 27.785-22.128 44.156-32.36 28.784-17.99 60.095-33.204 86.27-36.627L392.375 249h-6.25L256 314.063 125.873 249h-6.25z"></path></svg>Education</h2></div><ul class="cards"><li class="cards__item"><div class="card text-center"><div class="card__content"><div class="degree">Master of Science in Computer Science</div><p class="university">The University of Texas at Arlington</p><p class="card__text">2021-2023</p></div></div></li><li class="cards__item"><div class="card  text-center"><div class="card__content"><div class="degree">Bachelor of Technology in Electronics and Communication</div><p class="university">Indraprastha University, Delhi</p><p class="card__text">2013-2017</p></div></div></li></ul></section><section class="section get-in-touch dark text-center" id="get-in-touch"><h3>Wanna get in touch or talk about a project?</h3><p>Feel free to contact me via email at <br>karan.nanda97@gmail.com<br></p></section></div>



// .fs-30{
// 	font-size: 30px;
// }
// .fs-40{
// 	font-size: 40px;
// }
// .w-45{
// 	width:45%
// }
// .w-80{
// 	width:80%;
// }
// .pd-t-5{
//   padding-top:3rem;
// }
// .resume{
// 	text-decoration: none;
// }
// body{
// 	font-family: "Poppins", sans-serif;
// }
// .heading{
// 	font-family: "Poppins", sans-serif;
// 	margin-bottom: 30px;
// 	font-size: 3.5rem;
// 	// display: flex;
// 	// align-items: center;
//   color: rgb(32, 32, 32);
//   font-weight: 800;
//   text-align: center;
// 	svg{
// 		margin-bottom: 10px;
// 	}
// }

// .sub-heading{
// 	font-size: 35px;
// 	margin-bottom: 2rem;
// }
// .cover{
//     background: #000;
// }
// #intro{
// 	padding:0
// }
// section{
// 	padding: 4rem;
// 	p{
// 		font-size: 20px;
// 	}
// }
// .light{
// 	// background: linear-gradient(to bottom, #d8e0ef, #bba2ed);;
// 	background-color: orange;
// }
// .dark{
// 	background-color: #1d1c1c;
// 	color: #8a8a8a;
// 	h2,h3{
// 		color:#fff
// 	}
// }
// .cover-img{
//     height:100vh;
//     width:100%;
//     opacity: 0.2;
//     background-image: url('../images/cover1.jpeg');
//     background-size: cover;
// }
// .name, .city{
// 	color: #696969;
// }
// .cover-text{
//     position: absolute;
//     top:35%;
//     padding: 2rem 4rem;
//     font-size: 45px;
// }

// .see-more{
//     position: absolute;
//     bottom: 0;
//     left:50%;
//     transform: translate(-50%,0);
//     background: transparent;
//     color:white;
//     border:none;
// }

// .down-arrow{
//     width:100px;
//     height:auto;
// }
// .cover-right{
// 	position:absolute;
// 	top:50%;
// 	right:0;
// 	transform: translate(-50%,-50%);
// 	.profile{
// 		border-radius: 50%;
// 	}
// }
// .social-links{
// 	a{
// 		padding: 6px;
		
// 		border-radius: 50%;
// 	}
// 	img{
// 		height:40px;
// 		width: 40px;
// 		margin:4px;
// 	}
// }



// .typewriter {
// 	font-family: monospace;
// 	letter-spacing: 0.01rem;

// 	h2 {
// 		white-space: nowrap; /* keep text in one line */
// 		overflow: hidden; /* hide text behind the cursor */
// 		font-family: monospace;
// 		font-size: 2.6rem;
// 		color: #fff;
// 	}
// 	.step_1{
// 		animation: typing 1.5s steps(30, end) , blink-caret .2s steps(30, end) 9;
// 	}
// 	.step_2{
// 		border-right: none;
// 		animation: typing_2 1.5s steps(28, end) 1s 1 normal both, blink-caret .2s steps(28, end) 9;
// 		-webkit-animation-delay: 2s;
// 		animation-delay: 2s;
// 	}
// 	.step_3{
// 		border-right: none;
// 		animation: typing 1.5s steps(30, end) 1s 1 normal both, blink-caret .2s steps(30, end) 9;
// 		-webkit-animation-delay: 3.7s;
// 		animation-delay: 3.7s;
// 	}
// }


// /* The typing effect */
// @keyframes typing {
//   from { width: 0 }
//   to { width: 100% }
// }
// @keyframes typing_2 {
//   from { width: 0 }
//   to { width: 96% }
// }

// /* The typewriter cursor effect */
// @keyframes blink-caret {
//   from, to {   border-right: none}
//   50% { border-right: .15em solid orange; /* The typwriter cursor */}
// }


// #projects{
// 	min-height: 100vh;
// 	.slick-slider{
// 		font-family: sans-serif;
// 		.slide-card{
// 			padding:20px;
// 			border-radius: 5px;
// 		}
// 		h3{
// 			padding:10px 0 0 0;
// 		}
// 		p{
// 			font-size: 15px;
// 			margin-bottom: 4px
// 		}
// 		img{
// 			width:100%;
// 			padding: 5px;
// 			border-radius: 15px;
// 			height:auto;
// 			margin:auto;
// 		}
// 	}

// }

// .slick-slide>div{
//   display: flex;
// }

// .education , .work-ex{
// 	padding:5% 10%;
// 	h3{
// 		max-width: 80%;
// 		margin:auto;
// 		font-weight: bold;
// 	}
// 	// p{
// 	// 	max-width: 80%;
// 	// 	margin: auto;
// 	// }
// }



// #menu {
//   position: fixed;
//   top: 0;
//   right: 0;
//   width: 300px;
//   height: 100%;
//   background: #000;
// 	opacity: 0.8;
// 	z-index: 3;
// }

// #menu ul {
//   margin: 0;
//   padding: 0;
// }

// #menu ul li {
//   margin: 0 10px;
//   list-style: none;
//   display: block;
//   line-height: 30px;
//   border-bottom: 1px solid #fff;
// }

// #menu ul li.active {
//   background: #fff;
// }

// #menu ul li a {
//   padding: 10px 0;
//   color: #949494;
//   font-size: 17px;
//   font-weight: bold;
//   text-transform: uppercase;
//   display: block;
//   text-decoration: none;
// }

// #menu ul li:hover {
//   border-bottom: 1px solid #fff;
// }

// #menu ul li a:hover, #menu ul li:active {
//   color: #fff;
// }

// .menu_icon {
//   position: fixed;
//   right: 20px;
//   top: 20px;
// 	z-index: 1000;
// 	color: rgb(226, 226, 226);
// 	cursor: pointer;
// }
// .menu_icon:hover{
// 	color: rgb(209, 209, 209);
// }


// .github-link{
// 	.github-logo{
// 		height:20px!important;
// 		width:20px!important;
// 		margin:3px!important;
// 	}
// 	font-size: 18px;
// 	align-items: center;
// }


// .skills, .work-ex, .get-in-touch{
// 	h2 {
// 		color: #fff;
// 	}
// 	.heading span {
// 		color: #f900ff;
// 	}
// 	background: linear-gradient(to bottom, #05679e, #360891);
// }

// .skills {
// 	min-height: 90vh;
//   background: linear-gradient(to bottom, #05679e, #360891);

// 	.grid {
// 		grid-template-columns: repeat(6, 1fr);
// 		display: grid;
// 		flex-wrap: wrap;
// 		gap: 1.5rem;
// 	}
// 	.container {
// 		// background: rgba(0, 0, 22, 0.4);
// 		color: #fff;
// 		border-radius: 1rem;
// 		padding: 2rem;
// 		width: 90%;
// 		margin: auto;
// 		margin-top: 2rem;
// 	}
// 	.skill-box {
// 		margin-bottom: 10px;
// 		padding: 10px;
// 		border-radius: 1rem;
// 		box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
// 		background: rgba(0, 0, 22, 0.9);
// 		transition: 0.2s;
// 		&:hover {
// 			box-shadow: 0 7px 9px rgba(0, 2, 68, 0.8) !important;
// 			background-color: rgba(0, 0, 0, 0.9) !important;
// 		};
// 		.skill-info {
// 			gap: 1rem;
// 			margin-top: 1rem;
// 			img{
// 				height:40px;
// 			}
// 			i {
// 				font-size: 4rem;
// 			}
// 			span {
// 				font-size: 1.5rem;
// 				font-weight: 500;
// 				font-family: "Poppins";
// 				margin-left: 0.5rem;
// 			}
// 		}
// 	}
// }






// .cd-container {
// 	margin: 0 auto;
// 	background: #123f5d;
// 	padding: 0 10%;
// 	border-radius: 2px;
// 	&:after {
// 		content: '';
// 		display: table;
// 		clear: both;
// 	}
// }


// #cd-timeline {
// position: relative;
// padding: 2em 0;
// margin-top: 2em;
// margin-bottom: 2em;
// }
// #cd-timeline::before {
// content: '';
// position: absolute;
// top: 0;
// left: 25px;
// height: 100%;
// width: 4px;
// background: #7E57C2;
// }


// .education{

// 	img {
// 		height: auto;
// 		max-width: 100%;
// 		vertical-align: middle;
// 	}

	
// 	.cards {
// 		list-style: none;
// 		margin: 0;
// 		padding: 0;
// 	}

// 	.cards__item {
// 		padding: 1rem;
// 	}

// 	.card {
// 		background-color: white;
// 		border-radius: 0.25rem;
// 		box-shadow: 0 20px 40px -14px rgba(0,0,0,0.25);
// 		display: flex;
// 		flex-direction: column;
// 		overflow: hidden;
// 		&:hover {
// 			.card__image {
// 				filter: contrast(100%);
// 			}
// 		}
// 	}

// 	.card__content {
// 		display: flex;
// 		flex: 1 1 auto;
// 		flex-direction: column;
// 		padding: 1rem;
// 	}
// 	.degree {
// 		color: #16189e;
// 		font-size: 20px;
// 		font-weight: 300;
// 		letter-spacing: 2px;
// 		text-transform: uppercase;
// 		margin-bottom: 15px;
// 	}

// 	.university{
// 		font-size: 17px;
// 	}
	
// 	.card__text {
// 		font-size: 15px;
// 		color:#7E57C2;
// 	}

// }


// .cd-timeline-block {
// 	position: relative;
// 	margin: 2em 0;
// }
// .cd-timeline-block:after {
// 	content: "";
// 	display: table;
// 	clear: both;
// }
// .cd-timeline-block:first-child {
//   margin-top: 0;
// }
// .cd-timeline-block:last-child {
//   margin-bottom: 0;
// }

// .cd-timeline-img {
// position: absolute;
// top: 8px;
// left: 12px;
// width: 30px;
// height: 30px;
// border-radius: 50%;
// box-shadow: 0 0 0 4px #7E57C2, inset 0 2px 0 rgba(0, 0, 0, 0.08), 0 3px 0 4px rgba(0, 0, 0, 0.05);
// }
// .cd-timeline-img {
// background: #673AB7;
// }


// .cd-timeline-content {
// 	position: relative;
// 	margin-left: 60px;
// 	margin-right: 30px;
// 	background: rgba(0,0,22,.9);
// 	border-radius: 2px;
// 	padding: 1em;
// 	.timeline-content-info {
// 		background: #123f5d;
// 		padding: 5px 10px;
// 		color: rgba(255,255,255,0.7);
// 		font-size: 12px;
// 		box-shadow:  inset 0 2px 0 rgba(0, 0, 0, 0.08);
// 		border-radius: 2px;
// 		i {
// 			margin-right: 5px;
// 		}
// 		.timeline-content-info-title, .timeline-content-info-date {  
// 			width: calc(50% - 2px);
// 			display: flex;
// 			align-items: center;
// 			svg{
// 				margin-right: 5px;
// 			}
// 		}
// 		@media (max-width: 500px) {
// 			.timeline-content-info-title, .timeline-content-info-date {  
// 				display: block;
// 				width:100%;
// 			} 
// 		}
// 	}
// 	.content-skills {
// 		font-size: 12px;
// 		padding:0;
// 		margin-bottom: 0;
// 		display:flex;
// 		flex-wrap: wrap;
// 		justify-content: center;
// 		li {
// 			background: #123f5d;
// 			border-radius: 2px;
// 			display: inline-block;
// 			padding: 2px 10px;
// 			color: rgba(255,255,255,0.7);
// 			margin: 3px 2px;
// 			text-align: center;
// 			flex-grow: 1;
// 		}
// 	}
// }
// .cd-timeline-content:after {
// content: "";
// display: table;
// clear: both;
// }
// .cd-timeline-content h2 {
// color: rgba(255,255,255,.9);
// margin-top:0;
// margin-bottom: 5px;
// }
// .cd-timeline-content p, .cd-timeline-content .cd-date {
// color: rgba(255,255,255,.7);
// font-size: 13px;
// font-size: 0.8125rem;
// }
// .cd-timeline-content .cd-date {
// display: inline-block;
// }
// .cd-timeline-content p {
// margin: 1em 0;
// line-height: 1.6;
// }

// .cd-timeline-content::before {
// content: '';
// position: absolute;
// top: 16px;
// right: 100%;
// height: 0;
// width: 0;
// border: 7px solid transparent;
// border-right: 7px solid rgba(0,0,22,.9);
// }



// @media screen and (max-width:768px) {
// 	.section{
// 		// padding: 3rem 1rem;
// 	}
// 	.m-sm-2{
// 		margin: 2rem!important;
// 	}
// 	.cover-right{
// 		width:80%;
// 		top:40%;
// 		left: 50%;
// 		transform: translate(-50%,-50%);
// 	}
// 	.cover-text{
// 		top:auto;
//     bottom: 10%;
//     padding: 2rem 4rem;
//     font-size: 20px;
// 		height: max-content;
// 		// text-align: center;
//   }

// 	//-------Typewriter-------//

// 	.typewriter{
// 		width: 100%;
// 		padding: 2rem 4rem;
// 		margin: auto!important;
// 		h2{
// 			font-size: 20px;
// 		}
// 	}

// 	.section{
// 		padding: 3rem 1rem;
// 		p{
// 			font-size: 15px;
// 		}
// 	}
// 	.heading{
// 		font-size: 28px;
// 	}
// 	.sub-heading{
// 		font-size: 25px;
// 	}
// 	h2,h3{
// 		font-size: 20px;;
// 	}

// 	.slick-dots li button:before{
// 		font-size: 10px!important;
// 	}

// 	.projects{
// 		// .slider-container{
// 		// 	margin:3rem 2rem;
// 		// }
// 		.slide-card{
// 			padding:0!important;
// 		}
// 		.expanded img {
// 			height: 170px;
// 			width:95%;
// 	  }
// 		.thumbnail img {
// 			width: 33.3%;
// 			height: 70px;
// 			display: inline;
// 	  }
// 	}

// 	.education , .work-ex{
// 		// padding:5% 10%;
// 		h3{
// 			// max-width: 90%;
// 			font-size: 18px;
// 		}
// 		p{
// 			// max-width: 90%;
// 			font-size: 13px;
// 		}
// 	}
// 	.get-in-touch{
// 		padding: 3rem;;
// 	}
// }



// @media screen and (max-width: 1000px) {
// 	.skills .grid {
// 		grid-template-columns: repeat(3, 1fr);
// 		display: grid;
// 		flex-wrap: wrap;
// 		gap: 1rem;
// 	}
// }
// @media screen and (max-width: 600px) {
//   .skills .container {
//     padding: 0;
//   }
//   .skills{
// 		.container {
// 			margin-top: 5px;
// 			width: 100%;
// 		}
// 		.grid {
// 			grid-template-columns: repeat(2, 1fr);
// 			margin: 1rem;
// 			padding: 2rem 0.2rem 2rem 0.2rem;
// 			gap: 1rem;
// 		}
// 	} 
// }

// @media only screen and (min-width: 768px) {
// 	.cd-timeline-content h2 {
// 		font-size: 20px;
// 		// font-size: 1.25rem;
// 	}
// 	.cd-timeline-content p {
// 		font-size: 16px;
// 		font-size: 1rem;
// 	}
// 	.cd-timeline-content .cd-read-more, .cd-timeline-content .cd-date {
// 		font-size: 14px;
// 		font-size: 0.875rem;
// 	}
// }


// @media only screen and (min-width: 1170px) {
// 	#cd-timeline {
// 		margin-top: 3em;
// 		margin-bottom: 3em;
// 	}
// 	#cd-timeline::before {
// 		left: 50%;
// 		margin-left: -2px;
// 	}
// 	.cd-timeline-block {
// 		margin: 4em 0;
// 		margin-top:-12%;
// 		&:last-child{
// 			margin-top:-17%;
// 		}
// 	}
// 	.cd-timeline-block:first-child {
// 		margin-top: 0;
		
// 	}
// 	.cd-timeline-block:last-child {
// 		margin-bottom: 0;
// 	}
// 	.cd-timeline-img {
// 		width: 30px;
// 		height: 30px;
// 		left: 50%;
// 		margin-left: -15px;
// 		margin-top: 15px;
// 		/* Force Hardware Acceleration in WebKit */
// 		-webkit-transform: translateZ(0);
// 		-webkit-backface-visibility: hidden;
// 	}
// 	.cd-timeline-content {
// 		color: white;
// 		margin-left: 0;
// 		padding: 1.6em;
// 		width: 40%;
// 		margin: 0 5%
// 	}
// 	.cd-timeline-content::before {
// 		top: 24px;
// 		left: 100%;
// 		border-color: transparent;
// 		border-left-color: rgba(0,0,22,.9);
// 	}
// 	.cd-timeline-content .cd-date {
// 		position: absolute;
// 		width: 100%;
// 		left: 122%;
// 		top: 6px;
// 		font-size: 16px;
// 		font-size: 1rem;
// 	}
// 	.cd-timeline-block:nth-child(even) .cd-timeline-content {
// 		float: right;
// 	}
// 	.cd-timeline-block:nth-child(even) .cd-timeline-content::before {
// 		top: 24px;
// 		left: auto;
// 		right: 100%;
// 		border-color: transparent;
// 		border-right-color: rgba(0,0,22,.9);
// 	}
// 	.cd-timeline-block:nth-child(even) .cd-timeline-content .cd-read-more {
// 		float: right;
// 	}
// 	.cd-timeline-block:nth-child(even) .cd-timeline-content .cd-date {
// 		left: auto;
// 		right: 122%;
// 		text-align: right;
// 	}
// }



// .close-icon{
// 	text-align: right;
// 	margin-bottom: 20px;
// 	svg{
// 		font-size: 30px;
// 	}
// 	&:hover{
// 		cursor: pointer;
// 	}
// }

// .projects{
// 	background: orange;
// 	.wrapper {
// 		// display: flex;
// 		grid-template-columns: repeat(3, 1fr);
// 		gap: 1.5rem;
// 		display: grid;
// 		width: 90%;
// 		// justify-content: space-around;
// 	}
	
// 	.card {
// 		// width: 280px;
// 		height: 320px;
// 		border-radius: 15px;
// 		margin-bottom: 30px;
// 		background: white;
// 		position: relative;
// 		display: flex;
// 		align-items: flex-end;
// 		transition: 0.4s ease-out;
// 		box-shadow: 0px 7px 10px rgba(black, 0.5);

// 		.title{
// 			color:#fff;
// 			z-index: 3;
// 			background-color: #0d67d7;
// 			width:100%;
// 			border-radius: 0px 0px 15px 15px ;
// 			height: 40px;
// 			vertical-align: center;
// 			font-size: 1.5rem;
// 			display: flex;
// 			align-items: center;
// 			justify-content: center;
	
// 		}
	
// 		&:hover {
// 			padding: 1rem;
// 			transform: translateY(20px);
	
// 			&:before {
// 				opacity: 1;
// 			}
// 			.title {
// 				opacity: 0;
// 			}
	
// 			.info {
// 				opacity: 1;
// 				transform: translateY(30px);
// 				margin: auto;
// 			}
// 		}
	
// 		&:before {
// 			content: "";
// 			position: absolute;
// 			top: 0;
// 			left: 0;
// 			display: block;
// 			width: 100%;
// 			height: 100%;
// 			border-radius: 15px;
// 			background: rgba(black, 0.6);
// 			z-index: 2;
// 			transition: 0.5s;
// 			opacity: 0;
// 		}
	
// 		img {
// 			width: 100%;
// 			height: 100%;
// 			object-fit: cover;
// 			position: absolute;
// 			top: 0;
// 			left: 0;
// 			border-radius: 15px;
// 		}
	
// 		.info {
// 			position: relative;
// 			z-index: 3;
// 			color: white;
// 			opacity: 0;
// 			transform: translateY(30px);
// 			transition: 0.5s;
// 			margin:auto;
	
// 			h1 {
// 				margin: 0;
// 			}
	
// 			p {
// 				letter-spacing: 1px;
// 				font-size: 15px;
// 				margin-top: 8px;
// 			}
	
// 			button {
// 				padding: 0.6rem;
// 				outline: none;
// 				border: none;
// 				border-radius: 3px;
// 				background: white;
// 				color: black;
// 				font-weight: bold;
// 				cursor: pointer;
// 				transition: 0.4s ease;
	
// 				&:hover {
// 					background: dodgerblue;
// 					color: white;
// 				}
// 			}
// 		}
// 	}

// }


// .popup-overlay {
//   position: fixed;
// 	z-index: 999;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
//   background-color: rgba(0, 0, 0, 0.5);
//   display: flex;
//   justify-content: center;
//   align-items: center;
// }

// .popup {
//   background-color: #fff;
//   padding: 20px;
// 	max-height: 95%;
// 	max-width: 97%;
//   border-radius: 8px;
//   box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);

// 	p {
// 		margin-bottom: 3px;
// 	}

// 	#expanded-img{
// 		width:500px;
// 		margin: 10px 5px;
// 		height:300px;
// 		border-radius: 5px;
// 		box-shadow: 0 7px 9px rgba(0, 2, 68, 0.8) !important;
// 	}
// 	.thumbnail img{
// 		width:200px;
// 		margin:5px;
// 		height:130px;
// 		box-shadow: 0 3px 5px rgba(0, 2, 68, 0.8) !important;
// 		border-radius: 3px;
// 		display: inline;
// 	}
// 	.expanded img{
//     height:315px;
// 	}
// }


// @media screen and (max-width: 1200px) {
// 	.projects{
// 		.wrapper {
// 			display: block!important;
// 			width: 90%;
// 		}
// 		.card {
// 			height:250px;
// 		}
// 	}

// 	.popup {
// 		#expanded-img{
// 			width:400px;
// 			margin: 5px;
// 			height:250px;
// 		}
// 		.thumbnail img{
// 			width:150px;
// 			margin:3px;
// 			height:100px;
// 		}
// 	}
// }
// @media screen and (max-width: 768px) {
// 	.popup {
// 		#expanded-img{
// 			width:340px;
// 			margin: 5px 0px;
// 			height:230px;
// 		}
// 		.thumbnail img{
// 			width:70px;
// 			margin:3px;
// 			height:50px;
// 		}
// 	}
// 	.projects{
// 		.card:hover .info{
// 			transform: none;
// 		}
// 	}

// }


// .center-dot{
// 	font-size: 20px;
// 	margin-right: 2px;
// }


// .social-links{
// 	.leetcode{
// 		height: 50px;
// 		width: 50px;
// 		margin-bottom: -3px;
// 	}
// }