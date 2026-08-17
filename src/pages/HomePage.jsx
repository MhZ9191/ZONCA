import { Link } from "react-router";
import "../assets/css/home.css";

export default function HomePage() {
  return (
    <>
      <main>
        <section className="home-section">
          <Link to="/home">
            <figure>
              <div>
                <img src="img/logo white.png" alt="FZS" />
                <figcaption>FrancescoZoncaStudio</figcaption>
              </div>
            </figure>
          </Link>
        </section>
      </main>
    </>
  );
}
