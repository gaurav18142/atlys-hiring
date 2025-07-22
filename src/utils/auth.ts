import { credentials } from '../data/credentials';

export function findUserByCredentials(email: string, password: string) {
  return credentials.find(
    (cred) => cred.email === email && cred.password === password
  );
}

export function addUser(name: string, email: string, password: string):boolean {
  if (credentials.some((cred) => cred.email === email)) {
    return false;
  }
  credentials.push({ name, email, password });
  return true;
} 