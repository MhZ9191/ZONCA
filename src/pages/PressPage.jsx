import { Link } from "react-router";
import "../assets/css/press.css";
import { magazines } from "../assets/data/Data";

export default function PressPage() {
  return (
    <>
      <main>
        <section className="press-section">
          <div>{/* <h1>PRESS</h1> */}</div>
          <div className="press-div">
            {magazines.map((el, i) => {
              return (
                <>
                  <div key={i} className="press-card-div">
                    <Link
                      to={el.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <figure>
                        <img
                          src={`${import.meta.env.BASE_URL}${el.image}`}
                          alt={el.image}
                        />
                        <figcaption>{el.title}</figcaption>
                      </figure>
                    </Link>
                  </div>
                </>
              );
            })}
          </div>
        </section>
      </main>
    </>
  );
}
