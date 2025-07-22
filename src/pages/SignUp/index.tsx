import SignUpForm from '../../components/SignUpForm';
import styles from './SignUp.module.css';

function SignUp() {
  return (
    <div>
      <h2 className={styles.heading}>Sign Up</h2>
      <SignUpForm />
    </div>
  );
}

export default SignUp; 