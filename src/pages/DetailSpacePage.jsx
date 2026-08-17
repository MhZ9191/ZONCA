import { useState } from "react";
import "../assets/css/detailSpace.css";
import { useEffect } from "react";
import { spaces } from "../assets/data/Data";
import { useParams } from "react-router";

export default function DetailSpacePage() {
  const [space, setSpace] = useState(undefined);
  const { slug } = useParams();

  useEffect(() => {
    setSpace(spaces.find((el) => el.slug === slug));
  }, []);

  return (
    <>
      <main>
        <section className="detail-space-section">
          <div className="detail-space-div">
            <div className="detail-info-div">
              {/* INFO */}
              <h1>{space && space.name.toUpperCase()}</h1>
              <div className="detail-info-description">
                {space &&
                  space.description.map((el, i) => {
                    return <p key={i}>{el}</p>;
                  })}
              </div>
              <div>
                <div>
                  <span>Location: {space && space.location}</span>
                </div>
                <div>
                  <span>Dimension: {space && space.Dimension}</span>
                </div>
                <div>
                  <span>Function: {space && space.Function}</span>
                </div>
                <div>
                  <span>{space && space.year}</span>
                </div>
                <div>
                  {space && space.copy && (
                    <span>&copy; copyright images - {space.copy}</span>
                  )}
                </div>
              </div>
            </div>
            {space &&
              space.imgs.map((el, i) => {
                return (
                  <div key={i} className="detail-image">
                    <img src={el} alt={"image-" + el} />
                  </div>
                );
              })}
          </div>
        </section>
      </main>
    </>
  );
}
