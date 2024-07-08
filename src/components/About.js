import { Link } from 'react-scroll';

import styles from '../styles/about.module.css';
import { about } from '../data';
import Resume from '../assets/resume.pdf';
import { reactScrollOptions } from '../constant';

function About() {
  return (
    <div className={styles.about} id="aboutme">
      <div className={styles.left}>
        {/* <img src={Me} /> */}
        <div></div>
      </div>
      <div className={styles.right}>
        <div className={styles.heading}>{about.title}</div>
        <p>{about.description}</p>
        <div className={styles.cta}>
          <a
            href={Resume}
            target="_blank"
            rel="noreferrer"
            className="btn btn-primary"
          >
            Resume
          </a>
          <Link
            className="btn btn-secondary"
            to="contact"
            {...reactScrollOptions}
          >
            Contact Me
          </Link>
        </div>

        <div className={styles.socialLinks}>
          {about.social.map((link) => (
            <a
              href={link.link}
              target="_blank"
              key={link.name}
              rel="noreferrer"
            >
              <img src={link.image} alt={link.name} />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default About;
