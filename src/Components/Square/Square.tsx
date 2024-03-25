import styles from "./Square.module.css";

type params = {
  value?: string | null;
  onClick?: () => void; // callback function
};

function Square({ value, onClick }: params) {
  return (
    <button className={styles.square} onClick={onClick}>
      {value}
    </button>
  );
}

export default Square;
