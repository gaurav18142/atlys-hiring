import styles from './Header.module.css'
import type { HeaderProps } from '../../types/Home';
import icon from '../../assets/icon.svg';
import logout from '../../assets/logout.svg';
import login from '../../assets/login.svg';
import { useAuth } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import SignInForm from '../SignInForm';
import Modal from '../Modal';

function Header(props: HeaderProps) {
    const { children } = props;
    const { isAuthenticated, logout: doLogout } = useAuth();
    const navigate = useNavigate();
    const [modalOpen, setModalOpen] = useState(false);

    const handleLoginClick = () => {
      setModalOpen(true);
    };
    const handleLogoutClick = () => {
      doLogout();
      navigate('/sign-in');
    };

    useEffect(() => {
      if (isAuthenticated) {
        setModalOpen(false);
      }
    }, [isAuthenticated]);

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
          {modalOpen && (
            <Modal onClose={() => setModalOpen(false)}>
              <SignInForm />
            </Modal>
          )}
        </header>
        {children}
      </>
    );
}

export default Header;