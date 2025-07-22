import SignInForm from '../../components/SignInForm';
import styles from './SignIn.module.css';

function SignIn() {
  return (
    <div>
      <h2 className={styles.heading}>Log In</h2>
      <SignInForm />
    </div>
  );
}

export default SignIn; 