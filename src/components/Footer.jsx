import { Link } from "react-router";
import "../assets/css/footer.css";

export default function Footer() {
  return (
    <>
      <section className="footer-section">
        <div className="footer-div">
          <div>- Milan - Tokyo - Borgomanero -</div>
          <div>
            <a href="mailto:francescozonca.studio@gmail.com">
              francescozonca.studio@gmail.com
            </a>
          </div>
          <div>
            <Link
              to="https://www.instagram.com/francescozoncastudio/?hl=en"
              target="blank"
            >
              <div className="instagram-div">
                <img
                  src={`${import.meta.env.BASE_URL}img/insta.png`}
                  alt="instagram"
                />
                <span>FrancescoZoncaStudio</span>
              </div>
            </Link>
          </div>
          <div className="footer-logo">
            <span>&copy; Copyright - FrancescoZoncaStudio</span>
            <img
              src={`${import.meta.env.BASE_URL}img/logo white.png`}
              alt="logo"
            />
          </div>
        </div>
      </section>
    </>
  );
}
