import { FaGithub } from 'react-icons/fa';
import { FiX } from 'react-icons/fi';

import styles from './styles.module.scss';

export function SignInButton() {

  return false ? (
    <button 
      type="button"
      className={styles.signInButton}
      onClick={() => {}}
    >
      <FaGithub color="#04d361" />
       Matheus 
      <FiX color="#737380" className={styles.closeIcon} />
    </button>
  ) : (
    <button 
      type="button"
      className={styles.signInButton}
      onClick={() => {}}
    >
      <FaGithub color="#eba417" />
      Sign in with Github
    </button>
  )
}