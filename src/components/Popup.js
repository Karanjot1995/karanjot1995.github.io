// Popup.js
import React, { useRef, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { FaRegWindowClose } from "react-icons/fa";

const Popup = ({ onClose, project }) => {
  const popupRef = useRef(null);

  // useEffect(() => {
  //   const handleOutsideClick = (event) => {
  //     if (popupRef.current && !popupRef.current.contains(event.target)) {
  //       onClose();
  //     }
  //   };

  //   document.addEventListener('mousedown', handleOutsideClick);

  //   return () => {
  //     document.removeEventListener('mousedown', handleOutsideClick);
  //   };
  // }, [onClose]);

  function changeExpanded(e){
    console.log(project)
    // document.getElementById('expanded-img').src = e.target.src
    // img.src = e.target.src
    // .src =  e.target.src
    let expanded = ReactDOM.findDOMNode(e.currentTarget).parentNode.parentNode.firstChild.firstChild
    console.log(expanded)
    expanded.src = e.target.src
  }

  console.log(project)

  return (
    <div className="popup-overlay">
      <div className="popup" ref={popupRef}>
        <div className='close-icon'><a onClick={onClose}><FaRegWindowClose /></a></div>
        {Object.keys(project).length?
        <div className="popup-content">
          <div className="text-center slide-card" style={{'padding':'20px'}}>
            {project.url?
              <a className="expanded" href={project.url?project.url:''} target="_blank">
              <img src={project.images[0]} id="expanded-img"/>
              </a>
              :
              <div className="expanded">
                <img src={project.images[0]} id="expanded-img"/>
              </div>
            }
           
            <div>
            {project.images.map(img=>
              <a className="thumbnail" onClick={(e)=>changeExpanded(e)}><img src={img}/></a>
              )}
            </div>
            <h3 className="d-flex justify-content-center">
              {project.url?
                <a href={project.url} target="_blank">{project.title}</a>
                :
                <a>{project.title}</a>
              }
              (<a className="github-link d-flex justify-content-center" href={project.github_url}>
                <img className="github-logo" src={require('../images/github-logo.png')}/>github
              </a>)
            </h3>
            <p>{project.description}</p>
            <p>Tech Stack: {project.tech_stack}</p>
          </div>
        </div>
        :''}
      </div>
    </div>
  );
};

export default Popup;
