import styles from '../styles/contact.module.css';

function Contact() {
  return (
    <div className={styles.contact} id="contact">
      <h2 className="block-header">Contact</h2>

      <div className={styles.itemsGroup}>
        <div className={styles.contactItem}>
          <div
            className="fs1"
            aria-hidden="true"
            data-icon="&#xe012;"
            style={{ fontSize: 35, color: 'var(--primary)' }}
          ></div>
          <div className={styles.info}>
            <h4>Texas</h4>
            <p>Based in Texas.</p>
          </div>
        </div>

        <div className={styles.contactItem}>
          <div
            className="fs1"
            aria-hidden="true"
            data-icon="&#xe019;"
            style={{ fontSize: 35, color: 'var(--primary)' }}
          ></div>
          <div className={styles.info}>
            <h4>karan.nanda97@gmail.com</h4>
            <p>
              Feel free to email me with anything you'd want to chat about :)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
