import { useState } from "react";
import "../assets/css/main.css";
import { Link } from "react-router";
export default function MainPage() {
  const [enter, setEnter] = useState(false);
  const [enterPress, setEnterPress] = useState(false);
  const [enterSpaces, setEnterSpaces] = useState(false);

  return (
    <>
      <main>
        <section className="mainpage-section">
          <div className="mainpage-div">
            <div
              onMouseEnter={() => setEnter(true)}
              onMouseLeave={() => setEnter(false)}
              className={
                enter ? "mainpage-sub-div enter" : "mainpage-sub-div not-enter"
              }
            >
              <Link to="/products">
                <img src="img/athena/001.webp" alt="products" />
                <div>
                  {!enter && (
                    <div>
                      PRODUCTS <i class="bi bi-chevron-compact-right"></i>
                      <i class="bi bi-chevron-compact-right"></i>
                      <i class="bi bi-chevron-compact-right"></i>
                    </div>
                  )}
                </div>
              </Link>
            </div>
            <div
              onMouseEnter={() => setEnterPress(true)}
              onMouseLeave={() => setEnterPress(false)}
              className={
                enterPress
                  ? "mainpage-sub-div-press enter"
                  : "mainpage-sub-div-press not-enter"
              }
            >
              <Link to="/press">
                <img src="img/VogueCover.jpg" alt="press" />
                <div>
                  {!enterPress && (
                    <div>
                      PRESS <i className="bi bi-chevron-compact-right"></i>
                      <i className="bi bi-chevron-compact-right"></i>
                      <i className="bi bi-chevron-compact-right"></i>
                    </div>
                  )}
                </div>
              </Link>
            </div>
            <div
              onMouseEnter={() => setEnterSpaces(true)}
              onMouseLeave={() => setEnterSpaces(false)}
              className={
                enterSpaces
                  ? "mainpage-sub-div-press-spaces enter"
                  : "mainpage-sub-div-press-spaces not-enter"
              }
            >
              <Link to="/spaces">
                <img src="img/spaces.png" alt="spaces" />
                <div>
                  {!enterSpaces && (
                    <div>
                      SPACES <i className="bi bi-chevron-compact-right"></i>
                      <i className="bi bi-chevron-compact-right"></i>
                      <i className="bi bi-chevron-compact-right"></i>
                    </div>
                  )}
                </div>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
