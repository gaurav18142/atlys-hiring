import { useState, useCallback, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './SignInForm.module.css';
import { useAuth } from '../../context/AuthContext';
import { findUserByCredentials } from '../../utils/auth';
import { ROUTES } from '../../constants/common-constants';

function SignInForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate(ROUTES.HOME);
    }
  }, [isAuthenticated, navigate]);

  const handleEmailChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  }, []);

  const handlePasswordChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!email.includes('@')) {
      setError('Please enter a valid email address.');
      return;
    }

    if (password.length < 8) {
      setError('Password must be at least 8 characters long.');
      return;
    }

    const user = findUserByCredentials(email, password);

    if (user) {
      login({ name: user.name, email: user.email });
      navigate(ROUTES.HOME);
    } else {
      setError('Invalid email or password.');
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        type="email"
        placeholder="Email"
        className={styles.input}
        value={email}
        onChange={handleEmailChange}
      />
      <input
        type="password"
        placeholder="Password"
        className={styles.input}
        value={password}
        onChange={handlePasswordChange}
      />
      {error && <p className={styles.error}>{error}</p>}
      <button type="submit" className={styles.button}>Sign In</button>
      <p className={styles.signupLink}>
        Do not have an account? <Link to={ROUTES.SIGN_UP}>Sign up</Link>
      </p>
    </form>
  );
}

export default SignInForm; 