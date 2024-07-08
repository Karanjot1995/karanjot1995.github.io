import styles from '../styles/work.module.css';
import { work as workData } from '../data';

function Work() {
  return (
    <div className={styles.work} id="work">
      <h2 className="block-header">Work</h2>

      <div className={styles.timeline}>
        <div id="exp" className={styles.workExp}>
          <h3>Experience</h3>
          <div className="timeline">
            {workData.experience.map((exp, index) => (
              <div className={styles.timelineItem} key={`exp-${index}`}>
                <h5 className={styles.itemPeriod}>{exp.timePeriod}</h5>
                <span className={styles.itemCompany}>{exp.company}</span>
                <h4 className={styles.itemTitle}>{exp.title}</h4>
                <p>{exp.description}</p>
              </div>
            ))}
          </div>
        </div>
        <div id='edu' className={styles.education}>
          <h3>Education</h3>
          <div className="timeline">
            {workData.education.map((edu, index) => (
              <div className={styles.timelineItem} key={`edu-${index}`}>
                <h5 className={styles.itemPeriod}>{edu.timePeriod}</h5>
                <span className={styles.itemCompany}>{edu.company}</span>
                <h4 className={styles.itemTitle}>{edu.title}</h4>
                <p>{edu.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Work;
