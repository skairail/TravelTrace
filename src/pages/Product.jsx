import PageNav from "../components/PageNav/PageNav";
import styles from "./Product.module.css";

export default function Product() {
  return (
    <main className={styles.product}>
      <PageNav />

      <section>
        <img
          src="img-1.jpg"
          alt="person with dog overlooking mountain with sunset"
        />
        <div>
          <h2>About TravelTrace.</h2>
          <p>
            The TravelTrace program is your faithful companion in the world of
            adventure! This is an intuitive app that helps you capture your
            memories of every trip on an interactive world map.
          </p>
          <p>
            Simply add markers to your map, mark the places you've visited, and
            share your impressions. "TravelTrace" provides a convenient
            interface to record your emotions and important moments.
          </p>
        </div>
      </section>
    </main>
  );
}
