import styles from "./InfoCard.module.css";

type InfoCardProps = {
  title: string;
  description: string;
};

export default function InfoCard({ title, description }: InfoCardProps) {
  return (
    <section className={styles.card}>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.description}>{description}</p>
    </section>
  );
}
