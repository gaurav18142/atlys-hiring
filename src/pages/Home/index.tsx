import { useEffect, useState } from 'react';
import Header from '../../components/Header';
import PostInput from '../../components/PostInput';
import PostList from '../../components/PostList';
import styles from './Home.module.css'
import { useAuth } from '../../context/AuthContext';
import Modal from '../../components/Modal';
import SignInForm from '../../components/SignInForm';

function Home() {

    const [openModal, setOpenModal] = useState(false);
    const { isAuthenticated, logout: doLogout } = useAuth();

    const handleLoginClick = () => {
        setOpenModal(true);
      };

      useEffect(() => {
        if (isAuthenticated) {
            setOpenModal(false);
        }
      }, [isAuthenticated]);

  return (
    <>
        <Header handleLoginClick={handleLoginClick} />
        <div className={styles.homeContainer}>
            <PostInput handleLoginClick={handleLoginClick} />
            <PostList />
        </div>
        {openModal && (
            <Modal onClose={() => setOpenModal(false)}>
              <SignInForm />
            </Modal>
          )}
    </>
  );
}

export default Home; 