import { useNavigate } from 'react-router-dom';
import SignUpForm from '../../components/SignUpForm';
import styles from './SignUp.module.css';
import { useCallback } from 'react';
import { ROUTES } from '../../constants/common-constants';

function SignUp() {

  const navigate = useNavigate();

  const onSignInClick = useCallback(() => {
    navigate(ROUTES.SIGN_IN)
  }, [navigate])

  return (
    <div>
      <h2 className={styles.heading}>Sign Up</h2>
      <SignUpForm onSignInClick={onSignInClick} />
    </div>
  );
}

export default SignUp; 