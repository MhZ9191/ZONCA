import { Link } from "react-router";
import "../assets/css/spaces.css";
import { zones, spaces } from "../assets/data/Data";
import { useState } from "react";
export default function SpacesPage() {
  const [filterSpaces, setFilterSpaces] = useState(spaces);
  const [filterColor, setFilterColor] = useState("all");

  const handleFilter = (el) => {
    const content = el.target.textContent.toLowerCase();
    setFilterColor(content);
    const tmpSpaces = [...spaces];
    if (content === "all") {
      setFilterSpaces(tmpSpaces);
    } else {
      setFilterSpaces(tmpSpaces.filter((el) => el.zone === content));
    }
  };

  return (
    <>
      <main>
        <section className="spaces-section">
          {/* <h1>SPACES</h1> */}
          <div className="spaces-zones">
            {zones.map((el, i) => {
              return (
                <span
                  className={filterColor === el ? "active-filter" : ""}
                  key={i}
                  onClick={(e) => handleFilter(e)}
                >
                  {el.toUpperCase()}
                </span>
              );
            })}
          </div>
          <div className="spaces-div">
            {filterSpaces.map((el, i) => {
              return (
                <>
                  <div key={el.slug} className="spaces-card">
                    <Link to={"/spaces/" + el.slug}>
                      <img
                        src={`${import.meta.env.BASE_URL}${el.image}`}
                        alt={el.slug}
                      />
                      <div className="spaces-name">{el.name}</div>
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
