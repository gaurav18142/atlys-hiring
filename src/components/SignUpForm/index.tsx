import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './SignUpForm.module.css';
import { useAuth } from '../../context/AuthContext';
import { addUser } from '../../utils/auth';
import { ROUTES } from '../../constants/common-constants';

function SignUpForm() {
  const [name, setName] = useState('');
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!name) {
      setError('Name is required.');
      return;
    }

    if (!email.includes('@')) {
      setError('Please enter a valid email address.');
      return;
    }

    if (password.length < 8) {
      setError('Password must be at least 8 characters long.');
      return;
    }

    if (addUser(name, email, password)) {
      login({ name, email });
      navigate(ROUTES.HOME);
    } else {
      setError('A user with this email already exists.');
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        className={styles.input}
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="email"
        placeholder="Email"
        className={styles.input}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        className={styles.input}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      {error && <p className={styles.error}>{error}</p>}
      <button type="submit" className={styles.button}>Sign Up</button>
      <p className={styles.signInLink}>
        Already have an account? <Link to={ROUTES.SIGN_IN}>Sign in</Link>
      </p>
    </form>
  );
}

export default SignUpForm; 