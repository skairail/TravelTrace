// Uses the same styles as Product
import PageNav from "../components/pageNav";
import styles from "./Product.module.css";
export default function Product() {
  return (
    <main className={styles.product}>
      <PageNav />

      <section>
        <div>
          <h2>
            Simple pricing.
            <br />
            Just $5/month.
          </h2>
          <p>
            Access to all features of the TravelTrace app is available for a
            modest monthly fee of $5. This small amount opens up a full range of
            possibilities for you.
          </p>
        </div>
        <img src="img-2.jpg" alt="overview of a large city with skyscrapers" />
      </section>
    </main>
  );
}
