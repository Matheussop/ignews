import styles from './styles.module.scss';

export function SubscribeButton() {

  async function handleSubscribe() {
  }

  return (
    <button
      type="button"
      className={styles.subscribeButton}
      onClick={handleSubscribe}
    >
      Subscribe now
    </button>
  );
}