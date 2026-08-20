import styles from './Header.module.scss';

function Header() {

      return (
        <div className="header">
          <ul className={styles.header__list}>
            <li className="header__item">head</li>
            <li className="header__item">about</li>
            <li className="header__item">contacts</li>
            <li className="header__item">today</li>
            <li className="header__item">tomorrow</li>
          </ul>
        </div>
      );
}

export default Header;
