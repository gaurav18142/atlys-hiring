import { useCallback, useEffect, useState } from 'react';
import Header from '../../components/Header';
import PostInput from '../../components/PostInput';
import PostList from '../../components/PostList';
import styles from './Home.module.css'
import { useAuth } from '../../context/AuthContext';
import Modal from '../../components/Modal';
import SignInForm from '../../components/SignInForm';
import SignUpForm from '../../components/SignUpForm';

function Home() {

    const [openModal, setOpenModal] = useState(false);
    const { isAuthenticated } = useAuth();
    const [showSignUp, setShowSignUp] = useState(false);

    const handleLoginClick = () => {
        setOpenModal(true);
      };

      useEffect(() => {
        if (isAuthenticated) {
            setOpenModal(false);
        }
      }, [isAuthenticated]);

      const onSignUpClick = useCallback(() => {
        setShowSignUp(true)
      }, [])

      const onSignInClick = useCallback(() => {
        setShowSignUp(false);
      }, [])

  return (
    <>
        <Header />
        <div className={styles.homeContainer}>
            <PostInput handleLoginClick={handleLoginClick} />
            <PostList />
        </div>
        {openModal && (
            <Modal onClose={() => setOpenModal(false)}>
              {!showSignUp ? <SignInForm onSignUpClick={onSignUpClick} /> : <SignUpForm onSignInClick={onSignInClick} />}
            </Modal>
          )}
    </>
  );
}

export default Home; 