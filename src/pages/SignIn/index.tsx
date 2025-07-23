import { useNavigate } from 'react-router-dom';
import SignInForm from '../../components/SignInForm';
import styles from './SignIn.module.css';
import { useCallback } from 'react';
import { ROUTES } from '../../constants/common-constants';

function SignIn() {

  const navigate = useNavigate();

  const onSignUpClick = useCallback(() => {
    navigate(ROUTES.SIGN_UP)
  }, [navigate])

  return (
    <div>
      <h2 className={styles.heading}>Log In</h2>
      <SignInForm onSignUpClick={onSignUpClick} />
    </div>
  );
}

export default SignIn; 