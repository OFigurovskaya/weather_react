import styles from './Footer.module.css';

function Footer() {

      return (
        <div>
          <ul className={styles.listFooter}>
            <li>head</li>
            <li>about</li>
            <li>contacts</li>
            <li>today</li>
            <li>tomorrow</li>
          </ul>
        </div>
      );
}

export default Footer;
