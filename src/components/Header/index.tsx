import styles from './Header.module.css'
import icon from '../../assets/icon.svg';
import logout from '../../assets/logout.svg';
import login from '../../assets/login.svg';
import { useAuth } from '../../context/AuthContext';
import type { HeaderProps } from '../../types/Home';

function Header(props: HeaderProps) {

    const { handleLoginClick } = props;

    const { isAuthenticated, logout: doLogout } = useAuth();

    const handleLogoutClick = () => {
      doLogout();
    };

    return (
      <>
        <header className={styles.header}>
          <div className={styles.header__left}>
            <img src={icon} alt="App Icon" className={styles.header__icon} />
            <span className={styles.header__title}>foo-rum</span>
          </div>
          <div className={styles.header__right}>
            <span
              className={styles.header__login}
              onClick={isAuthenticated ? handleLogoutClick : handleLoginClick}
              style={{ cursor: 'pointer' }}
            >
              {isAuthenticated ? 'Logout' : 'Login'}
            </span>
            <img
              src={isAuthenticated ? login : logout}
              alt={isAuthenticated ? 'Login Icon' : 'Logout Icon'}
              className={styles.header__logout}
              onClick={isAuthenticated ? handleLogoutClick : handleLoginClick}
              style={{ cursor: 'pointer' }}
            />
          </div>
        </header>
      </>
    );
}

export default Header;