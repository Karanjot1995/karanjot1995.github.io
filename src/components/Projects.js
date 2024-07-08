import react, { useEffect, useRef, useState } from 'react'
import styles from '../styles/projects.module.css';
import '../styles/projects.scss';
import { projects  } from '../data';
import ReactDOM from 'react-dom';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Popup from './Popup';

function Projects() {
  const [toggleMenu, settoggleMenu] = useState(false)

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const [isOpen, setIsOpen] = useState(false);
  const [project, setProject] = useState({})


  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }
    window.addEventListener('click', function(e){
      if (btnRef.current && !btnRef.current.contains(e.target)){
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

  const togglePopup = (project) => {
    setProject(project)
    setIsOpen(!isOpen);
  };



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
    <div className={styles.projects} id="projects">
      <h2 className="block-header">Projects</h2>
      
      <div className="projects text-center" ref={myRef} id="projects-work">
         
          <div className='wrapper m-auto'>
          {projects.all.map(project=>(
             <div className="card">
              <img src={project.thumbnail}/>
              <div className="info">
                <h3 className="card-title">{project.title}</h3>
                <div className="extra-content">{project.description}</div>
                <p className="card-text">Tech Stack: {project.tech_stack}</p>
                {project.images.length>1?<button className='view' onClick={()=>togglePopup(project)}>Expand</button>:''}
              </div>
              <div className='title'>{project.title}</div>
            </div>
            ))}
          </div>

          {isOpen && (
            <Popup project={project} onClose={()=>togglePopup({})}/>
          )}
          <h2 className="block-header">Work Projects</h2>
          <div className='wrapper m-auto'>
            {projects.work.map(project=>(
              <div className="card">
                <img src={project.thumbnail}/>
                <div className="info">
                  <h3 className="card-title">{project.title}</h3>
                  <div className="extra-content">{project.description}</div>
                  <p className="card-text">Tech Stack: {project.tech_stack}</p>
                  {project.images && project.images.length?<button className='view' onClick={()=>togglePopup(project)}>Expand</button>:''}
                </div>
                <div className='title'>{project.title}</div>
              </div>
            ))}
          </div>
        
      </div>
    </div>
  );
}

export default Projects;
