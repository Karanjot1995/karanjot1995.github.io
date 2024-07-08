import '../styles/skills.scss';
import { skills  } from '../data';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function Skills() {

  return (
    <div className="skills" id="skills">
      <h2 className="block-header">Skills</h2>          
      <div class="">
        <div class="grid">
          {skills.map(skill=>
            <div class="skill-box">
              <div class="skill-info d-flex flex-column align-items-center">
                {/* <img src={skill.icon} alt={skill.name} /> */}
                <img src={skill.icon}/>
                <span>{skill.name}</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Skills;
