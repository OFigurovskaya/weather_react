import styles from './Header.module.css';

function Header() {

      return (
        <div>
          <ul className={styles.list}>
            <li>head</li>
            <li>about</li>
            <li>contacts</li>
            <li>today</li>
            <li>tomorrow</li>
          </ul>
        </div>
      );
}

export default Header;
