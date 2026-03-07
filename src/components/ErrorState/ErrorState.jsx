import { Link } from "react-router-dom";
import styles from "./ErrorState.module.css";

const ErrorState = ({
  message = "Une erreur est survenue.",
  showHomeLink = true,
  onRetry,
}) => {
  return (
    <div className={styles.container}>
      <h2>Oups 😕</h2>

      <p className={styles.message}>{message}</p>

      <div className={styles.actions}>
        {onRetry && (
          <button onClick={onRetry} className={styles.retryBtn}>
            Réessayer
          </button>
        )}

        {showHomeLink && (
          <Link to="/" className={`${styles.homeLink}`}>
            <button className={styles.retryBtn}>Retour a l'accueil</button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default ErrorState;
